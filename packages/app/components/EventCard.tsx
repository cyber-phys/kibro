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
import { Alert } from 'react-native';

import { formatDate, formatTime } from '../components/DateTools';
import { ContainerXL } from '../components/Container';
import { EventType } from '../../../types/event';

export function EventCard({ event, bgColor }: { event: EventType; bgColor: 'grey' | 'white' }) {
    const backgroundColor = bgColor === 'grey' ? '$background2' : '$background1';

    const EventLink = (slug) => (
      useLink({
        href: `/event/${slug}`,
      }));

    return (
        <ContainerXL bg={backgroundColor} space p="$4" {...EventLink(event.id)}>
            <H4>{event.title}</H4>
            <XStack justifyContent='space-between'>
                <Text>{formatDate(event.start_time)}</Text>
                <Text>{formatTime(event.start_time)} - {formatTime(event.end_time)}</Text>
            </XStack>
            <Text>{event.location}</Text>
            <Text>{event.description}</Text>
        </ContainerXL>
    );  
}