import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
    
    const links= [
        {
            title: "Company",
            links: [
                {
                    name:"Home",
                    link: "/",
                },
                {
                    name:"About Us",
                    link: "#",
                },
               {
                
                name:"Contact Us",
                link: "#",

               },
               {

                name:"Movies",
                link: "#",

               },
               
            ]
        },

        {
            title: "Top Categories",
            links: [
                {
                    name:"Action",
                    link: "#",
                },
                {
                    name:"Romantic",
                    link: "#",
                },
               {
                
                name:"Drama",
                link: "#",

               },
               {

                name:"History",
                link: "#",

               },
            ]
        },

        {
                title: "My Account",
                links: [
                    {
                        name:"Dashboard",
                        link: "/loginForm",
                    },
                    {
                        name:"My Favorites",
                        link: "/loginForm",
                        
                    },
                   {
                    
                    name:"Profile",
                    link: "/loginForm",

    
                   },
                   {
    
                    name:"Changes Password",
                    link: "/SendEmail",

    
                   },
                   
                ]
         },
               
            ]
        
    

    return (

        <div className="bg-slate-900 py- border-t-2 border-red-600 ">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9  lg:gap-11 xl:gap-7 py-10 justify-between text-white">
                    {links.map((link, index) => (

                        <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
                            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5 ">
                                {link.title}
                            </h3>
                            <ul className="text-sm flex flex-col space-y-3">
                                 {link.links.map((text, index) => (

                                <li key={index} className="flex items-baseline">
                                    <Link to={text.link} className="text-border inline-block w-full hover:text-red-600">
                                        {text.name}
                                    </Link>
                                </li>
                                 ))}
                            </ul>
                        </div>

                    ))}

                    <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                        <Link to="/">
                            <h2 className="varela text-xl font-bold text-white hover:text-red-600">FilmFriendzy</h2>
                        </Link>
                        <p className="leading-7 text-sm text-border mt-3">
                           <span>
                            Lorem 196 Andrew Road, Suite 200, <br/> New York, NY 10007
                           </span>
                           <br/>
                           <span>
                                Tell: +255 754 661 423
                           </span>
                           <br />
                           <span>
                            Email: filmfriendzy@contact.com
                           </span>
                            
                        </p>


                    </div>

                </div>
            </div>
        </div>

      );
}
 
export default Footer;