import PopUp from "../../assets/icons/popUp";

export default function Header() {
    return (
        <header className="w-full min-h-[70px] flex flex-col">
            <div className="flex flex-row justify-between items-center px-20 py-[13.5px]">
                <p className="font-bungee text-[#95C4F5] text-[1.75rem]">NODE</p>
                <div className="flex flex-row items-center gap-[3.75rem]">
                    <PopUp />
                    <p className="text-[1.25rem]">과제리스트</p>
                    <p className="text-[1.25rem]">My</p>
                </div>
            </div>
            <hr className="border-1 border-[#D9D9D9]" />
        </header>
    );
}
