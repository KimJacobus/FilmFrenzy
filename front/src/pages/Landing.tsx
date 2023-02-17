import NFBG from '../assets/pictures/NFBG.jpg';
import NavbarHome from '../composants/navbar/NavbarHome';
import NavbarSignUp from '../composants/navbar/NavbarSingUp';
import LoginUser from '../composants/LoginForm/Loginuser';
import Emailuser from '../composants/RegisterForm/Emailuser';
import Footer from '../composants/footer/footer';

const Landing = () => {


    return (
        
          
        

        <div className="LandingPage overflow-hidden">
        {/* on top  */}


        <NavbarSignUp />

        <div className="grid-col">

        <div className='flex justify-center'>
            
            <div id="FFTitle" className='absolute z-10'>
                <h1 className='righteous text-3xl lg:text-8xl text-white mt-10 mb-10 text-center'>Welcome to <br></br>Film Friendzy!</h1>

                <p className='jose text-2xl lg:text-3xl text-white text-center mb-28'>Movie nights with friends from anywhere!</p>


                <p className='jose text-sm lg:text-2xl text-white mb-1 text-center'>Sign up now and get a friend to join for free !</p>



                <Emailuser />
                




                </div>
            </div>



        {/* background */}

        {/* change h to auto when page is filled with form etc */}
        <div className='bg-gradient-to-b from-indigo-500 ...'>
            <img className='w-screen lg:h-auto h-80 opacity-40 overflow-hidden' src={NFBG}/>
        <div className='w-auto h-[39rem] lg:h-auto bg-slate-900'>
                </div>
                </div>
            </div>




            <Footer />

        </div>


      );
}
 
export default Landing;