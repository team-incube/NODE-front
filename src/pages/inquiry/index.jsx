import Btn from "../../components/Btn.jsx"
import { useState } from "react";

export default function Inquiry(){
    let [Input, setInput] = useState({
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    //prev 사용: 이전 상태 유지하며 변경부분 업데이트

    const handleSubmit = () => {
        console.log("내용:", Input);
        // 제출 처리 로직 추가 
    }

    return(
        <div className="flex justify-center items-center min-h-screen bg-[#FCFCFC]">
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
                            name="title"
                            value={Input.title}
                            onChange={handleChange}
                        />
                        <textarea 
                            className="w-[826px] h-[190px] rounded-[8px] 
                            border border-[#D9D9D9] px-[10px] py-[8px] placeholder:text-[#D9D9D9] 
                            font-tmoney font-normal text-[12px] resize-none focus:outline-none" 
                            placeholder="문의 사항을 입력해 주세요"
                            name="content"
                            value={Input.content}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <footer className="flex justify-end mt-[20px] gap-[4px]">
                        <Btn variant="cancel" value="취소"/>
                        <Btn variant="submit" value="제출" onClick={handleSubmit}/>
                    </footer>
                </main>
            </div>         
        </div>
    );
}