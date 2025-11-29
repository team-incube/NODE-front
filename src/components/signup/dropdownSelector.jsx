import { useState } from "react";
import DropdownArrow from "../../assets/icons/dropdownArrow";

function DropdownSelector({ value, options, placeholder, onSelect }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item) => {
    onSelect(item);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex justify-between items-center border text-sm font-tmoney font-normal rounded-[8px] w-[145px] h-[36px] px-[16px] py-[9px] focus:outline-none ${
          open || value ? "border-[#95C4F5]" : "border-[#D9D9D9]"
        }`}
      >
        <span className={value ? "text-black" : "text-[#D9D9D9]"}>
          {value || placeholder}
        </span>

        <DropdownArrow state={open ? "open" : value ? "selected" : "default"} />
      </button>

      {open && (
        <div className="absolute w-full bg-white rounded-[8px] shadow-2xl">
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="px-3 py-2 hover:bg-[#95C4F5]/20 hover:text-[#1B5087] cursor-pointer text-[#D9D9D9] text-xs first:rounded-t-[8px] last:rounded-b-[8px]"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownSelector;
