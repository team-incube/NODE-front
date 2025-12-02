import ProfileBoxMentee from "../../components/ProfileBoxMentee.jsx";
import ProfileBoxMentor from "../../components/ProfileBoxMentor.jsx";
import NavBar from "../../components/NavBar.jsx";

function AssignmentList(){
    return(
        <div className="w-[1178px] h-[90px] border-t border-b border-[#D9EAFD]">
            <div className="flex">
                <span>CRUD 게시판 만들기</span> {/* 과제 제목 출력 */}
                <div>
                    <span>D-16</span> {/* 날짜에 따라 다르게 출력 */}
                    <span>미제출</span>
                </div>
            </div>
        </div>
    )
}

export default function MainPage(){
    return(
        <div>
            <NavBar/>
            {/* <div className="flex justify-center gap-[30px] mt-[79px]">
                <ProfileBoxMentee/>
                <ProfileBoxMentor/>
            </div> */}
            <div>
                <AssignmentList/>
            </div>
        </div>
    )
}
