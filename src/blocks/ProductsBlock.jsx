import SectionHeader from '../components/SectionHeader';

const ProductsBlock = () => {
  return (
    <section className="bg-mysten-black text-mysten-white px-6 md:px-16 py-24 rounded-t-4xl relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          subtitle="Sản phẩm"
          title="Sản phẩm của chúng tôi dành cho những nhà kiến tạo, người đam mê web3, và người khám phá"
          buttonText="Xem tất cả sản phẩm"
          subtitleClassName="text-mysten-red"
          titleClassName="text-mysten-white"
          buttonClassName="border-mysten-red text-mysten-white hover:bg-mysten-red"
        />

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
