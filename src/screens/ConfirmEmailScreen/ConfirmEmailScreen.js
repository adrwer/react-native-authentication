import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('')
  const [username, setUsername] = useState('')

  const navigation = useNavigation()

  const onConfirmEmailPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  const onResendCodePressed = () => {
    console.warn('Resend Code')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput placeholder='Username' value={username} setValue={setUsername} />
      <CustomInput placeholder='Enter your confirmation code' value={code} setValue={setCode} />

      <CustomButton text="Confirm Email" onPress={onConfirmEmailPressed} />

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