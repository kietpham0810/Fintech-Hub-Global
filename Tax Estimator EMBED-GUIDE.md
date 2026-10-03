# Embedding the Datum AI Tax Estimator on datumai.online

The estimator is a single self-contained HTML file: `datum-estimator-all-returns.html`.
No build step, no dependencies, no external scripts. Everything runs in the visitor's
browser and nothing is transmitted anywhere.

There are two ways to put it on your site. Pick based on how much control you want.

---

## Method 1 — Iframe (recommended)

Host the file once, point an iframe at it. Your site's CSS can't break the estimator,
the estimator's CSS can't break your site, and updating the calculator means replacing
one file rather than re-pasting code into your page builder.

### Step 1 — Upload the file

Put `datum-estimator-all-returns.html` somewhere your site can serve it:

| Where you host | Where to put it | Resulting URL |
|---|---|---|
| WordPress | Media Library, or `/wp-content/uploads/tools/` via FTP | `https://datumai.online/wp-content/uploads/tools/estimator.html` |
| Webflow | Not supported for `.html` — use Netlify or Cloudflare Pages, below | — |
| Squarespace | Not supported — use Netlify or Cloudflare Pages, below | — |
| Your own server | `/public/tools/` | `https://datumai.online/tools/estimator.html` |
| Netlify Drop | Drag the file onto app.netlify.com/drop | `https://your-site.netlify.app/estimator.html` |
| Cloudflare Pages | Upload as a static asset | `https://your-project.pages.dev/estimator.html` |

If your host doesn't allow raw `.html` uploads, Netlify Drop is free, takes about
thirty seconds, and you can point a subdomain like `tools.datumai.online` at it later.

### Step 2 — Paste the embed code

Put this wherever you want the estimator to appear. Replace the `src` with your URL.

```html
<div style="max-width:1180px;margin:0 auto;">
  <iframe
    id="datum-estimator"
    src="https://datumai.online/tools/estimator.html"
    title="Datum AI 2026 Tax Estimator"
    loading="lazy"
    style="width:100%;border:0;display:block;min-height:1400px;"
    scrolling="no"></iframe>
</div>

<script>
(function () {
  var frame = document.getElementById('datum-estimator');
  window.addEventListener('message', function (event) {
    if (!event.data || typeof event.data.datumEstimatorHeight !== 'number') return;
    frame.style.height = (event.data.datumEstimatorHeight + 40) + 'px';
  });
})();
</script>
```

The estimator reports its own height as visitors open and close sections, so the iframe
grows and shrinks with the content. The `min-height` is a fallback for the split second
before the first message arrives, and for the rare browser without `ResizeObserver`.

### Step 3 — Platform-specific notes

**WordPress.** Block editor: add a *Custom HTML* block and paste. Classic editor: switch
to the *Text* tab first. If your theme strips `<script>` tags, install a snippet plugin
such as WPCode and add the script there instead — or just drop the script and keep the
`min-height`, which works fine, it simply won't auto-resize.

**Squarespace.** Add an *Embed* block, choose the code option, paste. Squarespace allows
`<script>` on Business plans and above. On Personal plans, keep the iframe and drop the
script, and raise `min-height` to `2400px` so nothing gets clipped.

**Webflow.** Drag in an *Embed* element and paste. The 50,000-character limit doesn't
matter here because the iframe snippet is tiny — this is one of the reasons to prefer
the iframe method on Webflow.

**Wix.** Add *Embed Code* → *Embed HTML*, paste, then drag the container tall. Wix runs
embeds in its own sandboxed iframe, so set the Wix container height manually to about
2,400px and skip the resize script; it won't reach through two frames.

**Framer.** Insert an *Embed* component, paste, set the frame to fixed height 2,400px
or wire the resize script through a code component.

**Shopify.** Create a page, switch the content editor to HTML view, paste.

---

## Method 2 — Paste the whole file inline

If you want the estimator to live directly in a page rather than in a frame, open
`datum-estimator-all-returns.html`, copy everything **between** `<body>` and `</body>`
(that is, the `<main>` element and the `<script>` block), plus the entire `<style>`
block from the `<head>`, and paste all of it into a custom HTML block.

Three things to know before you do:

1. **Your theme's CSS will reach the estimator.** Most themes set global `input`,
   `select`, and `button` styles that will fight the estimator's. If controls look
   wrong, that's why.
2. **The IDs must stay unique on the page.** The estimator uses IDs like `status`,
   `wages`, and `interest`. If your theme or another plugin uses the same IDs, things
   break in ways that are hard to diagnose.
3. **Updating means re-pasting the whole thing.** With the iframe method you replace
   one file.

Use this method only if you specifically need the estimator to inherit your site's
typography, and accept the maintenance cost.

---

## Branding it

All colors and shapes come from CSS custom properties at the top of the file. Edit
these values in the `:root` block and everything follows:

```css
:root {
  --bg:      #f7f8fa;   /* page background */
  --card:    #ffffff;   /* card surfaces */
  --text:    #14181f;   /* body text */
  --muted:   #667085;   /* hints, labels, secondary text */
  --border:  #e4e7ec;   /* all borders and rules */
  --accent:  #111827;   /* buttons, document letter chips */
  --soft:    #f2f4f7;   /* result boxes, badges */
  --ok:      #067647;   /* refund green */
  --r:       18px;      /* corner radius */
}
```

There's a matching dark-mode block immediately below it. If you set both, the estimator
follows the visitor's system theme automatically. To force light mode regardless, add
`data-theme="light"` to the `<html>` tag.

To change the typeface, edit the `font-family` on `body`. If you use a webfont, add the
`<link>` to the `<head>` of the estimator file, not to your site — the iframe needs its
own copy.

---

## What to check after you embed it

- Open it on a phone. The layout collapses to a single column under 880px wide.
- Switch the return type dropdown through all four options and confirm the questions change.
- Tab through the form with the keyboard and confirm focus rings are visible.
- If you use the resize script, open and close a section and watch the iframe grow.
- Confirm the page it lives on isn't also loading a competing analytics or chat widget
  that injects global CSS.

---

## Two things it deliberately does not do

**No data capture.** Nothing is stored, no cookies, no network calls. A visitor can run
it anonymously. That's a trust asset — say so on the page — but it also means you don't
get the lead. If you want an email gate or a "send me this checklist" button, that's a
separate build and it needs a backend endpoint plus a privacy notice, because tax
figures are sensitive personal information.

**No connection to the pricing calculator.** They're independent pages today. Linking
them so complexity signals carry across is worth doing, and it means a returning visitor
answers each question once.

---

## Suggested page copy

Put the estimator on its own page rather than the homepage. Something like:

> **Estimate your 2026 tax before you talk to anyone.**
>
> Pick your return type, answer what you know, and see the tax, the math behind it, and
> the exact documents we'd ask for. It runs in your browser. Nothing is saved or sent.

Link to it from your pricing page and your services pages. The document checklist is the
part worth pointing at in the link text — "see which documents your return needs" gets
more clicks than "tax calculator," and it sets up the engagement better.
