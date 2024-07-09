const ProductCard = ({ data }) => {
    return (
        <div className="curve relative bg-[#272E22] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[60px] border-2 border-[#FFFFFF45] backdrop-blur-[10px] h-[400px] md:h-[550px] pb-[42px] flex flex-col justify-end">
            <img
                src={data?.img}
                alt="plant-img"
                className="absolute left-[50%] -translate-x-[50%] right-[50%] w-auto h-auto -top-[120px] z-10"
            />
            <div className="space-y-5 pl-[66px]  text-[#FFFFFFBF]">
                <h6 className="font-f1 font-w1 text-3xl md:text-[38px] md:leading-[45.99px]">
                    {data?.name}
                </h6>
                <p className="font-f1 font-w1 text-sm md:text-[23px] md:leading-[27.84px]">
                    {data?.discription}
                </p>
                <div className="flex justify-between pr-[74px] items-center gap-8">
                    <p className="font-f1 font-w1 text-2xl md:text-[38px] md:leading-[45.99px]">
                        {data?.price}
                    </p>
                    <button className="w-10 md:w-[55px] md:text-[28px] flex items-center justify-center md:leading-[33.89px] h-10 md:h-[55px]  border-2 border-[#FFFFFFBF] rounded-[12px]">
                        <img
                            src={"/bag.png"}
                            alt="cart"
                            className="w-5 h-5 md:w-[27px] md:h-[27px]"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
