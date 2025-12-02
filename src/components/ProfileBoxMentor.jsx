import yeunImage from "../assets/icons/yeun.png.png";
import user from "../assets/icons/user.svg";
import boy from "../assets/icons/boy.svg";

export default function ProfileBoxMentor(){
    return(
        <div className="border border-[1px] border-[#60ABFA] rounded-[30px] bg-[#F0F7FF] w-[574px] h-[307px]">
            <div className="mx-[62px] my-[39px] w-[450px] h-[227px] flex flex-col gap-[20px]">
                <p className="text-[#60ABFA] text-[15px] font-tmoney font-normal">
                    멘토 프로필
                </p>
                <div className="flex gap-[45px] h-[120px]">
                    <img src={yeunImage} alt="프로필"
                        className="w-[120px] h-[120px] border border-[1px] border-[#60ABFA] rounded-full p-[10px] bg-white"
                    />
                    <div className="flex flex-col w-[112px] h-[120px] font-tmoney gap-[10px] text-[16px] m-[0px] p-[0px]">
                        <span className="text-[#60ABFA] text-[12px] gap-[6px] flex border border-[1px] border-[#60ABFA] rounded-[5px] w-[60px] h-[24px] justify-center items-center">
                            <img src={user} alt="user icon"/>
                            멘토
                        </span>
                        <span className="h-[22px] flex items-center w-[73px] h-[22px] gap-[5px]">
                            김수빈 {/* 사용자 이름 */}
                            <img src={boy} alt="성별 여자" className="w-[22px] h-[22px]"/>
                        </span>
                        <span className="h-[22px]">4학년 5반 19번 {/* 사용자 학년/반/번호 */}</span>
                        <span className="h-[22px]">back-end {/* 사용자 전공 */}</span>
                    </div>
                </div>
                <div className="w-[450px] h-[48px] flex justify-between font-tmoney text-[14px]">
                    <button className="w-[340px] h-[48px] bg-[#60ABFA] text-white rounded-[8px]">메시지</button>
                    <button className="w-[100px] h-[48px] bg-[#D9EAFD]/50 text-[#60ABFA] rounded-[8px]">멘토 변경</button>
                </div>
            </div>
        </div>
    );
}