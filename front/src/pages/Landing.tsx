import NFBG from '../assets/pictures/NFBG.jpg';
import NavbarHome from '../composants/navbar/NavbarHome';
import NavbarSignUp from '../composants/navbar/NavbarSingUp';
import LoginUser from '../composants/LoginForm/Loginuser';
import Emailuser from '../composants/RegisterForm/Emailuser';
import Footer from '../composants/footer/footer';
import tv from '../assets/pictures/tv.png';
import pc from '../assets/pictures/pc.png';
import mobile from '../assets/pictures/mobile.png';
import manette from '../assets/pictures/manette.png';
import screen from '../assets/pictures/screen.png';
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

        <div>
            <img src={screen} />
        </div>

        <div className='bg-slate-900 border-t-2 border-red-600'>
            <div className='text-white text-center text-2xl mt-10 mb-10'><h1><b> Available on your favorite devices</b> </h1></div>
            <div className="grid grid-cols-1  bg-slate-900 border-red-600 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-28">
               
    <div className="bg-slate-900 p-4 shadow-md text-white "> <br />
    <img className='bg-white rounded-full p-3 h-24 filter ' src={tv}/>
    
        <h2 className="text-lg font-bold mb-2 ml-8">Tv</h2> <br />
        <p className="mb-1">Amazon Fire Tv</p>
        <p className="mb-1">Android Tv</p>
        <p className="mb-1">Apple Tv</p>
        <p className="mb-1">Lg TVs</p>
        <p className="mb-1">Samsung</p>
    </div>
    <div className="bg-slate-900 text-white p-4 shadow-md"><br />
    <img className='bg-white rounded-full p-3 h-24' src={pc }/>
        <h2 className="text-lg font-bold mb-2 ml-1">Computer</h2> <br />
        <p className="mb-1">Chrome Os</p>
        <p className="mb-1">MacOs</p>
        <p className="mb-1">Windows Pc</p>
    </div>
    <div className="bg-slate-900 text-white  p-4 shadow-md"> <br />
    <img className='bg-white rounded-full p-3 h-24 ' src={mobile }/>
        <h2 className="text-lg font-bold mb-2">Mobile and Tablet</h2> <br />
        <p className="mb-1">Amazon Fire Tables</p>
        <p className="mb-1">Android Phone & Tablets</p>
        <p className="mb-1">Iphone & Ipad</p>
    </div>
    <div className="bg-slate-900 text-white p-4 shadow-md mb-10"> <br />
    <img className='bg-white rounded-full p-3 h-24 ' src={manette }/>
        <h2 className="text-lg font-bold mb-2">Game console</h2> <br />
        <p className="mb-1">Ps4</p>
        <p className="mb-1">Ps5</p>
        <p className="mb-1">Xbox ONe</p>
        <p className="mb-1">Xbox Series X</p>
    </div>
</div></div>



            <Footer />

        </div>


      );
}
 
export default Landing;