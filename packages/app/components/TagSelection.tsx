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
import { TagCardMini } from './TagCard';
import { TagType } from '../../../types/tag';

export function TagSelection({ tags, onTagsSelected }: { tags: TagType[]; onTagsSelected: (selectedTags: Set<TagType>) => void; }) {
    const groupedTags = _.groupBy(tags, 'category');
    const [selectedTags, setSelectedTags] = useState<Set<TagType>>(new Set());

    const toggleTag = (tag: TagType) => {
        const updatedSelectedTags = new Set(selectedTags);
      
        const tagAlreadySelected = Array.from(updatedSelectedTags).find(
          (selectedTag) => selectedTag.id === tag.id
        );
      
        if (tagAlreadySelected) {
          updatedSelectedTags.delete(tagAlreadySelected);
        } else {
          if (updatedSelectedTags.size < 3) {
            updatedSelectedTags.add(tag);
          } else {
            // Show a message or provide some feedback to the user that they can only select up to 3 tags.
            console.warn('You can only select up to 3 tags.');
          }
        }
      
        setSelectedTags(updatedSelectedTags);
    };
      

    useEffect(() => {
        onTagsSelected(selectedTags);
    }, [selectedTags]);
      
    return (
        <ContainerXL>
            <YStack gap="$4">
                {Object.entries(groupedTags).map(([category, categoryTags]) => (
                    <React.Fragment key={category}>
                        <H3 bc='$categoryYellow' marginBottom="$2">{category}</H3>
                        <XStack flexWrap='wrap' gap="$2">
                            {(categoryTags as TagType[]).map((tag, index) => (
                                <TagCardMini 
                                    key={tag.id}
                                    tag={tag}
                                    isSelected={Array.from(selectedTags).some(
                                        (selectedTag) => selectedTag.id === tag.id
                                    )} 
                                    onPress={() => toggleTag(tag)}/>
                            ))}
                        </XStack>
                    </React.Fragment>
                ))}
            </YStack>
        </ContainerXL>
    );
}