import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {height} = useWindowDimensions()

  const onSignInPressed = () => {
    console.warn('Signed In')
  }

  const onSignInFacebookPressed = () => {
    console.warn('Signed In Facebook')
  }

  const onSignInGooglePressed = () => {
    console.warn('Signed In Google')
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password")
  }

  const onSignUpPressed = () => {
    console.warn('Sign Up')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height*0.3}]} resizeMode='contain' />

      <CustomInput placeholder='Username' value={username} setValue={setUsername} />
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>

      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type='TERTIARY' />

      <CustomButton text="Sign In with Facebook" onPress={onSignInFacebookPressed} bgColor="#E7EAF4" fgColor="#4765A9" />
      <CustomButton text="Sign In with Google" onPress={onSignInGooglePressed} bgColor="#FAE9EA" fgColor="#DD4D44" />

      <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type='TERTIARY' />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight: 200
  }
})

export default SignInScreen