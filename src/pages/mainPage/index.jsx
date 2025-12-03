import NavBar from "../../components/NavBar.jsx";
import MyProfileBox from "../../components/MyProfileBox.jsx";
import UserProfileBox from "../../components/UserProfileBox.jsx";
import AssignmentList from "../../components/AssignmentList.jsx";
import check from "../../assets/icons/check.svg";

export default function MainPage(){
    return(
        <div>
            <NavBar/>
            <div className="flex justify-center gap-[30px] mt-[79px]">
                <MyProfileBox/>
                <UserProfileBox/>
            </div>
            <div className="flex justify-center">
                <div className="mt-[70px] mb-[54px] h-[496px] w-[1178px] border-b-[3px] border-[#D9EAFD]">
                    <div className="border-b-[3px] border-[#D9EAFD] w-[1178px] h-[62px] flex justify-between items-center">
                        <span className="text-[#60ABFA] text-[24px] font-tmoney">과제 현황</span>
                        <button className="text-[#979797] text-[16px] font-tmoney">과제리스트로 이동하기</button>
                    </div>
                    <div className="gap-[10px] flex flex-col py-[22px]">
                        <AssignmentList/>
                        <AssignmentList/>
                        <AssignmentList/>
                        <AssignmentList/>
                    </div> {/* 과제리스트 */}
                    {/* <div className="w-[1178px] h-[426px] flex flex-col justify-center items-center gap-[30px]">
                        <img src={check} alt="check icon"/>
                        <span className="font-tmoney text-[16px] text-black/60">과제를 모두 끝냈어요!</span>
                    </div> 과제 완료 */}
                </div>
            </div>
        </div>
    )
}
