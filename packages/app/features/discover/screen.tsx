import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, ScrollView } from '@my/ui'
import React, { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import { Navbar } from '../../components/Navbar'
import { EventCard } from '../../components/EventCard'
import { EventType } from '../../components/EventType'

export function DiscoverScreen() {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      let { data: events, error } = await supabase
        .from('events')
        .select('*');

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(events || []);
      }
    };

    fetchEvents();
  }, [supabase]);

  return (
    <>
    <ScrollView>
      <YStack bg="$background3" f={1} jc='flex-start' ai='center' p="$4" space>
        {/* <YStack space="$4"> */}
          {/* <H1 color="$primary1" ta="center">Discover</H1> */}
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} bgColor={index % 2 === 0 ? 'grey' : 'white'} />
          ))}
        {/* </YStack> */}
      </YStack>
    </ScrollView>
    <Navbar />
    </>
  );
}