import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'solito/router';

export function EmailSignInScreen() {
  const signInProps = useLink({
    href: '/signin',
  })

  const homeProps = useLink({
    href: '/home',
  })

  const discoverProps = useLink({
    href: '/discover'
  })

  const session = useSession();
  const supabase = useSupabaseClient();
  const { push } = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signinHandler = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      alert(error.message);
    } else {
      push('/discover')
    }
  }

  return (
    <>
    <YStack bg='$primary2' f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 color='$primary1' ta="center">Sign In</H1>
        <Input size="$6" placeholder='Email address' value={email} onChangeText={setEmail}/>
        <Input size="$6" placeholder='Password' value={password} onChangeText={setPassword}/>
        <Button size="$6" onPress={signinHandler} >Sign In</Button>
      </YStack>
    </YStack>
    <YStack bg='$background1' f={1} jc="center" ai="center" p="$4" space>
    </YStack>
    <YStack bg='$primary1' f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
      </YStack>
    </YStack>
    </>
  )
}