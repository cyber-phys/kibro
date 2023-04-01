import 'expo-dev-client'
import React, { useState } from 'react'
import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY as string;

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const [supabaseClient] = useState(() =>
    createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  );

  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <NativeNavigation />
      </SessionContextProvider>
    </Provider>
  )
}
