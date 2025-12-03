import jiyuImage from "../assets/icons/jiyu.png";
import user from "../assets/icons/user.svg";
import girl from "../assets/icons/girl.svg";

//멘티 기준 프로필 박스
export default function ProfileBoxMentee(){
    return(
        <div className="border border-[1px] border-[#60ABFA] rounded-[30px] w-[574px] h-[307px]">
            <div className="mx-[62px] my-[39px] w-[450px] h-[227px] flex flex-col gap-[20px]">
                <p className="text-[#60ABFA] text-[15px] font-tmoney font-normal">
                    내 프로필
                </p>
                <div className="flex gap-[45px] h-[120px]">
                    <img src={jiyuImage} alt="프로필"
                        className="w-[120px] h-[120px] border border-[1px] border-[#60ABFA] rounded-full p-[10px]"
                    /> {/* 이미지 선택/크기 조정 */}
                    <div className="flex flex-col w-[100px] h-[120px] font-tmoney gap-[10px] text-[16px] m-[0px] p-[0px]">
                        <span className="text-[#60ABFA] text-[12px] gap-[6px] flex border border-[1px] border-[#60ABFA] rounded-[5px] w-[60px] h-[24px] justify-center items-center">
                            <img src={user} alt="user icon"/>
                            멘티
                        </span>
                        <span className="h-[22px] flex items-center w-[73px] h-[22px] gap-[5px]">
                            김수빈 {/* 사용자 이름 */}
                            <img src={girl} alt="성별 여자" className="w-[22px] h-[22px]"/>
                        </span>
                        <span className="h-[22px]">1학년 2반 3번 {/* 사용자 학년/반/번호 */}</span>
                        <span className="h-[22px]">back-end {/* 사용자 전공 */}</span>
                    </div>
                </div>
                <button className="w-[450px] h-[48px] border border-[1px] border-[#60ABFA] rounded-[8px] font-tmoney font-normal text-[14px] text-[#60ABFA]">
                    수정하기
                </button>
            </div>
        </div>
    );
}