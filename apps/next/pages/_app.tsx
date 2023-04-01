import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useState, startTransition } from 'react'
import type { SolitoAppProps } from 'solito'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient()
  );

  return (
    <>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <Head>
          <title>Tamagui Example App</title>
          <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionContextProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        startTransition(() => {
          setTheme(next)
        })
      }}
    >
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default MyApp
