import React, { useState, useContext } from 'react';
import { useLink } from 'solito/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'solito/router';
import {
    Button,
    Paragraph,
    ParagraphProps,
    Popover,
    Separator,
    Text,
    VisuallyHidden,
    XStack,
    YStack,
    isClient,
    useMedia,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
  } from 'tamagui';
import { ChevronLeft, Swords, ImagePlus, Grid, Edit, Menu, User } from '@tamagui/lucide-icons'

import { ContainerLarge } from '../components/Container';
import { EventType } from '../components/EventType';

export function EventCard({ event }: { event: EventType}) {
    return (
          <ContainerLarge>
            <YStack bc="$background">
                <H2>{event.title}</H2>
                <H3>{event.start_time}</H3>
                <H3>{event.end_time}</H3>
                <H4>{event.description}</H4>
            </YStack>
          </ContainerLarge> 
    )
}