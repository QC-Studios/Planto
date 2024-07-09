// import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo from "/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const listItems = [
        {
            tabName: "Home",
            pathname: "/",
        },
        {
            tabName: "Plants Type",
            pathname: "/plant-types",
        },
        {
            tabName: "More",
            pathname: "/more",
        },
        {
            tabName: "Contact",
            pathname: "/contact",
        },
    ];
    return (
        <header className="px-6 pt-4 md:pt-[57px] flex justify-between items-center ">
            <div className="flex items-center gap-[14px]">
                <img src={logo} alt="Planto" className="w-8 h-8 md:w-12 md:h-12" />
                <h4 className="text-[#FFFFFFBF] font-f1 font-w6 text-[20px] md:text-[28px] leading-6 md:leading-[33.89px]">
                    Planto.
                </h4>
            </div>
            <nav className=" rounded-[44.25px] hidden md:block ">
                <ul className="flex gap-12">
                    {listItems?.map((item) => (
                        // <Link key={item?.tabName} to={item?.tabName}>
                        <li
                            key={item?.tabName}
                            className={`text-white font-f1 cursor-pointer font-w1 text-[24px] leading-[29.05px] ${
                                item.tabName == "Plants Type" &&
                                "flex items-center gap-[3px]"
                            }`}
                        >
                            {item?.tabName}{" "}
                            {item.tabName == "Plants Type" && <FaCaretDown />}
                        </li>
                        // </Link>
                    ))}
                </ul>
            </nav>
            <div className="hidden md:flex items-center gap-[59px] ">
                <button className="">
                    <CiSearch size={26} color="#ffffff" />
                </button>
                <button className=" h-10 rounded-[21px]">
                    <img
                        src="/bag.png"
                        alt="cart"
                        className="w-[26px] h-[26px]"
                    />
                </button>
                <div className="flex flex-col gap-2">
                    <div className="w-8 h-[2px] bg-white rounded-[4px]"></div>
                    <div className="w-5 h-[2px] bg-white self-end rounded-[4px]"></div>
                </div>
            </div>
            <div className="relative block md:hidden ">
                {menu ? (
                    <button onClick={() => setMenu(!menu)}>
                        <RxCross2 size={30} color="#ffffff"/>
                    </button>
                ) : (
                    <button onClick={() => setMenu(!menu)}>
                        <IoMenu size={30} color="#ffffff"/>
                    </button>
                )}
            </div>
        </header>
    );
};

export default NavBar;
