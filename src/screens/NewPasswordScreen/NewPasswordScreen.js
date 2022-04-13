import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const NewPasswordScreen = () => {
  const navigation = useNavigation()

  const {control, handleSubmit} = useForm()

  const onSubmitPasswordPressed = data => {
    console.warn(data)
    navigation.navigate('SignIn')
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput name="code" placeholder='Enter your confirmation code' control={control} rules={{required: 'Confirmation code is required'}} />
      <CustomInput name="newPassword" placeholder=' New Password' control={control} secureTextEntry 
        rules={{required: 'New Password is Required', minLength: {value: 4, message: 'New Password should exceed 3 characters'}}} 
      />

      <CustomButton text="Submit " onPress={handleSubmit(onSubmitPasswordPressed)} />

      <CustomButton text="Back to Sign In" onPress={onSignInPressed} type='TERTIARY' />
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

export default NewPasswordScreen