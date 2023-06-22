import React from 'react'
import { slides } from '../../../core/constants/IntroSlider'
import AppIntroSlider from 'react-native-app-intro-slider'
import ScliderScreen from '../container/introSlider/ScliderScreen'



export default function IntroSlider({navigation}) {
  return (
<>
<AppIntroSlider
        data={slides}
        renderItem={props=>ScliderScreen(props.item)}
        showSkipButton={true}
        onSkip={()=>{navigation.push('login')}}
        onDone={()=>{navigation.push('login')}}
        buttonTextStyle={{color:'red'}}
      />
</>
  )
}