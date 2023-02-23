import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNext = (event: any) => {
    event.preventDefault();

    const user = { username, password };

    fetch("http://localhost:6868/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((err) => {
      console.log(user);
      console.log(err);

      if (err.status !== 200) {
        console.log(err);
        //add <p> in html to show error to user
      } else {
        navigate("/home");
      }
    });

    // do post, if you get status 200 ? everything okay, redirect
    // do post, if you get status 400, 500 something went wrong; block redirect throw error;
    // will have to check how to catch error, to then use them
  };

  return (
    <div className="loginuser relative">
      <div className="flex w-screen h-auto justify-center">
        <div className="p-6 mx-1 rounded shadow-lg bg-slate-900 opacity-90 mt-1">
          <div className="flex justify-between text-red-500 pb-6 text-xl">
            <h1 className="border-2 border-red-600 p-2 rounded opacity-70 text-base cursor-default justify-self-start">
              Login
            </h1>
            <Link to="/SendEmail">
              {" "}
              <h1 className="text-sm">forgot password?</h1>{" "}
            </Link>
          </div>

          <form onSubmit={handleNext}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="
            form-control 
            w-full px-3
            py-2.5
          text-gray-700
          bg-zinc-800 bg-clip-padding
            border border-solid border-slate-600
            m-0
          focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>{" "}
              <br />
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control
          block
          w-full
          px-3
          py-2.5
          text-base
          font-normal
          text-white
          bg-zinc-800 bg-clip-padding
          border border-solid border-slate-600
          focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <br />
              <div className="form-group justify-center">
                {/* <Link to="/home"> */}
                <button
                  type="submit"
                  onClick={handleNext}
                  className="
      px-6
      py-2.5
      bg-red-800
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      shadow-md
      hover:bg-slate-400 hover:shadow-lg
      focus:bg-slate-400 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-900 active:shadow-lg"
                >
                  Next
                </button>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
