import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

import {signInWithPopup, GithubAuthProvider} from 'firebase/auth';
import { auth } from "../../services/firebase";

import { useNavigate } from "react-router-dom";
import { gitHubApi } from "../../services/gitHubApi";

export default function AuthenticationPopup(){
  const { setUser, setGitHubUid, setUserGitHubData } = useContext(UserContext);
  const navigate = useNavigate();
  
  async function getUserGitHubData(id:string){
    const response = await gitHubApi.get(`/user/${id}`)
    setUserGitHubData(response.data)
  }

  function handleGitHubSignIn(){
    const provider = new GithubAuthProvider();
    SignInWithPopupSetUser(provider)
  }

  function SignInWithPopupSetUser(provider: any){
    signInWithPopup(auth, provider)
    .then((result)=>{
      setUser(result.user)
      setGitHubUid(result.user.providerData[0].uid)
      getUserGitHubData(result.user.providerData[0].uid)
      navigate("/dashboard")
      
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return({
    handleGitHubSignIn
  })
}