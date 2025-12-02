import Btn from "../../components/Btn.jsx"
import { useState } from "react";

export default function Change(){
    let [content, setContent] = useState("");

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = () => {
        console.log("내용:", content);
        // 제출 처리 로직 추가 
    }

    return(
        <div className="flex justify-center items-center min-h-screen bg-[#FCFCFC]">
            <div className="bg-[#ffffff] w-[890px] h-[452px] rounded-[16px]">
                <div className="w-[826px] h-[380px] mt-[40px] mb-[32px] mx-[32px]">
                    <header>
                        <p className="text-[#95C4F5] text-[48px] font-bold flex justify-center font-bungee pb-[6px]">NODE</p>
                    </header>
                    <div>
                        <textarea 
                            className="w-[826px] h-[236px] rounded-[8px] 
                            border border-[#D9D9D9] px-[10px] py-[8px] placeholder:text-[#D9D9D9] 
                            font-tmoney font-normal text-[12px] resize-none focus:outline-none" 
                            placeholder="변경 사유를 입력해 주세요"
                            value={content} //입력받아ㅏㅏㅏ
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <footer className="flex justify-end mt-[20px] gap-[4px]">
                        <Btn variant="cancel" value="취소"/>
                        <Btn variant="submit" value="제출" onClick={handleSubmit}/>
                    </footer>
                </div>
            </div>         
        </div>
    )
}