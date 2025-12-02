export default function NavBar(){
    return(
                <div className="flex justify-between items-center w-full h-[64px] px-[32px] border-b border-[#D9D9D9]">
            <span className="width-[81px] height-[34px] text-[#95C4F5] text-[28px] font-bungee font-bold flex justify-start">
                NODE
            </span>
            <div className="flex justify-end gap-[20px]">
                {/* 알람 아이콘 svg 컴포넌트 ?알람 숫자를 어케늠 아아아아아아ㅏㅏ아아ㅏ*/}
                <button>과제리스트</button>
                <button>My</button>
            </div>
        </div>
    );
}