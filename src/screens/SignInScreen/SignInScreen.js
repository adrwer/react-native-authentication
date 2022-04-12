import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import {Auth} from 'aws-amplify';

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const {height} = useWindowDimensions()
  const navigation = useNavigation()

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true)
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
    setLoading(false)
    // // validate user

    // navigation.navigate('Home')
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const onSignUpPressed = () => {
    // register user

    navigation.navigate('SignUp')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height*0.3}]} resizeMode='contain' />

      <CustomInput placeholder='Username' value={username} setValue={setUsername} />
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>

      <CustomButton text={loading ? "Loading..." : "Sign In"} onPress={onSignInPressed} />
      <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type='TERTIARY' />

      <SocialSignInButtons />

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