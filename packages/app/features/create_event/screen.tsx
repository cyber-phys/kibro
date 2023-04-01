import { Anchor, Button, H1, H4, Input,TextArea,Paragraph, Separator, Sheet, XStack, YStack, Slider, H3 } from '@my/ui'
import React, { useState, useRef } from 'react'
import { useLink } from 'solito/link'
import DatePicker from '@react-native-community/datetimepicker';

import { Navbar } from 'app/components/Navbar'

const Screen1 = ({ setScreen, formData, setFormData }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState(0)

  const handelNext = () => {
    setFormData({title, description, tags})
    setScreen(2)
  }

  return (
    <>
    <YStack bg='$background3' f={1} p="$4" space>
      <H4 color='$text1' ta="left">Hangout Title</H4>
      <Input size="$4"></Input>

      <H4 color='$text1' ta="left">Hangout description</H4>
      <TextArea mih={140} placeholder="Enter your details..." numberOfLines={4} />
      
      <H4 color='$text1' ta="left">Select tags</H4>

      <Button size="$2" bg='$highlight1' onPress={handelNext}>Next</Button>
    </YStack>
    <Navbar/>
    </>
  )
}

const Screen2 = ({ setScreen, formData, setFormData }) => {
  const [numPeople, setNumPeople] = useState(0)
  // const numPeople = useRef(0);
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())

  const [startTimeOpen, setStartTimeOpen] = useState(false)
  const [endTimeOpen, setEndTimeOpen] = useState(false)

  const handelNext = () => {
    setFormData({ ...formData, numPeople, startTime, endTime})
    setScreen(3)
  }

  const handleNumPeopleChange = (value) => {
    // numPeople.current = value;
    setNumPeople(value)
  };

  return (
    <>
    <YStack bg='$background3' f={1} p="$4" space>
      <H4 color='$text1' ta="left">With how many people?</H4>
      <H4 color='$text1' ta="left">{numPeople}</H4>
      <Slider defaultValue={[50]} max={100} step={1} onValueChange={handleNumPeopleChange}>
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
      
      <Button size="$2" bg='$highlight1' onPress={handelNext}>Next</Button>
    </YStack>
    </>
  )
}

const Screen3 = ({ setScreen, formData, setFormData, submitRequest }) => {
  const [location, setLocation] = useState('')

  const handelNext = () => {
    setFormData({ ...formData, location})
    submitRequest({ ...formData, location})
    setScreen(4)
  }

  return (
    <>
    <YStack bg='$background3' f={1} p="$4" space>
      <H4 color='$text1' ta="left">Event location</H4>
      <Input size="$4"></Input>

      <Button size="$2" bg='$highlight1' onPress={handelNext}>Create Event</Button>
    </YStack>
    </>
  )
}

export function CreateEventScreen() {
  const [screen, setScreen] = useState(1)
  const [formData, setFormData] = useState({})
  
  const submitRequest = async (formData) => {
  }

  return (
    <>
      {screen === 1 && <Screen1 setScreen={setScreen} formData={formData} setFormData={setFormData} />}
      {screen === 2 && <Screen2 setScreen={setScreen} formData={formData} setFormData={setFormData} />}
      {screen === 3 && <Screen3 setScreen={setScreen} formData={formData} setFormData={setFormData} submitRequest={submitRequest} />}
    </>
  )
}