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

import { ContainerXL } from '../components/Container';
import { TagCardTitle } from './TagCard';
import { TagType } from '../../../types/tag';
import { EventType } from '../../../types/event';

export function EventTitle({ event }: { event: EventType }) {
    const [tags, setTags] = useState<TagType[]>([]);

    const session = useSession();
    const supabase = useSupabaseClient();

    const fetchTags = async (tagIds) => {
        try {
          const { data: fetchedTags, error } = await supabase
            .from('tags')
            .select('*')
            .in('id', tagIds);
    
          if (error) throw error;
    
          setTags(fetchedTags);
        } catch (err) {
          console.error('Error fetching tags:', err);
        }
      };
    
      useEffect(() => {
        if(event.tags != null){
            fetchTags(event.tags);
        }
      }, []);
      
    return (
        <ContainerXL jc='center' ai='center' space>
            <H2>{event?.title}</H2>
                {tags && tags.length > 0 && (
                <XStack jc='center' gap="$2">
                {tags.map((tag, index) => (
                    <TagCardTitle 
                        key={tag.id}
                        tag={tag}
                    />
                ))}
                </XStack>
                )}
            <Text>Created By: [name] / [G] / [age]</Text>
        </ContainerXL>
    );
}