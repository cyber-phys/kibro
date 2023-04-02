import { Anchor, Button, H1, H4, Input,TextArea,Paragraph, Separator, Sheet, XStack, YStack, Slider, H3, Text } from '@my/ui'
import React, { useState, useRef, useEffect } from 'react'
import { useLink } from 'solito/link'
import DatePicker from '@react-native-community/datetimepicker';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'solito/router';
import { Alert } from 'react-native';

import { Navbar } from 'app/components/Navbar'
import { TagSelection } from 'app/components/TagSelection';
import { TagType } from '../../../../types/tag'

const Screen1 = ({ setScreen, formData, setFormData }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState<TagType[]>([]);
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);

  const session = useSession();
  const supabase = useSupabaseClient();

  const handelNext = () => {
    const tagIds = selectedTags.map(tag => tag.id);
    setFormData({...formData, title, description, tagIds})
    setScreen(2)
  }

  const handleTagsSelected = (t: Set<TagType>) => {
    console.log('Selected tags:', Array.from(t));
    setSelectedTags(Array.from(t));
  };

  const fetchTags = async () => {
    try {
      const { data: fetchedTags, error } = await supabase
        .from('tags')
        .select('*');

      if (error) throw error;

      setTags(fetchedTags);
    } catch (err) {
      Alert.alert("error", err)
      console.error('Error fetching tags:', err);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <>
    <YStack bg='$background3' f={1} p="$4" space>
      <H4 color='$text1' ta="left">Hangout Title</H4>
      <Input size="$4" onChangeText={(value) => setTitle(value)}></Input>

      <H4 color='$text1' ta="left">Hangout description</H4>
      <TextArea mih={140} placeholder="Enter your details..." numberOfLines={4} onChangeText={(value) => setDescription(value)}/>
      
      <H4 color='$text1' ta="left">Select tags</H4>
      <Text color='$text1' ta="left">Choose one primary tag and up to two secondary tags</Text>
      <TagSelection tags={tags} onTagsSelected={handleTagsSelected}/>

      <Button size="$2" bg='$highlight1' onPress={handelNext}>Next</Button>
    </YStack>
    <Navbar/>
    </>
  )
}

const Screen2 = ({ setScreen, formData, setFormData }) => {
  const [maxPeople, setMaxPeople] = useState(0)
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())

  const [startTimeOpen, setStartTimeOpen] = useState(false)
  const [endTimeOpen, setEndTimeOpen] = useState(false)

  const handelNext = () => {
    setFormData({ ...formData, maxPeople, startTime, endTime})
    setScreen(3)
  }

  const handlemaxPeopleChange = (value) => {
    setMaxPeople(value[0])
  };

  return (
    <>
    <YStack bg='$background3' f={1} p="$4" space>
      <H4 color='$text1' ta="left">With how many people?</H4>
      <H4 color='$text1' ta="left">{maxPeople}</H4>
      <Slider defaultValue={[2]} min={2} max={100} step={1} onValueChange={handlemaxPeopleChange}>
        <Slider.Track>
          <Slider.TrackActive />
        </Slider.Track>
        <Slider.Thumb index={0} circular elevate />
      </Slider>

      <H4 color='$text1' ta="left">Start Time</H4>
      <DatePicker
        modal
        mode='datetime'
        open={startTimeOpen}
        value={startTime}
        onConfirm={(startTime) => {
          setStartTimeOpen(false)
          setStartTime(startTime)
        }}
        onCancel={() => {
          setStartTimeOpen(false)
        }}
      />

      <H4 color='$text1' ta="left">End Time</H4>
      <DatePicker
        modal
        mode='datetime'
        open={endTimeOpen}
        value={endTime}
        onConfirm={(endTime) => {
          setEndTimeOpen(false)
          setEndTime(endTime)
        }}
        onCancel={() => {
          setEndTimeOpen(false)
        }}
      />
      
      <Button size="$2" bg='$highlight1' onPress={handelNext}>Next</Button>
    </YStack>
    </>
  )
}

const Screen3 = ({ setScreen, formData, setFormData, submitRequest }) => {
  const [location, setLocation] = useState('')
  const { push } = useRouter();

  const handelNext = () => {
    setFormData({ ...formData, location})
    submitRequest({ ...formData, location})
    push('/discover')
  }

  return (
    <>
    <YStack bg='$background3' f={1} p="$4" space>
      <H4 color='$text1' ta="left">Event location</H4>
      <Input size="$4" onChangeText={(value) => setLocation(value)}></Input>
      <Button size="$2" bg='$highlight1' onPress={handelNext}>Create Event</Button>
    </YStack>
    </>
  )
}

export function CreateEventScreen() {
  const [screen, setScreen] = useState(1)
  const [formData, setFormData] = useState({})

  const session = useSession();
  const supabase = useSupabaseClient();
  
  const submitRequest = async (formData) => {
    const id = uuidv4();
    const { data, error } = await supabase
    .from('events')
    .insert([
      { id: id,
        title: formData.title, 
        description: formData.description,
        max_people: formData.maxPeople,
        current_people: 1,
        start_time: formData.startTime,
        end_time: formData.endTime,
        location: formData.location,
        tags: formData.tagIds,
      },
    ])
  }

  return (
    <>
      {screen === 1 && <Screen1 setScreen={setScreen} formData={formData} setFormData={setFormData} />}
      {screen === 2 && <Screen2 setScreen={setScreen} formData={formData} setFormData={setFormData} />}
      {screen === 3 && <Screen3 setScreen={setScreen} formData={formData} setFormData={setFormData} submitRequest={submitRequest} />}
    </>
  )
}