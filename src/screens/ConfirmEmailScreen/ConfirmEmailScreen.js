import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('')

  const onConfirmEmailPressed = () => {
    console.warn('Confrim Email')
  }

  const onSignInPressed = () => {
    console.warn('Sign In')
  }

  const onResendCodePressed = () => {
    console.warn('Resend Code')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

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