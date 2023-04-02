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

import { ContainerXL } from '../components/Container';
import { EventType } from '../../../types/event';

export function EventCardMini({ event }: { event: EventType }) {
    const startDate = new Date(event.start_time).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
      });
      const startTimeCompact = new Date(event.start_time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      const endTimeCompact = new Date(event.end_time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

    return (
        <ContainerXL bg='$red10' space p="$4" margin="$4">
            <H4>{event.title}</H4>
            <Text>{startTimeCompact} - {endTimeCompact}</Text>
        </ContainerXL>
    );  
}