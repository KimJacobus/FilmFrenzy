import { useState } from "react";
// import { useHistory } from 'react-router-dom';

const Create = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isPending, setIsPending] = useState(false);
  // const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = { username, password };

    // setIsPending(true);

    fetch("http://localhost:6868/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((err) => {
      console.log(user);
      console.log(err);

      if (err.status !== 200) {
        console.log(err);
      } else {
      }
    });
  };

  return (
    <div className="create">
      <h2>create account</h2>
      <form onSubmit={handleSubmit}>
        <label>create account: </label>

        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 
            "username": "Kikimmy",
    "password": "kimj" */}

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

        {<button>SIGN IN</button>}
        {/* { isPending && <button disabled>Adding blog...</button>} */}
      </form>
    </div>
  );
};

export default Create;
