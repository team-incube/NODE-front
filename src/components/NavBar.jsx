export default function NavBar(){
    return(
        <div className="flex justify-between items-center w-full h-[70px] px-[79.5px] border-b border-[#D9D9D9]">
            <span className="h-[34px] text-[#95C4F5] text-[28px] font-bungee font-bold flex justify-start">
                NODE
            </span>
            <div className="h-[58px] flex justify-end gap-[50px] text-[20px] font-tmoney">
                <button>과제리스트</button>
                <button>My</button>
            </div>
        </div>
    );
}