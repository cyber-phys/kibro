import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme()
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
              signin: 'signin',
              create_account: 'create_account',
              email_signin: 'email_signin',
              email_signup: 'email_signup',
              create_event: 'create_event',
              discover: 'discover',
              calendar: 'calendar',
              community: 'community',
              profile: 'profile',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
