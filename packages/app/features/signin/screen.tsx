import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function SignInScreen() {
  const homeProps = useLink({
    href: '/home',
  })

  const createAccountProps = useLink({
    href: '/create_account',
  })

  const emailSignInProps = useLink({
    href: '/email_signin',
  })

  return (
    <>
    <YStack bg='$primary2' f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 color='$primary1' ta="center">Sign In</H1>
        {/* <Button size="$6" >Continue with Apple</Button> */}
        {/* <Button size="$6" >Continue with Google</Button> */}
        {/* <Button size="$6" >Continue with Facebook</Button> */}
        <Button size="$6" {...emailSignInProps}>Continue with Email</Button>
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