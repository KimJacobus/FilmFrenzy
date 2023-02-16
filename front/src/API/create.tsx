import { useState } from 'react';
// import { useHistory } from 'react-router-dom';


const Create = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isPending, setIsPending] = useState(false);
    // const history = useHistory();
    
    const handleSubmit = (e:any) => {
            e.preventDefault();
            const user = {firstname, lastname, email, password}
            
            // setIsPending(true);



            fetch('http://localhost:8000/blogs', {
                method: 'POST', 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            }).then(() => {
                console.log({firstname})
                // setIsPending(false);
                // history.push('/');
            })


            


        }

    return (

     <div className="create">
        <h2>create account</h2>
        <form onSubmit={handleSubmit}>
            <label>create account: </label>

            
            <input type="text" required value = {firstname} onChange={(e) => setFirstname(e.target.value)}/>
{/* 
            <label>Blog title: </label>
            <textarea required
                value = {body} 
                onChange = {(e) => setBody(e.target.value)}>

            </textarea> */}

            {/* <label>Blog author:</label> */}

            {/* <select */}
                {/* value={ author } onChange={(e) => setAuthor(e.target.value)} */}
            
            {/* <option value="mario">mario</option> */}
            {/* <option value="yoshi">yoshi</option> */}
            {/* </select> */}

            {<button>add Blog</button>}
            {/* { isPending && <button disabled>Adding blog...</button>} */}

        </form>

     </div>
     
    );
}

export default Create; 