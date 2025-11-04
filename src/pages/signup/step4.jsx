import { useState } from "react";
import Jiyu from "../../assets/icons/character/jiyu";
import Namjin from "../../assets/icons/character/namjin";
import Sunju from "../../assets/icons/character/sunju";
import Yeondon from "../../assets/icons/character/yeondon";

function Step4() {

    const [selected, setSelected] = useState(null);

    const profiles = [
        { key: "jiyu", component: <Jiyu /> },
        { key: "sunju", component: <Sunju /> },
        { key: "namjin", component: <Namjin /> },
        { key: "yeondon", component: <Yeondon /> }
    ];
    return (
        <div className="flex items-center justify-center bg-[#FCFCFC] w-screen h-screen">
            <div className="flex flex-col items-center bg-white w-[67.9375rem] rounded-[1.5rem] gap-[1.25rem] pb-[2.25rem]">
                <p className="font-bungee text-[#95C4F5] text-[3rem] mt-[2.25rem]">NODE</p>
                <p className="font-tmoney font-normal text-[#95C4F5] text-[1rem] pb-[3.0625rem]">프로필을 선택해주세요!</p>
                <div className="flex flex-row gap-[3.125rem]">
                    {profiles.map(profile => (
                        <div
                            key={profile.key}
                            className={`
                                border-2 rounded-2xl cursor-pointer transition-transform duration-200
                                ${selected === profile.key ? "bg-[#F0F7FF] border-[#95CC4F5] shadow-xl" : ""} 
                                hover:-translate-y-[30px] hover:bg-[#F0F7FF] hover:shadow-xl  hover-border-[#95C4F5]
                            `}
                            onClick={() => setSelected(selected === profile.key ? null : profile.key)}
                        >
                            {profile.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Step4;