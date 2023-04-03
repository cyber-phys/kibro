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

import { formatTime } from './DateTools';
import { ContainerXL } from '../components/Container';
import { EventType } from '../../../types/event';

export function EventCardMini({ event }: { event: EventType }) {
    return (
        <ContainerXL bg='$red10' space p="$4" margin="$4">
            <H4>{event.title}</H4>
            <Text>{formatTime(event.start_time)} - {formatTime(event.end_time)}</Text>
        </ContainerXL>
    );  
}