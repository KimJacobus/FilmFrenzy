import NavbarHome from "../navbar/NavbarHome";
import avatar from '../../assets/pictures/avatar.jpg';
import Footer from "../footer/footer";


const UserProfile = () => {
    return ( 
      
        <div className="userprofil">

                <div className="navbar">
                    <NavbarHome />         
                </div>
                <div className="bg-slate-900 p-8"><br />
                    <h1 className="text-red-700 flex justify-center text-2xl pb-10 border border-solid border-red-600 rounded-full pt-8 bg-slate-800"> My Profil </h1>
                    
                </div>   
                 <div className="bg-slate-900 pl-8"><br />
                    
                 <img className='bg-white rounded-full p-3 h-80 ' src={avatar} />
                </div>
             
                <div className="bg-slate-900 text-white p-11"><br />
                   <h3> My Username :  </h3> <br />
                   <h3> My Email : </h3> 
                </div>

                <Footer/>




        </div>       

     );
};
 
export default UserProfile;