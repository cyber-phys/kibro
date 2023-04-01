import { Anchor, Button, H1, H4, Input,TextArea,Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

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
    </>
  )
}

const Screen2 = ({ setScreen, formData, setFormData }) => {
  const [numPeople, setNumPeople] = useState(0)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const handelNext = () => {
    setFormData({ ...formData, numPeople, startTime, endTime})
    setScreen(3)
  }

  return (
    <>
    <YStack bg='$background3' f={1} p="$4" space>
      <H4 color='$text1' ta="left">With how many people?</H4>
      <Input size="$4"></Input>

      <H4 color='$text1' ta="left">Hangout description</H4>
      <TextArea mih={140} placeholder="Enter your details..." numberOfLines={4} />
      
      <H4 color='$text1' ta="left">Select tags</H4>

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

export function createEventScreen() {
  const [screen, setScreen] = useState(1)
  const [formData, setFormData] = useState({})
  
  const submitRequest = async (formData) => {
    const { data, error } = await supabase
    .from('events')
    .insert([
      { title: formData.title, 
        description: 'otherValue. },
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