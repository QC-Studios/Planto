import { LiaStarSolid, LiaStarHalf } from "react-icons/lia";

const Section4 = () => {
    return (
        <section className="my-10 md:my-36 text-white px-4 md:pl-[57px] md:pr-[45px]">
            <h2 className="font-w3 text-3xl md:text-[55px] px-[34px] py-[11px] mb-10 md:mb-[189px] w-fit mx-auto  md:leading-[66.56px] text-center ">
            Customer Review
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[33px]">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="curve2 bg-[#272E22] rounded-t-[75px] rounded-b-[60px] md:rounded-[100px] border-2 border-[#FFFFFF33] p-5 md:pl-[58px] md:py-[58px] pr-[51px]"
                    >
                        <div className="flex items-center gap-5 md:gap-[38px]">
                            <img
                                src="/profile1.jpg"
                                alt="user image"
                                className="w-[55px] md:w-[88px] h-[55px] md:h-[88px] rounded-full bg-red-600"
                            />
                            <div>
                                <p className="font-f1 font-w3 text-2xl md:text-[38px] md:leading-[45.99px]">
                                    Maxn Raval
                                </p>
                                <div className="flex gap-2 mt-1">
                                    {Array.from({ length: 5 }).map((_, i) =>
                                        i == 4 ? (
                                            <LiaStarHalf
                                                key={i}
                                                size={20}
                                                color="#FFF84E"
                                            />
                                        ) : (
                                            <LiaStarSolid
                                                size={20}
                                                color="#FFF84E"
                                                key={i}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <p className="font-f1 font-w1 text-[24px] leading-[29.05px] text-[#FFFFFFBF] mt-[61px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section4;
