import { View, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form' 
import {Auth} from 'aws-amplify';

const SignInScreen = () => {
  const [loading, setLoading] = useState(false)
  const {height} = useWindowDimensions()
  const navigation = useNavigation()

  const {control, handleSubmit, formState: {errors}} = useForm()

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

      <CustomInput name="username" placeholder='Username' control={control} rules={{required: 'Username is required'}} />
      <CustomInput name="password" placeholder='Password' control={control} secureTextEntry 
        rules={{required: 'Password is Required', minLength: {value: 4, message: 'Password should exceed 3 characters'}}} 
      />

      <CustomButton text={loading ? "Loading..." : "Sign In"} onPress={handleSubmit(onSignInPressed)} />
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