import TextInput from "../../components/signup/TextInput";
import { useState } from "react";
import { GRADES, CLASSES } from "../../constants/options";
import DropdownArrow from "../../assets/icons/dropdownArrow";

function Step2() {
  const [gradeOpen, setGradeOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);
  const [gradeValue, setGradeValue] = useState("");
  const [classValue, setClassValue] = useState("");

  const handleGradeSelect = (grade) => {
    setGradeValue(grade);
    setGradeOpen(false);
  };
  const handleClassSelect = (cls) => {
    setClassValue(cls);
    setClassOpen(false);
  };
  return (
    <div>
      <div>
        <p className="font-bungee text-[32px] text-[#95C4F5]">NODE</p>
        <form>
          <TextInput placeholder="이름" />
          <div className="flex gap-[0.9375rem] items-center">
            <div className="relative">
              <button
                type="button"
                onClick={() => setGradeOpen(!gradeOpen)}
                className={`flex justify-between items-center border text-sm font-tmoney font-normal rounded-[8px] w-[145px] h-[36] px-[16px] py-[9px] focus:outline-none ${
                  gradeOpen || gradeValue
                    ? "border-[#95C4F5]"
                    : "border-[#D9D9D9]"
                }`}
              >
                <span className={gradeValue ? "text-black" : "text-[#D9D9D9]"}>
                  {gradeValue || "학년"}
                </span>
                <DropdownArrow
                  state={
                    gradeOpen ? "open" : gradeValue ? "selected" : "default"
                  }
                />
              </button>
              {gradeOpen && (
                <div className="absolute w-full bg-white rounded-[8px] shadow-2xl ">
                  {GRADES.map((grade, index) => (
                    <div
                      key={index}
                      onClick={() => handleGradeSelect(grade)}
                      className="px-3 py-2 hover:bg-[#95C4F5]/20 hover:text-[#1B5087] cursor-pointer text-[#D9D9D9] text-xs first:rounded-t-[8px] last:rounded-b-[8px]"
                    >
                      {grade}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setClassOpen(!classOpen)}
                className={`flex justify-between items-center border text-sm font-tmoney font-normal rounded-[8px] w-[145px] h-[36] px-[16px] py-[9px] focus:outline-none ${
                  classOpen || classValue
                    ? "border-[#95C4F5]"
                    : "border-[#D9D9D9]"
                }`}
              >
                <span className={classValue ? "text-black" : "text-[#D9D9D9]"}>
                  {classValue || "반"}
                </span>
                <DropdownArrow
                  state={
                    classOpen ? "open" : classValue ? "selected" : "default"
                  }
                />
              </button>
              {classOpen && (
                <div className="absolute w-full bg-white rounded-[8px] shadow-2xl">
                  {CLASSES.map((cls, index) => (
                    <div
                      key={index}
                      onClick={() => handleClassSelect(cls)}
                      className="px-3 py-2 hover:bg-[#95C4F5]/20 hover:text-[#1B5087] cursor-pointer text-[#D9D9D9] text-xs first:rounded-t-[8px] last:rounded-b-[8px]"
                    >
                      {cls}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2;
