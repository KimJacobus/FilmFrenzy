import NFBG from '../assets/pictures/NFBG.jpg';
import NavbarHome from '../composants/navbar/NavbarHome';
import NavbarSignUp from '../composants/navbar/NavbarSingUp';
import LoginUser from '../composants/LoginForm/Loginuser';
import Emailuser from '../composants/RegisterForm/Emailuser';

const Landing = () => {


    return (
        
          
        

        <div className="LandingPage overflow-hidden">
        <NavbarSignUp />
       
        {/* on top  */}



        <div className="grid-col">

        <div className='flex justify-center'>
            
            <div id="FFTitle" className='absolute z-10'>
                <h1 className='righteous text-3xl lg:text-8xl text-white mt-10 text-center'>Welcome to <br></br>Film Friendzy!</h1>
                <p className='roboto text-2xl lg:text-5xl text-white mt-4 text-center'>Movie nights with friends from anywhere!</p>

        <div className="mt-10 opacity-90">

            <h1 className='text-1xl text-white text-center'>already have an account ?</h1>

                <Emailuser />
                </div>




                </div>
            </div>



        {/* background */}

        {/* change h to auto when page is filled with form etc */}
        <div className='bg-gradient-to-b from-indigo-500 ...'>
            <img className='w-screen h-auto opacity-40' src={NFBG}/>
        <div className='w-auto h-[39rem] bg-slate-900'>
                </div>
                </div>
            </div>






        </div>


      );
}
 
export default Landing;