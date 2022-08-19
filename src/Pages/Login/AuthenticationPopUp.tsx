import { useContext } from "react";

import { UserContext } from "../../Contexts/userContext";

import {signInWithPopup, GithubAuthProvider} from 'firebase/auth';
import { auth } from "../../Services/Firebase";

import { useNavigate } from "react-router-dom";

export default function AuthenticationPopup(){
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  
  function handleGitHubSignIn(){
    const provider = new GithubAuthProvider();
    SignInWithPopupSetUser(provider)
  }

  function SignInWithPopupSetUser(provider: any){
    signInWithPopup(auth, provider)
    .then((result)=>{
      setUser(result.user)
      localStorage.setItem("user", JSON.stringify(result.user));
      console.log(result.user)
      navigate("/")
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return({
    handleGitHubSignIn
  })
}