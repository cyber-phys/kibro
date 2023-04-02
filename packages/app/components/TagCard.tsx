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
        <ContainerSquare bg='$red10' space p="$4" margin="$2" onPress={onPress}>
            <Grid/>
            <Text>{tag.title} {isSelected && <Check />}</Text>
        </ContainerSquare>
    );  
}