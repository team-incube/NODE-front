import { Link } from 'react-router-dom';
import "@fontsource/bungee"; 

function SigninViews(){

    return(
        <div className="w-screen h-screen bg-[#FCFCFC] flex justify-center items-center">
            <div className="bg-white flex flex-col justify-center items-center rounded-2xl w-[30rem] h-[25rem] mt-9">
                <p className="flex justify-center items-center font-['Bungee'] text-[#95C4F5] text-4xl m-0">NODE</p>
                <form className="flex flex-col items-center pt-10 gap-5 w-full"> 
                    <input type="text" placeholder='이메일' className="border border-[#D9D9D9] text-base font-normal rounded-xl w-5/6 h-12 px-3 text-[#1B5087] placeholder-[#D9D9D9]"></input>
                    <input type="password" placeholder='비밀번호' className="border border-[#D9D9D9] text-base font-normal rounded-xl w-5/6 h-12 px-3 text-[#1B5087] placeholder-[#D9D9D9]"></input>
                    <button type='submit' className="bg-[#95C4F5] text-white rounded-xl w-5/6 h-12 text-base font-semibold">로그인</button>
                </form>

                <div className="flex text-xs mt-5 gap-1">
                    <span className="text-[#979797]">NODE가 처음이신가요?</span>
                    <Link to="/signup" className="text-[#1B5087]">회원가입</Link>
                </div>
            </div>
        </div>
    );
};

export default SigninViews;
