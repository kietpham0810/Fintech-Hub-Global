import React from 'react';

const ProductsBlock = () => {
  return (
    <section className="bg-mysten-black text-mysten-white px-6 md:px-16 py-24 rounded-t-4xl relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <span className="text-mysten-red font-semibold tracking-widest uppercase mb-4 block">Sản phẩm</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight">
              Sản phẩm của chúng tôi dành cho những nhà kiến tạo, người đam mê web3, và người khám phá
            </h2>
          </div>
          <button className="mt-8 md:mt-0 border border-mysten-red text-mysten-white font-bold px-6 py-3 rounded-xl hover:bg-mysten-red transition-colors">
            Xem tất cả sản phẩm
          </button>
        </div>

        {/* Lưới sản phẩm (Slush, SuiPlay, NS, SuiFrens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'SLUSH', color: 'bg-[#a3d5ff]' },
            { name: 'SuiPlay 0X1', color: 'bg-[#1e2348]' },
            { name: '.NS', color: 'bg-[#8c3ef1]' },
            { name: 'SUIFRENS', color: 'bg-[#ffd38a]' }
          ].map((prod, idx) => (
            <div key={idx} className={`${prod.color} rounded-3xl h-[300px] p-6 flex flex-col justify-between text-mysten-black`}>
               <h3 className={`text-3xl font-black ${idx === 1 || idx === 2 ? 'text-white' : 'text-black'}`}>{prod.name}</h3>
               <div className="w-full h-3/4 bg-black/10 rounded-xl mt-4"></div> {/* Placeholder image */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsBlock;