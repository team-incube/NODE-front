import { Link } from 'react-router-dom';

function SigninViews(){

    return(
        <div className='w-full h-screen bg-[#F8FAFC] flex justify-center items-center'>
            <div className='bg-[#D9EAFD] flex flex-col justify-center items-center rounded-[16px] w-[440px] h-[390px]'>
                <form className='flex flex-col gap-[21px] pt-[20px]'> 
                    <input type="text" placeholder='이메일' className='bg-white border-0 text-[16px] font-normal rounded-[5px] pl-[16px] w-[383px] h-[45px] text-[#1B5087] placeholder:text-[#D9D9D9]'></input>
                    <input type="password" placeholder='비밀번호' className='bg-white border-0 text-[16px] font-normal rounded-[5px] pl-[16px] w-[383px] h-[45px] text-[#1B5087] placeholder:text-[#D9D9D9]'></input>
                    <button type='submit' className='bg-[#95C4F5] text-white border-0 rounded-[5px] w-[383px] h-[45px] text-[16px] font-semibold'>로그인</button>
                </form>

                <div className='flex text-[12px] mt-[21px] gap-[5px]'>
                    <span className='text-[#979797]'>NODE가 처음이신가요?</span>
                    <Link to="/signup" className='text-[#1B5087]'>회원가입</Link>
                </div>
            </div>
        </div>
    );
};

export default SigninViews;
