import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function emailSignInScreen() {
  const signInProps = useLink({
    href: '/signin',
  })

  const homeProps = useLink({
    href: '/home',
  })

  return (
    <>
    <YStack bg='$primary2' f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 color='$primary1' ta="center">Sign In</H1>
        <Input size="$6" />
        <Input size="$6" />
        <Button size="$6" >Sign In</Button>
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