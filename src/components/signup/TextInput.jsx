export default function TextInput({ placeholder, type = "text" }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[300px] h-[36px] border border-[#D9D9D9] rounded-[8px] px-[16px] py-[9px] font-tmoney font-normal text-[14px] placeholder-[#D9D9D9] focus:outline-none focus:border-[#95C4F5]"
      />
    </div>
  );
}
