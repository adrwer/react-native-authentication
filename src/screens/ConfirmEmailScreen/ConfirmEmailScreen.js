import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native'
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const {control, handleSubmit, watch} = useForm({defaultValues: {username: route?.params?.username}})

  const username = watch('username')

  const onConfirmEmailPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code was resent to your email!')
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput name="username" placeholder='Username' control={control} rules={{required: 'Username is required'}} />
      <CustomInput name="code" placeholder='Enter your confirmation code' control={control} rules={{required: 'Confirmation code is required'}} />

      <CustomButton text="Confirm Email" onPress={handleSubmit(onConfirmEmailPressed)} />

      <CustomButton text="Resend Code" onPress={onResendCodePressed} type='SECONDARY' />

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

export default ConfirmEmailScreen