
import "@fontsource/bungee"; 

function SignupViews() {

    return(
        <div className="w-screen h-screen bg-[#FCFCFC] flex justify-center items-center">
            <div className='bg-white flex flex-col justify-center items-center rounded-2xl w-[28.94rem] h-[42.5625rem]'>
                <p className="flex justify-center items-center font-['Bungee'] text-[3rem] text-[#95C4F5] m-0">NODE</p>
                <form className='flex flex-col items-center pt-10 gap-5 w-full'>
                    <input type='text' placeholder='이름' className='border border-[#D9D9D9] text-base font-normal rounded-xl w-5/6 h-12 px-3 text-[#1B5087] placeholder-[#D9D9D9]'></input>
                    <div className="flex gap-[1.2rem] items-center">
                        <select className="border border-[#D9D9D9] text-base font-normal rounded-xl w-[11.5rem] h-[3rem] px-3 text-[#D9D9D9]">
                            <option value="" disabled selected>학년</option>
                            <option value='1'>1학년</option>
                            <option value='2'>2학년</option>
                            <option value='3'>3학년</option>
                        </select>
                        <select className="border border-[#D9D9D9] text-base font-normal rounded-xl w-[11.5rem] h-[3rem] px-3 text-[#D9D9D9]">
                            <option value="" disabled selected>반</option>
                            <option value='1'>1반</option>
                            <option value='1'>2반</option>
                            <option value='1'>3반</option>
                            <option value='1'>4반</option>
                        </select>
                    </div>
                    <div className="flex gap-[1.2rem]">
                        <input type="radio" id="b" name="gender" hidden />
                        <label for="b" className='flex justify-center items-center inline-block w-[11.5rem] h-[3rem] border border-[#D9D9D9] text-base font-normal rounded-xl text-[#D9D9D9]'>남자</label>
                        <input type="radio" id="g" name="gender" hidden/>
                        <label for="g" className='flex justify-center items-center inline-block w-[11.5rem] h-[3rem] border border-[#D9D9D9] text-base font-normal rounded-xl text-[#D9D9D9]'>여자</label>
                    </div>
                    <select className="border border-[#D9D9D9] text-base font-normal rounded-xl w-5/6 h-12 px-3 text-[#D9D9D9]">
                        <option value="" disabled selected>전공</option>
                        <option value='frontend'>프론트엔드</option>
                        <option value='backend'>백엔드</option>
                        <option value='design'>디자인</option>
                        <option value='devops'>데브옵스</option>
                        <option value='functional'>기능반</option>
                        <option value='etc'>기타</option>
                    </select>
                    <input type='text' placeholder='이메일'className='border border-[#D9D9D9] text-base font-normal rounded-xl w-5/6 h-12 px-3 text-[#1B5087] placeholder-[#D9D9D9]'/>
                    <input type='password' placeholder='비밀번호'className='border border-[#D9D9D9] text-base font-normal rounded-xl w-5/6 h-12 px-3 text-[#1B5087] placeholder-[#D9D9D9]'/>
                    <input type='password' placeholder='비밀번호 확인'className='border border-[#D9D9D9] text-base font-normal rounded-xl w-5/6 h-12 px-3 text-[#1B5087] placeholder-[#D9D9D9]'/>
                    <button type='submit' className='bg-[#95C4F5] text-white rounded-xl w-5/6 h-12 text-base font-semibold'>회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default SignupViews;