import { useEffect } from "react";



const Check = () => {


            useEffect(() => {

                
                fetch('http://localhost:6868/api/auth/signup')
                .then(res => {
                    console.log(res);
                    

                    return res.json();
                })
                .then(data => {

                    console.log(data);

                })
            }, []);
            
    return null;            
            


}
 
export default Check;


// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/v1/members');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     fetchData();
// }, []);

// return null;
