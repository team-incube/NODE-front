export default function Btn({value, variant}){
    const base = "w-[140px] h-[46px] rounded-[12px] font-tmoney font-normal"
    const variants = {
        cancel: "text-white bg-[#95C4F5]",
        submit: "text-[#95C4F5] bg-white border border-[#95C4F5]",
    };

    return(
        <button className={`${base} ${variants[variant]}`}>
            {value}
        </button>
    );
}
