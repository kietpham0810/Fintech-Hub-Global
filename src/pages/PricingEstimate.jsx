import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Câu hỏi dạng select: value là điểm (hoặc hệ số với loại "number")
const selectQuestions = [
  {
    id: 'itemized',
    label: 'Itemized deductions',
    help: 'Mortgage interest, charitable contributions, major deductible expenses.',
    options: [
      { value: 0, label: 'No' },
      { value: 1, label: 'Yes' },
    ],
  },
  {
    id: 'credits',
    label: 'HSA / education / dependent-care complexity',
    help: 'Additional adjustments or credits beyond a basic return.',
    options: [
      { value: 0, label: 'No' },
      { value: 1, label: 'Yes' },
    ],
  },
  {
    id: 'brokerage',
    label: 'Brokerage / investment activity',
    help: 'Stocks, ETFs, capital gains and losses.',
    options: [
      { value: 0, label: 'None', title: 'None / basic 1099-DIV or INT' },
      { value: 1, label: '<50 sales', title: 'Under 50 sales' },
      { value: 2, label: '50–250', title: '50–250 sales' },
      { value: 3, label: '250+', title: '250+ / complex reporting' },
    ],
  },
  {
    id: 'scheduleC',
    label: 'Self-employment / Schedule C',
    help: 'Business or independent contractor activity reported directly on Form 1040.',
    options: [
      { value: 0, label: 'None' },
      { value: 3, label: 'Simple', title: 'Simple business' },
      { value: 4, label: 'Complex', title: 'Complex / depreciation / inventory / home office' },
    ],
  },
  {
    id: 'equity',
    label: 'RSUs / ESPP / stock options',
    help: 'Equity compensation or employer stock transactions.',
    options: [
      { value: 0, label: 'No' },
      { value: 2, label: 'Yes' },
    ],
  },
  {
    id: 'propertySale',
    label: 'Sale of home or other property',
    help: 'Real estate or other property disposition requiring tax reporting.',
    options: [
      { value: 0, label: 'No' },
      { value: 2, label: 'Yes' },
    ],
  },
  {
    id: 'crypto',
    label: 'Cryptocurrency',
    help: 'Choose reconstruction only when records require cleanup or transaction-level rebuilding.',
    options: [
      { value: 0, label: 'None' },
      { value: 2, label: 'Clean', title: 'Clean consolidated reporting' },
      { value: 5, label: 'Reconstruction', title: 'Transaction reconstruction needed' },
    ],
  },
  {
    id: 'basis',
    label: 'Basis / passive-loss / carryforward complexity',
    help: 'Prior-year basis schedules, suspended losses, or similar carryforward analysis.',
    options: [
      { value: 0, label: 'No' },
      { value: 2, label: 'Yes' },
    ],
  },
  {
    id: 'foreignIncome',
    label: 'Foreign income / foreign tax issues',
    help: 'Foreign-source income or credit calculations.',
    options: [
      { value: 0, label: 'No' },
      { value: 4, label: 'Yes' },
    ],
  },
  {
    id: 'foreignReporting',
    label: 'Significant foreign reporting',
    help: 'Potential Form 8938, FBAR, or other substantial international reporting.',
    options: [
      { value: 0, label: 'No' },
      { value: 5, label: 'Yes' },
    ],
  },
  {
    id: 'unusual',
    label: 'Unusual transaction requiring research',
    help: 'Complex one-time transaction, uncertain tax treatment, or technical research.',
    options: [
      { value: 0, label: 'No' },
      { value: 3, label: 'Moderate' },
      { value: 6, label: 'Significant' },
    ],
  },
];

// Câu hỏi dạng số: điểm = giá trị * multiplier
const numberQuestions = [
  {
    id: 'rentals',
    label: 'Rental properties',
    help: 'Schedule E rental real estate. Three complexity points per property.',
    multiplier: 3,
  },
  {
    id: 'simpleK1',
    label: 'Simple K-1s',
    help: 'Partnership, S corporation, estate, or trust K-1s without unusual multi-state issues.',
    multiplier: 2,
  },
  {
    id: 'complexK1',
    label: 'Complex / multi-state K-1s',
    help: 'K-1s requiring additional state or basis analysis.',
    multiplier: 4,
  },
  {
    id: 'additionalStates',
    label: 'Additional states',
    help: 'First state is included. Enter states beyond the first filing state.',
    multiplier: 2,
  },
];

const specialItems = [
  'Amended return',
  'Prior-year delinquent return',
  'Gift tax return',
  'IRS or state notice',
  'Bookkeeping / basis reconstruction',
  'Audit / exam representation',
];

const matrix = {
  C1: { label: 'C1 · Simple', base: 595, priority: 895, privateClient: 1295 },
  C2: { label: 'C2 · Moderate', base: 795, priority: 1195, privateClient: 1795 },
  C3: { label: 'C3 · Advanced', base: 1095, priority: 1595, privateClient: 2395 },
  C4: { label: 'C4 · Complex', base: 1495, priority: 2195, privateClient: 3295 },
  C5: { label: 'C5 · Private Client', base: 1995, priority: 2895, privateClient: 4395 },
};

