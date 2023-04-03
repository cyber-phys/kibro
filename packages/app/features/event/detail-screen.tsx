import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Text } from '@my/ui'
import React, { useState, useContext, useEffect } from 'react'
import { useLink } from 'solito/link'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'solito/router';
import { createParam } from 'solito'
import { ChevronLeft, Swords, ImagePlus, Grid, Edit, Menu, User } from '@tamagui/lucide-icons'

import { EventType } from '../../../../types/event';
import { EventTitle } from 'app/components/EventTitle';
import { EventDiscription } from 'app/components/EventDiscription';
import { Alert } from 'react-native';

const { useParam } = createParam<{ id: string }>()


export function EventScreen() {
  const [id] = useParam('id')

  const session = useSession();
  const supabase = useSupabaseClient();
  const [event, setEvent] = useState<EventType>();

  useEffect(() => {
    const fetchEvents = async () => {
      let { data: events, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id);

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvent(events[0]);
      }
    };

    fetchEvents();
  }, [supabase]);

  return (
    <>
    <YStack f={1} jc="center" ai="center" space>
    {event && <EventTitle event={event}/>}
    <Text>Expires: 00 days 00 hrs 00 mins</Text>
    <XStack>
      <Button>👁️</Button>
      <Button>🛟</Button>
      <Button>📨</Button>
    </XStack>
    {event && <EventDiscription event={event}/>}
    </YStack>
    </>
  );
}
