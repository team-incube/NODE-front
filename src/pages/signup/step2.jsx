import TextInput from "../../components/signup/TextInput";
import { useState } from "react";
import { GRADES, CLASSES } from "../../constants/options";
import GenderSelector from "../../components/signup/genderSelector";
import DropdownSelector from "../../components/signup/dropdownSelector";

function Step2() {
  const [gender, setGender] = useState("");
  const [gradeValue, setGradeValue] = useState("");
  const [classValue, setClassValue] = useState("");
  return (
    <div>
      <div>
        <p className="font-bungee text-[32px] text-[#95C4F5]">NODE</p>
        <form>
          <TextInput placeholder="이름" />
          <div className="flex gap-[0.9375rem] items-center">
            <DropdownSelector
              value={gradeValue}
              options={GRADES}
              placeholder="학년"
              onSelect={setGradeValue}
            />

            <DropdownSelector
              value={classValue}
              options={CLASSES}
              placeholder="반"
              onSelect={setClassValue}
            />
          </div>
          <div className="flex gap-[0.9375rem]">
            <GenderSelector gender={gender} setGender={setGender} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2;
