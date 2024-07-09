import logo from "/logo.png";

const Footer = () => {
    return (
        <footer className="pl-[62px] pt-[90px] pb-20 flex bg-[#222C1D]">
            <div className="flex-[1.2] flex flex-col">
                <div className="flex items-center gap-[14px]">
                    <img
                        src={logo}
                        alt="Planto"
                        className="md:w-12 h-12 md:h-12"
                    />
                    <h4 className="text-[#FFFFFFBF] font-f1 font-w6 text-[28px] leading-[33.89px]">
                        Planto.
                    </h4>
                </div>
                <p className="font-f1 font-w2 text-[20px] mt-[43px] w-[90%] leading-[24.84px] text-[#FFFFFFBF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <ul className="text-white flex items-center mt-[119px] gap-[61px] font-w5 text-[28px] leading-[33.89px]">
                    <li>FB</li>
                    <li>TW</li>
                    <li>LI</li>
                </ul>
            </div>
            <div className="flex-[1]  text-white">
                <p className="font-w5 text-[28px] leading-[33.89px] ">
                    Quick Link’s
                </p>
                <ul className="text-white flex mt-[46px] flex-col gap-[26px] font-w2 text-[24px] leading-[29.05px]">
                    <li>Home</li>
                    <li>Type’s Of plant’s</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="flex-[1.2] flex flex-col text-white">
                <p className="font-w5 text-[28px] leading-[33.89px] ">
                    For Every Update.
                </p>
                <form className="mt-[50px] border-2 rounded-[8px] p-1 flex items-center mr-[34px]">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="placeholder:text-[#FFFFFFBF] bg-inherit p-4 outline-none w-full "
                    />
                    <button type="button" className="bg-white p-4 rounded-[8px] text-black uppercase font-w4 text-[22px] leading-[26.63px]">
                        Subscribe
                    </button>
                </form>
                <p className="mt-[119px]  text-[24px] leading-[29.05px] ">
                    planto © all right reserve
                </p>
            </div>
        </footer>
    );
};

export default Footer;
