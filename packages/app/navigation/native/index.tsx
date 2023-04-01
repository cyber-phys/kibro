import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { SignInScreen } from '../../features/signin/screen'
import { CreateAccountScreen } from '../../features/create_account/screen'
import { EmailSignInScreen } from '../../features/email_signin/screen'
import { EmailSignUpScreen } from '../../features/email_signup/screen'
import { DiscoverScreen } from '../../features/discover/screen'
import { CreateEventScreen } from '../../features/create_event/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  signin: undefined
  create_account: undefined
  email_signin: undefined
  email_signup: undefined
  discover: undefined
  create_event: undefined
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
        name="create_account"
        component={CreateAccountScreen}
        options={{
          title: 'Create Account',
        }}
      />
      <Stack.Screen
        name="email_signin"
        component={EmailSignInScreen}
        options={{
          title: 'Email Sign In',
        }}
      />
      <Stack.Screen
        name="email_signup"
        component={EmailSignUpScreen}
        options={{
          title: 'Email Sign Up',
        }}
      />
      <Stack.Screen
        name="discover"
        component={DiscoverScreen}
        options={{
          title: 'Discover Screen',
        }}
      />
      <Stack.Screen
        name="create_event"
        component={CreateEventScreen}
        options={{
          title: 'Create Events Screen',
        }}
      />
    </Stack.Navigator>
  )
}
