import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('')

  const navigation = useNavigation()

  const onSendUsernamePressed = () => {
    navigation.navigate('NewPassword')
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput placeholder='Username' value={username} setValue={setUsername} />

      <CustomButton text="Send" onPress={onSendUsernamePressed} />

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