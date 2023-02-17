import NFBG from '../assets/pictures/NFBG.jpg';
import NavbarHome from '../composants/navbar/NavbarHome';
import NavbarSignUp from '../composants/navbar/NavbarSingUp';
import LoginUser from '../composants/LoginForm/Loginuser';
import Emailuser from '../composants/RegisterForm/Emailuser';
import Footer from '../composants/footer/footer';
import fond from '../assets/pictures/fond.jpg';
const Log = () => {


    return (
        
          
        

        <div className="LandingPageLog overflow-hidden">
       
        {/* on top  */}


        <NavbarSignUp />

        <div className="grid-col">

        <div className='flex justify-center'>
            
            <div id="FFTitle" className='absolute z-10'>
                <h1 className='righteous text-3xl lg:text-8xl text-white mt-10 mb-10 text-center'> <br></br>Film Friendzy</h1>

                <p className='jose text-2xl lg:text-4xl text-red-700 text-center mb-24'>Connect to your account</p>



                < LoginUser />
                


                </div>
            </div>



        {/* background */}

        {/* change h to auto when page is filled with form etc */}
        <div className='bg-gradient-to-b from-indigo-500 ...'>
            <img className='w-screen lg:h-auto h-80 opacity-40 overflow-hidden' src={fond}/>
        <div className='w-auto h-[39rem] lg:h-auto bg-slate-900'>
                </div>
                </div>
            </div>





        </div>


      );
}
 
export default Log;