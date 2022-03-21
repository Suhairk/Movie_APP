import axios from 'axios';
import {BACKEND_API} from '../constants/URLS'

const authRequest = axios.create({
    baseURL: BACKEND_API.BACKEND_BASE_AUTH_URL
});

const registerUser = async (user) => {
    if (!user?.username || !user?.email || !user?.password) {
      return {status: false, message: 'Please fill up all fields'};
    }
    try {
      let requestBody = {
        username: user?.username,
        email: user?.email,
        password: user?.password,
      };
      let registerResponse = await authRequest.post(
        BACKEND_API.REGISTER,
        requestBody,
      );
      return registerResponse?.data;
    } catch (error) {
      console.log(error);
      return {status: false, message: 'Oops! Something went wrong'};
      
    }

  };
//login

const loginUser = async (user) =>{
  if (!user?.username || !user?.password) {
    return {status: false, message: 'Please fill up all fields'};
  }
  try {

    let requestBody = {
      username :user?.username,
      password: user?.password,
    };
    let loginResponse = await authRequest.post(
      BACKEND_API.LOGIN, requestBody
    )
    return loginResponse?.data
    
  } catch (error) {
    console.log(error);
    return { status : false , message:"oops some thing went wrong"};
  }
};


export  {registerUser,loginUser}