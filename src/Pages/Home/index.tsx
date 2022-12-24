import {HomeContainer} from './styles'

import LeftContainer from './LeftContents'
import RightContents from './RightContents'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const {authenticated, user} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(authenticated) navigate("/dashboard")
    console.log(user)
  },[])

  return(
    <HomeContainer>
      <div className='contentConatiner'>
        <LeftContainer />
        <RightContents />
      </div>
    </HomeContainer>
  )
}