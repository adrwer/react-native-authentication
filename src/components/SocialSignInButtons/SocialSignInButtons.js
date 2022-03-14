import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInFacebookPressed = () => {
        console.warn('Signed In Facebook')
      }
    
    const onSignInGooglePressed = () => {
        console.warn('Signed In Google')
      }

  return (
    <>
      <CustomButton text="Sign In with Facebook" onPress={onSignInFacebookPressed} bgColor="#E7EAF4" fgColor="#4765A9" />
      <CustomButton text="Sign In with Google" onPress={onSignInGooglePressed} bgColor="#FAE9EA" fgColor="#DD4D44" />
    </>
  )
}

export default SocialSignInButtons