import { Link } from "react-router-dom";
import PopUp from "../../assets/icons/popUp";
import { HEADER_NAV } from "../../config/header/navigation";

export default function Header() {
    return (
        <header className="w-full min-h-[70px] flex flex-col">
            <div className="flex flex-row justify-between items-center px-20 py-[13.5px]">
                <Link href="/" className="font-bungee text-[#95C4F5] text-[1.75rem]">NODE</Link>
                <div className="flex flex-row items-center gap-[3.75rem]">
                    <PopUp />
                    {HEADER_NAV.map((item) => (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            className="text-[1.25rem]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            <hr className="border-1 border-[#D9D9D9]" />
        </header>
    );
}
