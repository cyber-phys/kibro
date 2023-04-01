import React, { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { EventType } from '../components/EventType';
import { EventCardMini } from '../components/EventCardMini';
import { H1, H2, H4, YStack, Separator, XStack} from 'tamagui';

function getDaysArray(start: Date, end: Date) {
  const daysArray: Date[] = [];
  let currentDate = start;

  while (currentDate <= end) {
    daysArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysArray;
}

export function WeekViewScreen() {
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

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(today);
  endOfWeek.setDate(endOfWeek.getDate() + 6);
  const daysArray = getDaysArray(today, endOfWeek);

  return (
    <>
    <Separator als='stretch' width="100%" />
    {daysArray.map((day, index) => (
    <>
        <XStack >
            <H4>
                {day.toLocaleDateString('en-US', {
                    weekday: 'short',
                    day: 'numeric',
                    })}
            </H4>
            <YStack jc='center' ai='center' key={index} space p='$4'>
                {events
                .filter((event) => {
                const eventDate = new Date(event.start_time);
                eventDate.setHours(0, 0, 0, 0);
                return eventDate.getTime() === day.getTime();
                })
                .map((event) => (
                <EventCardMini key={event.id} event={event} />
                ))}
            </YStack>
        </XStack>
        <Separator als='stretch' width="100%" />
        </>
        ))}
    </>
  );
}
