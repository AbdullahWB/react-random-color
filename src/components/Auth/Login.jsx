import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
  }
  const handlePassword = (e) => {
    const passwordInput = e.target.value
    setPassword(passwordInput)
    if (passwordInput.length < 6) {
      setPasswordErr("password must be at least 6 characters")
    } else if (!/.+[A-Z].+/.test(passwordInput)) {
      setPasswordErr("password must be one capital letter")
    } else {
      setPasswordErr("")
    }
  }
  const handleEmail = (e) => {
    const emailInput = e.target.value
    setEmail(emailInput)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput)) {
      setEmailErr("Please enter a valid email address")
    } else {
      setEmailErr("");
    }
  }
  return <div className="mt-36">
    <form onSubmit={handleSubmit} className="bg-gray-200 p-10 rounded-lg">
      <div className="relative z-0 w-full mb-6 group">
        <input value={email} onChange={handleEmail} type="email" name="email" id="floating_email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer ${email ? emailErr ? "border-red-500" : "border-green-500" : "border-gray-300 focus:border-blue-600 dark:focus:border-blue-500 dark:border-gray-600"}`} placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        {
          emailErr && <span className="error">{emailErr}</span>
        }
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input value={password} onChange={handlePassword} type="password" name="password" id="floating_password" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0  peer ${password ? passwordErr ? "border-red-500" : "border-green-500" : "border-gray-300 dark:focus:border-blue-500 focus:border-blue-600 dark:border-gray-600"}`} placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        {
          passwordErr && <span className="error">{passwordErr}</span>
        }
      </div>

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

  </div>;
};

export default Login;
