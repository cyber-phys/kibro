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
import { Container, ContainerMini, ContainerXL } from '../components/Container';
import { EventType } from '../../../types/event';

export function EventCardMini({ event }: { event: EventType }) {
    const EventLink = (slug) => (
        useLink({
          href: `/event/${slug}`,
    }));

    return (
        <Container maxWidth='$10' bg='$green7' p='$0.25' {...EventLink(event.id)}>
            <Text p='$2' size='$2'>{event.title}</Text>
            <Text p='$2' size='$4'>{formatTime(event.start_time)} - </Text>
            <Text p='$2' size='$4'>{formatTime(event.end_time)}</Text>
        </Container>
    );  
}