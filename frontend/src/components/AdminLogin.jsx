import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import getBaseUrl from "../utils/baseURL";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const year = new Date().getFullYear();
    const [message, setMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate();

      const onSubmit = async (data) => {
        try {
            const res = await axios.post(`${getBaseUrl()}/api/auth/admin`,data,{
                headers:{
                    "Content-Type":"application/json"
                }
            });

            const auth = res.data;
            if(auth.token){
                localStorage.setItem('token',auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token has been expired,please login again')
                    navigate("/admin")
                }, 3600*1000);
            }
            alert("Admin Login Successfull")
            navigate("/dashboard")
        } catch (error) {
          console.log(error);
          setMessage("Please provide valid email and password")
        }
      }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: true })}
              name="username"
              id="username"
              placeholder="Enter Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div className="w-full">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
            Login
            </button>
          </div>
        </form>
        
        <p className="mt-5 text-center text-gray-500 text-xs ">
          ©{year} BookStak. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default AdminLogin