import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { SignInScreen } from '../../features/signin/screen'
import { CreateAccountScreen } from '../../features/create_account/screen'
import { EmailSignInScreen } from '../../features/email_signin/screen'
import { EmailSignUpScreen } from '../../features/email_signup/screen'
import { DiscoverScreen } from '../../features/discover/screen'
import { CreateEventScreen } from '../../features/create_event/screen'
import { CalendarScreen } from 'app/features/calendar/screen'
import { CommunityScreen } from 'app/features/community/screen'
import { ProfileScreen } from 'app/features/profile/screen'
import { EventScreen } from 'app/features/event/detail-screen'
import { CreateUserScreen } from 'app/features/create_user/screen'
import { animations } from '@my/ui/dist/cjs/animations'

const Stack = createNativeStackNavigator<{
  home: undefined
  signin: undefined
  create_account: undefined
  create_user: undefined
  email_signin: undefined
  email_signup: undefined
  discover: undefined
  create_event: undefined
  calendar: undefined
  community: undefined
  profile: undefined
  event_details: {
    id: string
  }
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
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="create_event"
        component={CreateEventScreen}
        options={{
          title: 'Create Events Screen',
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="calendar"
        component={CalendarScreen}
        options={{
          title: 'Calendar Screen',
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="community"
        component={CommunityScreen}
        options={{
          title: 'Community Screen',
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profile Screen',
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="event_details"
        component={EventScreen}
        options={{
          title: 'Event Screen',
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="create_user"
        component={CreateUserScreen}
        options={{
          title: 'Create User',
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  )
}
