import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation()

  const {control, handleSubmit} = useForm()

  const onSendUsernamePressed = async data => {
    try {
      await Auth.forgotPassword(data.username)
      navigation.navigate('NewPassword')
    } catch (error) {
      Alert.alert('Oops', error.message)
    }
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput name="username" placeholder='Username' control={control} rules={{required: 'Username is required'}} />

      <CustomButton text="Send" onPress={handleSubmit(onSendUsernamePressed)} />

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

export default ForgotPasswordScreen