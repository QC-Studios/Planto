import { GoPlay } from "react-icons/go";
import "./Style/section1.css";
import { FaAngleRight } from "react-icons/fa6";
import { LiaStarSolid, LiaStarHalf } from "react-icons/lia";

const Section1 = () => {
    return (
        <section className="flex flex-col md:flex-row gap-40 md:gap-0 pt-[50px] md:pt-[120px] px-4 md:pl-[57px] md:pr-[45px]">
            <div className="flex-[1.4] flex flex-col gap-10 md:gap-0">
                <div className="">
                    <h1 className="font-f1 font-w3 text-[35px] leading-[55px] text-center md:text-left md:text-[104px] md:leading-[132.81px] text-[#FFFFFFBF]">
                        Breath Natureal
                    </h1>
                    <p className="font-f1 font-w2 text-[14px] md:text-[20px] leading-[18px] text-center md:text-left md:leading-[24.84px] text-[#FFFFFFBF]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div className="flex justify-center md:justify-start items-center mt-5 ">
                        <button className="w-[100px] h-[40px] md:w-[217px] text-[16px] md:text-[28px] flex items-center justify-center leading-[20px] md:leading-[33.89px] md:h-[64px] text-[#FFFFFFBF] border-2 border-[#FFFFFFBF] rounded-md md:rounded-[12px]">
                            Explore
                        </button>
                        <button className="w-[217px] flex items-center justify-center gap-2 md:gap-4 h-[64px] text-[#FFFFFFBF] ">
                            <GoPlay className="text-[32px] md:text-[64px]" />{" "}
                            Live Demo...
                        </button>
                    </div>
                </div>
                <div className="glass w-full p-4 md:w-[409px] md:h-[237px] flex flex-col gap-2 md:gap-5 justify-center items-center border-2 border-[#FFFFFF45] backdrop-blur-[25px] rounded-[40px] mt-auto">
                    <div className="text-white">
                        <p className="font-f1 font-w1 text-[16px] md:text-[23px] leading-[20px] md:leading-[27.84px]">
                            alena Patel
                        </p>
                        <div className="flex justify-center gap-2 mt-1">
                            {Array.from({ length: 5 }).map((_, i) =>
                                i == 4 ? (
                                    <LiaStarHalf
                                        key={i}
                                        size={15}
                                        color="#FFF84E"
                                    />
                                ) : (
                                    <LiaStarSolid
                                        size={15}
                                        color="#FFF84E"
                                        key={i}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="px-4 text-center md:text-left md:pl-10 md:pr-7 text-[#FFFFFFBF]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt...
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex-[1] text-[#FFFFFFBF]">
                <div className="glass relative w-full md:w-[512px] rounded-[60px] border-2 border-[#FFFFFF45] backdrop-blur-[25px] h-[450px] md:h-[644px] pb-6 md:pb-[42px] flex flex-col justify-end md:ml-auto">
                    <img
                        src="/plant1.png"
                        alt="plant-img"
                        className="absolute left-[50%] -translate-x-[50%] right-[50%] w-auto h-auto -top-[120px] z-10"
                    />
                    <div className="space-y-4 md:space-y-5 pl-4 md:pl-[72px]">
                        <p className="font-f1 font-w1 text-lg md:text-[23px] md:leading-[27.84px]">
                            Trendy House Plant
                        </p>
                        <div className="flex justify-between items-center pr-[33px]">
                            <h6 className="font-f1 font-w1 text-3xl md:text-[38px] md:leading-[45.99px]">
                                Calathea plant
                            </h6>
                            <FaAngleRight size={30} />
                        </div>
                        <button className="w-[105px] md:w-[217px] text-lg md:text-[28px] flex items-center justify-center leading-[33.89px] h-10 md:h-[64px] text-[#FFFFFFBF] border-2 border-[#FFFFFFBF] rounded-md md:rounded-[12px]">
                            Buy Now
                        </button>
                    </div>

                    <div className="flex justify-center gap-[13px] mt-[20px]">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className={`${
                                    i == 0 ? "w-[21px]" : "w-1.5"
                                } h-1.5 bg-white rounded-full`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
