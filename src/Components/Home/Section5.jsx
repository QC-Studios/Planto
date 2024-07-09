import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section5 = () => {
    return (
        <section className="my-36 text-[#FFFFFFBF] px-4 md:pl-[57px] md:pr-[45px]">
            <h2 className="font-w3 text-3xl md:text-[55px] px-[34px] py-[11px] mb-[189px] w-fit mx-auto  leading-[66.56px] text-center ">
                Our Best 2
            </h2>
            <div className="bg-[#272E22] relative py-[95px] pr-[91px] rounded-[100px] flex gap-8 border-2 border-[#FFFFFF33]">
                <img
                    src="/plant2.png"
                    alt="Plant"
                    className=" absolute bottom-0 w-[700px] -left-10"
                />
                <div className="flex-[1]"></div>
                <div className="flex-[1] space-y-[32px]">
                    <p className="font-w3 text-[38px] leading-[45.99px]">
                        We Have Small And Best O2 Plants Collection’s
                    </p>
                    <p className="font-w3 text-[28px] leading-[33.89px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                    <p className="font-w3 text-[28px] leading-[33.89px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="flex justify-between items-center gap-8">
                        <button className="w-[217px] text-[28px] flex items-center justify-center leading-[33.89px] h-[64px] text-white border rounded-[12px]">
                            Explore
                        </button>
                        <div className="flex items-center gap-11">
                            <button>
                                <FaChevronLeft />
                            </button>
                            <p className="font-w4 text-[15px] leading-[18.15px] ">
                                01/04
                            </p>
                            <button>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-[13px] my-[133px]">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className={`${
                            i == 0 ? "w-[21px]" : "w-1.5"
                        } h-1.5 bg-white rounded-full`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Section5;
