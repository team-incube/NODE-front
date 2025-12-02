export default function AssignmentList(){
    return(
        <div className="w-[1178px] h-[90px] border-t border-b border-[#D9EAFD]">
            <div className="flex justify-between items-center h-[90px]">
                <span className="h-[26px] text-[16px]">CRUD 게시판 만들기</span> {/* 과제 제목 출력 */}
                <div className="gap-[27px] w-[195px] h-[34px] flex justify-end items-center">
                    <div className="w-[84px] h-[34px] text-[16px] text-[#60ABFA]/80 rounded-[8px] font-tmoney bg-[#D9EAFD] justify-center flex items-center">
                        D-16
                    </div> {/* 날짜에 따라 다르게 출력 */}
                    <div className="w-[84px] h-[34px] text-[16px] text-white rounded-[8px] font-tmoney bg-[#D9D9D9] justify-center flex items-center">
                        미제출
                    </div> {/* 제출 상태에 따라 다르게 출력 */}
                </div>
            </div>
        </div>
    )
}