const money = (n) => '$' + Math.round(n).toLocaleString('en-US');

const complexityOf = (points) => {
  if (points <= 2) return 'C1';
  if (points <= 5) return 'C2';
  if (points <= 9) return 'C3';
  if (points <= 14) return 'C4';
  return 'C5';
};

const clampNum = (raw) => {
  const parsed = parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < 0) return 0;
  return Math.min(parsed, 20);
};

const initialState = () => {
  const s = {};
  selectQuestions.forEach((q) => (s[q.id] = 0));
  numberQuestions.forEach((q) => (s[q.id] = 0));
  return s;
};

// Nút chọn dạng trượt ngang (segmented control)
const Segmented = ({ options, value, onChange }) => (
  <div className="inline-flex flex-wrap gap-1 bg-gray-100 rounded-full p-1">
    {options.map((o) => {
      const active = Number(value) === Number(o.value);
      return (
        <button
          key={o.value}
          type="button"
          title={o.title || o.label}
          onClick={() => onChange(Number(o.value))}
          className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            active
              ? 'bg-gray-900 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {o.label}
        </button>
      );
    })}
  </div>
);

// Bộ tăng/giảm số ngang
const Stepper = ({ value, onChange, min = 0, max = 20 }) => (
  <div className="inline-flex items-center gap-2">
    <button
      type="button"
      aria-label="Decrease"
      onClick={() => onChange(Math.max(min, Number(value) - 1))}
      className="w-10 h-10 rounded-lg border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-40"
      disabled={Number(value) <= min}
    >
      −
    </button>
    <span className="w-8 text-center text-base font-bold text-gray-900 tabular-nums">
      {value}
    </span>
    <button
      type="button"
      aria-label="Increase"
      onClick={() => onChange(Math.min(max, Number(value) + 1))}
      className="w-10 h-10 rounded-lg border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-40"
      disabled={Number(value) >= max}
    >
      +
    </button>
  </div>
);

