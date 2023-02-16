import { useEffect } from "react";



const Check = () => {


            useEffect(() => {
                fetch('http://localhost:6868/api/auth/signup')
                .then(res => {
                    return res.json();
                })
                .then(data => {

                    console.log(data);

                })
            }, []);
            
    return null;            
            


}
 
export default Check;