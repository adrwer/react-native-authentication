import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form' 
import {Auth} from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
  const navigation = useNavigation()
  
  const {control, handleSubmit, watch} = useForm()
  const pwd = watch('password')

  const onSignUpPressed = async (data) => {
    const {username, password, email, name} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username}
      });
      navigation.navigate('ConfirmEmail')
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  const onTermsOfUsePressed = () => {
    console.warn('Terms of Use')
  }

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Create Account</Text>

      <CustomInput name="fullName" placeholder='Full Name' control={control} rules={{required: 'Full Name is required'}} />
      <CustomInput name="username" placeholder='Username' control={control} rules={{required: 'Username is required'}} />
      <CustomInput name="email" placeholder='Email' control={control} 
        rules={{required: 'Email is required', pattern: {value: EMAIL_REGEX, message:'Email is invalid'}}} 
      />
      <CustomInput name="password" placeholder='Password' control={control} secureTextEntry 
        rules={{required: 'Password is Required', minLength: {value: 4, message: 'Password should exceed 3 characters'}}} 
      />
      <CustomInput name="confirmPassword" placeholder='Confirm Password' control={control} secureTextEntry 
        rules={{required: 'Confirm password is Required', validate: value => value === pwd || 'Passwords do not match'}}
      />

      <CustomButton text="Sign Up" onPress={handleSubmit(onSignUpPressed)} />
      <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

      <SocialSignInButtons />

      <CustomButton text="Already have an account? Sign In" onPress={onSignInPressed} type='TERTIARY' />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  },
  text: {
    color: 'gray',
    marginVertical: 10
  },
  link: {
    color: '#FDB075'
  }
})

export default SignUpScreen