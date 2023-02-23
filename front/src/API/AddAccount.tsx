import { useState, useEffect } from "react";


// interface Account {
//   firstname: string;
//   lastname: string;
//   username: string;
//   email: string;
//   password: string;
// }



const AddAccount = () => {


  
    
      
      const [account, setAccount]= useState({});


useEffect(() => {

const firstname = sessionStorage.getItem('firstname' );
const lastname = sessionStorage.getItem('lastname' );
const username = sessionStorage.getItem('username' );
const email = sessionStorage.getItem('email');
const password = sessionStorage.getItem('password');

console.log(username);


if (firstname && lastname && username && email && password) {
    setAccount({ firstname, lastname, username, email, password });
  }


  console.log(account);


if(account) {
  fetch('http://localhost:6868/api/auth/signup', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(account)
}). then (() => {
    console.log("account added");
    })
}


}, [])




    return (  
        
        <div className="AddAccount">





          
          </div>

);
}
 
export default AddAccount;



  

