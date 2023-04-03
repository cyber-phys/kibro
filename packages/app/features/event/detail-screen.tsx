import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState, useContext } from 'react'
import { useLink } from 'solito/link'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'solito/router';
import { createParam } from 'solito'
import { ChevronLeft, Swords, ImagePlus, Grid, Edit, Menu, User } from '@tamagui/lucide-icons'

const { useParam } = createParam<{ id: string }>()


export function EventScreen() {
    const [id] = useParam('id')
    const link = useLink({
        href: '/discover',
      })

  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">{`Event ID: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Back
      </Button>
    </YStack>
  )
}
