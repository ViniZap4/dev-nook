import { useContext, useEffect } from 'react'

import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'

//contents
import {HomeContainer} from './styles'
import { BoxContainer } from '../../components/styled/BoxContainer'
import LeftContainer from './LeftContents'
import RightContents from './RightContents'
import { ThemeContext } from '../../contexts/themeContext'

export default function Home(){
  const {authenticated, user} = useContext(UserContext)
  const {colors} = useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(authenticated) navigate("/dashboard")
    console.log(user)
  },[])

  return(
    <HomeContainer>
      <BoxContainer>
        <LeftContainer />
        <RightContents />
      </BoxContainer>
    </HomeContainer>
  )
}