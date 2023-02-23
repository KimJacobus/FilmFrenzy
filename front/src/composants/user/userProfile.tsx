import NavbarHome from "../navbar/NavbarHome";
import avatar from '../../assets/pictures/avatar.jpg';
import Footer from "../footer/footer";
import NavbarUser from "../navbar/NavbarUser";
import { Link } from "react-router-dom";
import arrow from "../../assets/pictures/arrow.jpg"



const UserProfile = () => {
    return ( 
      
        <div className="userprofil">

                <div className="navbar">
                    <NavbarUser/>        
                </div>
                 <div className="bg-slate-900 p-7">
                    <div>
                        <button className="">
                            <Link to="/home"> 
                                <div className="flex items-center">
                                <img src={arrow} alt="back" className="w-11 rounded-full md:w-20" />
                                <h3 className="text-white ml-2">Home</h3>
                                </div>
                            </Link>
                     </button>
                  </div>


                        <br />
                    <div className="flex justify-center">
                        <h1 className="text-red-700 flex justify-center text-2xl border border-solid border-red-600 rounded-full py-7 bg-slate-800 w-72"> 
                            My Account  
                        </h1>
                    
                    </div>
                </div>   
                 <div className="bg-slate-900 flex justify-center md:justify-start md:pl-7"><br />
                    
                 <img className='bg-white rounded-full p-3 h-80 ' src={avatar} />
                </div>
                <div className="bg-slate-900 p-1 py-10 ">
                <div className="bg-slate-900 m-4 pb-8 text-white p-5 border border-solid border-red-600 rounded-lg"><br />
                   <h3 className="border border-solid bg-slate-700 border-red-600 py-5 w-80 rounded-full p-3"> My Username :  </h3> <br />
                   <h3 className="border border-solid bg-slate-700 border-red-600 py-5 w-80 rounded-full p-3 "> My Email : </h3> 
                </div>

                </div>
                

                <Footer/>




        </div>       

     );
};
 
export default UserProfile;