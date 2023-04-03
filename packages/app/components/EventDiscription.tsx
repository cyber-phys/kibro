import React, { useState, useContext, useEffect } from 'react';
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
    H6,
    ScrollView
  } from 'tamagui';
import { ChevronLeft, Swords, ImagePlus, Grid, Edit, Menu, User } from '@tamagui/lucide-icons'
import _ from 'lodash';

import { formatDate, formatTime } from './DateTools';
import { ContainerXL } from '../components/Container';
import { TagCardTitle } from './TagCard';
import { TagType } from '../../../types/tag';
import { EventType } from '../../../types/event';

export function EventDiscription({ event }: { event: EventType }) {
    const [tags, setTags] = useState<TagType[]>([]);
      
    return (
        <ContainerXL bc='$background1' jc='space-evenly' ai='flex-start' space p='$4'>
            <Text>{event?.description}</Text>
            <Separator/>
            <Text>🗓️   {formatDate(event.start_time)}</Text>
            <Text>⏰   {formatTime(event.start_time)} - {formatTime(event.end_time)}</Text>
            <Text>⚧️   </Text>
            <Text>#️⃣   </Text>
            <Text>🎂   </Text>
            <Text>📍   {event?.location}</Text>
        </ContainerXL>
    );
}