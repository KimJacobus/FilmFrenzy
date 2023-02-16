import { useEffect } from "react";



const Check = () => {


    return (  
        <>{

            useEffect(() => {
                fetch('http://localhost:6868/api/auth/signup')
                .then(res => {
                    return res.json();
                })
                .then(data => {

                    console.log(data);


                })




            }, [])
            
            
            
            };</>


    );
}
 
export default Check;