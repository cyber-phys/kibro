import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, ScrollView } from '@my/ui'
import React, { useState } from 'react'

import { Navbar } from 'app/components/Navbar'
import { WeekViewScreen } from 'app/components/WeekView'

export function CalendarScreen() {

  return (
    <>
      <YStack bg="$background3" f={1} jc='space-between' ai='flex-start' p="$4" space>
        <WeekViewScreen/>
      </YStack>
      <Navbar/>
    </>
  )
}