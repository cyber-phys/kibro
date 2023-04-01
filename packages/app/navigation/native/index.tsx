import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { SignInScreen } from '../../features/signin/screen'
import { createAccountScreen } from '../../features/create-account/screen'
import { emailSignInScreen } from '../../features/emailsignin/screen'
import { emailSignUpScreen } from '../../features/emailsignup/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  signin: undefined
  createaccount: undefined
  emailsignin: undefined
  emailsignup: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="signin"
        component={SignInScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="createaccount"
        component={createAccountScreen}
        options={{
          title: 'Create Account',
        }}
      />
      <Stack.Screen
        name="emailsignin"
        component={emailSignInScreen}
        options={{
          title: 'Email Sign In',
        }}
      />
      <Stack.Screen
        name="emailsignup"
        component={emailSignUpScreen}
        options={{
          title: 'Email Sign Up',
        }}
      />
    </Stack.Navigator>
  )
}
