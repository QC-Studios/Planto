import ProductCard from "../ProductCard/ProductCard";

const productsData = [
    {
        name: "Calathea plant",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "Rs. 599/-",
        img: "/img-1.png",
    },
    {
        name: "Calathea plant",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "Rs. 599/-",
        img: "/img-2.png",
    },
    {
        name: "Calathea plant",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "Rs. 599/-",
        img: "/img-3.png",
    },
    {
        name: "Calathea plant",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "Rs. 599/-",
        img: "/img-4.png",
    },
    {
        name: "Calathea plant",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "Rs. 599/-",
        img: "/plant1.png",
    },
    {
        name: "Calathea plant",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "Rs. 599/-",
        img: "/img-1.png",
    },
];

const Section3 = () => {
    return (
        <section className="my-36 text-white px-4 md:pl-[57px] md:pr-[45px]">
            <h2 className="gradient-border font-w3 text-3xl md:text-[55px] px-[34px] py-[11px] mb-[189px] w-fit mx-auto  md:leading-[66.56px] text-center ">
                Our Top Selling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-[130px] ">
                {productsData.map((product, i) => (
                    <ProductCard key={i} data={product} />
                ))}
            </div>
        </section>
    );
};

export default Section3;
