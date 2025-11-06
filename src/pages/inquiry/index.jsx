import Btn from "../../components/Btn.jsx"

export default function Inquiry(){
    return(
        <div className="flex justify-center items-center min-h-screen bg-[#FCFCFC]">
        {/*가운데 정렬, 화면 전체 높이, 배경색(HEX코드는 []필수)*/}
            <div className="bg-[#ffffff] w-[890px] h-[452px] rounded-2xl">
                <main className="w-[826px] h-[380px] mt-[40px] mb-[32px] mx-[32px]">
                    <header>
                        <p className="text-[#95C4F5] text-[48px] font-bold flex justify-center font-bungee pb-[6px]">NODE</p>
                    </header>
                    <div>
                        <input 
                            className="w-[826px] h-[36px] mb-[10px] rounded-[8px] 
                            border border-[#D9D9D9] pl-[10px] placeholder:text-[#D9D9D9] 
                            font-tmoney font-normal text-[12px] focus:outline-none" 
                            type="text" placeholder='제목을 입력해 주세요'
                        />
                        <textarea 
                            className="w-[826px] h-[190px] rounded-[8px] 
                            border border-[#D9D9D9] px-[10px] py-[8px] placeholder:text-[#D9D9D9] 
                            font-tmoney font-normal text-[12px] resize-none focus:outline-none" 
                            placeholder="문의 사항을 입력해 주세요">
                        </textarea>
                    </div>
                    <footer className="flex justify-end mt-[20px] gap-[4px]">
                        <Btn variant="cancel" value="취소"/>
                        <Btn variant="submit" value="제출"/>
                    </footer>
                </main>
            </div>         
        </div>
    );
}