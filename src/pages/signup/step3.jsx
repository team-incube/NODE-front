import { useState } from "react";

function Step3() {
    const majors = [
        "프론트엔드",
        "백엔드",
        "디자인",
        "기능반",
        "공기업",
        "공무원",
        "해군부사관",
        "데브옵스",
        "안드로이드",
        "IOS",
        "게임개발",
        "기타"
    ];

    const [selectedMajor, setSelectedMajor] = useState(null);
    const handleSelect = (major) => {
        setSelectedMajor(selectedMajor === major ? null : major);
    }
    return (
        <div className="flex items-center justify-center bg-[#FCFCFC] w-screen h-screen">
            <div className="flex flex-col items-center bg-white w-[55rem] rounded-[1.5rem] gap-[1.25rem] pb-[36px]">
                <p className="font-bungee text-[3rem] text-[#95C4F5] mt-[2.25rem]">NODE</p>
                <p className="font-tmoney font-normal text-[1rem] text-[#95C4F5]">전공을 선택해주세요!</p>
                <div className="flex justify-center flex-wrap gap-[1.25rem]">
                    {majors.map((major) => (
                        <button
                            key={major}
                            className={`font-tmoney font-normal text-[1rem] w-[11.25rem] h-[3.75rem] border-2 border-[#95C4F5] rounded-2xl
                                ${selectedMajor === major ? "bg-[#95C4F5] text-white" : "bg-none text-[#95C4F5]"}`}
                            onClick={() => handleSelect(major)}
                        >
                            {major}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Step3;