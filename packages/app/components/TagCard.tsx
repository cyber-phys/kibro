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
import { Check } from '@tamagui/lucide-icons'
import { Checkbox } from 'tamagui'

import { ContainerSquare } from '../components/Container';
import { TagType } from '../../../types/tag';

export function TagCardMini({ tag, isSelected, onPress }: { tag: TagType; isSelected: boolean; onPress: () => void; }) {
    return (
        <ContainerSquare bg='$background1' space p="$4" margin="$2" jc='center' ai='center' onPress={onPress} position='relative'>
            <YStack position="absolute" top={0} right={0} padding="$1">
                <Text>{isSelected ? '☑︎' : '☐'}</Text>
            </YStack>
            <H4>{tag.icon ? tag.icon : '❓'}</H4>
            <Text>{tag.title}</Text>
        </ContainerSquare>
    );  
}

export function TagCardTitle({ tag }: { tag: TagType }) {
    return (
        <ContainerSquare bg='$red7' space p="$4" margin="$2" jc='center' ai='center'>
            <H4>{tag.icon ? tag.icon : '❓'}</H4>
            <Text>{tag.title}</Text>
        </ContainerSquare>
    );  
}