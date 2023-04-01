import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const signInProps = useLink({
    href: '/signin',
  })

  const createAccountProps = useLink({
    href: '/createaccount',
  })

  return (
    <>
    <YStack bg='$primary1' f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 color='$primary2' ta="center">Welcome!</H1>
      </YStack>
    </YStack>
    <YStack bg='$background1' f={1} jc="center" ai="center" p="$4" space>
    </YStack>
    <YStack bg='$primary2' f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <Button size="$6" {...signInProps}>Sign In</Button>
        <Button size="$6" {...createAccountProps}>Create Account</Button>
      </YStack>
    </YStack>
    </>
  )
}