import { GENDERS } from "../../constants/options";

export default function GenderSelector({ gender, setGender }) {
  return (
    <div className="flex gap-[0.9375rem]">
      {GENDERS.map((g) => (
        <button
          key={g.value}
          type="button"
          onClick={() => setGender(g.value)}
          className={`flex justify-center items-center w-[145px] h-[36px] border rounded-[8px] text-sm font-tmoney font-normal ${
            gender === g.value
              ? "bg-[#95C4F5] text-white border-none font-semibold"
              : "bg-white text-[#D9D9D9] border-[#D9D9D9]"
          }`}
        >
          {g.label}
        </button>
      ))}
    </div>
  );
}
