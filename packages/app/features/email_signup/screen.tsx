import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState, useContext } from 'react'
import { useLink } from 'solito/link'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'solito/router';

export function EmailSignUpScreen() {
  const signInProps = useLink({
    href: '/signin',
  })

  const homeProps = useLink({
    href: '/home',
  })

  const session = useSession();
  const supabase = useSupabaseClient();
  const { push } = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signupHandler = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      alert(error.message);
    } else {
      push('/signin')
      alert("Confirmation email sent. Please check your inbox")
    }
  }

  return (
    <>
      <YStack bg='$primary2' f={1} jc="center" ai="center" p="$4" space>
        <YStack space="$4" maw={600}>
          <H1 color='$primary1' ta="center">Create Account</H1>
          <Input size="$6" placeholder='Email address' value={email} onChangeText={setEmail} />
          <Input size="$6" placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
          <Input size="$6" placeholder='Confirm Password' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
          <Button size="$6" onPress={signupHandler}>Sign Up</Button>
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