const PricingEstimate = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(initialState);
  const [specials, setSpecials] = useState([]);

  const setAnswer = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));

  const toggleSpecial = (item) =>
    setSpecials((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );

  const reset = () => {
    setAnswers(initialState());
    setSpecials([]);
  };

  const { points, level, prices } = useMemo(() => {
    let p = 0;
    selectQuestions.forEach((q) => (p += Number(answers[q.id]) || 0));
    numberQuestions.forEach((q) => (p += (Number(answers[q.id]) || 0) * q.multiplier));
    const lvl = complexityOf(p);
    return { points: p, level: lvl, prices: matrix[lvl] };
  }, [answers]);

  const plus = level === 'C5' ? '+' : '';

  const buildSummary = () => {
    const lines = [];
    selectQuestions.forEach((q) => {
      const v = Number(answers[q.id]) || 0;
      if (v > 0) {
        const opt = q.options.find((o) => Number(o.value) === v);
        lines.push(`• ${q.label}: ${opt ? opt.title || opt.label : 'Yes'}`);
      }
    });
    numberQuestions.forEach((q) => {
      const v = Number(answers[q.id]) || 0;
      if (v > 0) lines.push(`• ${q.label}: ${v}`);
    });

    return [
      'Hi Datum AI team, I used the pricing estimator and would like to talk to a tax advisor.',
      '',
      `Estimated complexity: ${prices.label} (${points} complexity points)`,
      `- Essential: ${money(prices.base)}${plus}`,
      `- Priority: ${money(prices.priority)}${plus}`,
      `- Private Client: ${money(prices.privateClient)}${plus}`,
      '',
      lines.length ? 'My tax situation:' : 'My tax situation: basic return (no complex items selected).',
      ...lines,
      specials.length ? `\nSpecial scope (to be quoted separately): ${specials.join(', ')}.` : '',
      '',
      'Note: this is a preliminary estimate. Please confirm final pricing after document review.',
    ]
      .filter((l) => l !== null && l !== undefined)
      .join('\n');
  };

  const goToContact = () => {
    navigate('/contact', {
      state: {
        estimate: {
          complexity: prices.label,
          points,
          essential: `${money(prices.base)}${plus}`,
          priority: `${money(prices.priority)}${plus}`,
          privateClient: `${money(prices.privateClient)}${plus}`,
        },
        subject: `Pricing estimate — ${prices.label}`,
        message: buildSummary(),
      },
    });
  };

  return (
    <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-16">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-extrabold tracking-[0.08em] uppercase text-gray-500 mb-2">
          Datum AI · Individual Tax
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
          Estimate your tax preparation fee.
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Answer a few questions about your tax situation. We&apos;ll estimate your return
          complexity and show three fixed-fee service options. Final pricing is confirmed after
          document review.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
        {/* FORM */}
        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_12px_36px_rgba(16,24,40,0.08)] p-5 md:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Your tax situation</h2>
          <p className="text-sm text-gray-500 mb-4">Only select items that apply to this tax year.</p>

          <div className="grid gap-3 mb-6">
            {selectQuestions.map((q) => (
              <div key={q.id} className="border border-gray-200 rounded-xl p-3.5 bg-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div className="min-w-0">
                    <span className="font-semibold text-sm text-gray-900">{q.label}</span>
                    <small className="block text-gray-500 mt-1 text-xs">{q.help}</small>
                  </div>
                  <div className="shrink-0">
                    <Segmented
                      options={q.options}
                      value={answers[q.id]}
                      onChange={(v) => setAnswer(q.id, v)}
                    />
                  </div>
                </div>
              </div>
            ))}

            {numberQuestions.map((q) => (
              <div key={q.id} className="border border-gray-200 rounded-xl p-3.5 bg-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div className="min-w-0">
                    <span className="font-semibold text-sm text-gray-900">{q.label}</span>
                    <small className="block text-gray-500 mt-1 text-xs">{q.help}</small>
                  </div>
                  <div className="shrink-0">
                    <Stepper
                      value={answers[q.id]}
                      onChange={(v) => setAnswer(q.id, clampNum(v))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-1">Special scope</h2>
          <p className="text-sm text-gray-500 mb-4">
            These items may require a separate engagement or custom quote.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
            {specialItems.map((item) => (
              <label
                key={item}
                className="flex gap-2.5 items-start border border-gray-200 rounded-xl p-3 text-sm text-gray-800 cursor-pointer hover:border-[#008899]/50 transition-colors"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 accent-[#008899]"
                  checked={specials.includes(item)}
                  onChange={() => toggleSpecial(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-2.5 flex-wrap">
            <button
              type="button"
              onClick={reset}
              className="min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-bold border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </section>

        {/* RESULT */}
        <aside
          aria-live="polite"
          className="bg-white border border-gray-200 rounded-2xl shadow-[0_12px_36px_rgba(16,24,40,0.08)] p-5 md:p-6 lg:sticky lg:top-4"
        >
          <div className="flex gap-3 justify-between items-start mb-4">
            <div>
              <div className="text-xs font-extrabold tracking-[0.08em] uppercase text-gray-500">
                Estimated complexity
              </div>
              <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 my-1">
                {prices.label}
              </div>
              <div className="text-gray-500 text-sm">{points} complexity points</div>
            </div>
            <span className="inline-flex px-2.5 py-1.5 rounded-full text-xs font-extrabold bg-gray-100 text-gray-800 whitespace-nowrap">
              Base {money(prices.base)}
            </span>
          </div>

          <div className="grid gap-3">
            <div className="border border-gray-200 rounded-2xl p-4">
              <div className="flex justify-between gap-3 items-baseline">
                <span className="text-base font-extrabold text-gray-900">Essential</span>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  {money(prices.base)}
                  {plus}
                </span>
              </div>
              <p className="mt-1.5 text-gray-500 text-sm">
                Secure portal, tax preparation, e-file, and electronic delivery. Standard
                scheduling and team support.
              </p>
            </div>

            <div className="border-2 border-[#008899] rounded-2xl p-4 relative">
              <span className="absolute -top-2.5 right-3 bg-[#008899] text-white px-2 py-1 rounded-full text-[11px] font-extrabold tracking-wide">
                MOST POPULAR
              </span>
              <div className="flex justify-between gap-3 items-baseline">
                <span className="text-base font-extrabold text-gray-900">Priority</span>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  {money(prices.priority)}
                  {plus}
                </span>
              </div>
              <p className="mt-1.5 text-gray-500 text-sm">
                Named contact, priority scheduling, faster response target, filing transcript
                check, payment reminders, and W-4 review.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-4">
              <div className="flex justify-between gap-3 items-baseline">
                <span className="text-base font-extrabold text-gray-900">Private Client</span>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                  {money(prices.privateClient)}
                  {plus}
                </span>
              </div>
              <p className="mt-1.5 text-gray-500 text-sm">
                CPA-led service, first-choice scheduling subject to availability, enhanced
                transcript monitoring, VIP access, and expanded payment support.
              </p>
            </div>
          </div>

          {specials.length > 0 && (
            <div className="mt-3.5 rounded-xl border border-[#fec84b] bg-[#fffaeb] px-3.5 py-3 text-sm text-gray-800">
              <strong className="block mb-1">Custom scope review required</strong>
              <span>
                The following item{specials.length > 1 ? 's' : ''} will be priced separately:{' '}
                {specials.join(', ')}.
              </span>
            </div>
          )}

          <div className="mt-4 pt-3.5 border-t border-gray-200 text-gray-500 text-xs">
            Your estimate is based on tax-return complexity and your selected service experience.
            Final pricing is confirmed after Datum AI reviews the documents and filing
            requirements.
          </div>

          <button
            type="button"
            onClick={goToContact}
            className="mt-5 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-[#008899] text-white shadow-[0_8px_20px_rgba(0,136,153,0.3)] hover:bg-[#007080] transition-all duration-300"
          >
            Talk to a tax advisor
          </button>

          <div className="mt-3 text-gray-400 text-[11px]">
            This estimator provides a preliminary service quote, not tax advice. Pricing rules are
            configurable by Datum AI.
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PricingEstimate;
