import { useState } from "react";
import Lamp from "../../assets/icons/lamp";
import Sprout from "../../assets/icons/sprout";
import Button from "../../components/Button";

function Step1() {
    const [selected, setSelected] = useState(null);
    const handleSelect = (role) => {
        setSelected(selected === role ? null : role);
    }
    return (
        <div className="flex items-center justify-center bg-[#FCFCFC] w-screen h-screen">
            <div className="flex flex-col items-center bg-white w-[46.875rem] rounded-[1.5rem] gap-[1.25rem] pb-[36px]">
                <p className="font-bungee text-[#95C4F5] text-[3rem] mt-[2.25rem]">NODE</p>
                <p className="font-tmoney font-normal text-[#95C4F5] text-[1rem]">역할을 선택해주세요!</p>
                <div className="flex flex-row gap-[2.25rem]">
                    <div className="flex items-center justify-end flex-col gap-[4.625rem] pb-[1.1875rem] border w-[19.9375rem] h-[18.75rem] rounded-2xl">
                        <Sprout color={selected === "mentee" ? "#95C4F5" : "#D9D9D9"} />
                        <Button
                            className="w-[17.1875rem] h-[3rem]"
                            selected={selected === "mentee"}
                            onClick={() => handleSelect("mentee")}
                        >
                            멘티
                        </Button>
                    </div>
                    <div className="flex items-center justify-end flex-col gap-[4.625rem] pb-[1.1875rem] border w-[19.9375rem] h-[18.75rem] rounded-2xl">
                        <Lamp color={selected === "mentor" ? "#95C4F5" : "#D9D9D9"} />
                        <Button
                            className="w-[17.1875rem] h-[3rem]"
                            selected={selected === "mentor"}
                            onClick={() => handleSelect("mentor")}
                        >
                            멘토
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step1;