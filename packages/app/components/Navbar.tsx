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
  } from 'tamagui';

import { ContainerLarge } from '../components/Container';
import { NavbarProps } from '../components/NavbarProps';
import { ChevronLeft, Swords, ImagePlus, Grid, Edit, Menu, User } from '@tamagui/lucide-icons'

export function Navbar() {
    const session = useSession();
    const supabase = useSupabaseClient();
    const { push } = useRouter();

    return (
        <XStack
          bc='$background3'
          height='$controlbarHeight'
          zi={50000}
          // pos="fixed"
          bottom={10}
          // my={isScrolled ? -2 : 0}
          left={0}
          right={0}
          // elevation={isScrolled ? 0  : '$1'}
          // py={isScrolled ? '$0' : '$2'}
          py='$2'
        >
          <ContainerLarge>  
            <NavbarContents floating loggedin={true}/>
          {/* { session && session.user ? <NavbarContents floating loggedin={true}/> : <NavbarContents floating loggedin={false}/> } */}
          </ContainerLarge> 
        </XStack>
    )
}

export function NavbarContents(props: NavbarProps) {
  const isDiscover = true;
  const isCalendar = false;
  const isCommunity = false;
  const isCreate = false;
  const isProfile = false;

  const discoverLinkProps = useLink({
    href: '/discover',
  })

  const calendarLinkProps = useLink({
    href: '/calendar'
  })

  const communityLinkProps = useLink({
    href: '/community',
  })

  const createLinkProps = useLink({
    href: '/create_event',
  })

  const profileLinkProps =useLink({
    href: '/profile',
  })

  return (
    <XStack jc="space-evenly">
      <Button  bc='$background1' {...discoverLinkProps} icon={isDiscover ? <Swords/> : <Swords/>}/>
      <Button  bc='$background1' {...calendarLinkProps} icon={isCalendar ? <Swords/> : <Swords/>}/>
      <Button  bc='$background1' {...communityLinkProps} icon={isCommunity ? <Swords/> : <Swords/>}/>
      <Button  bc='$background1' {...createLinkProps} icon={isCreate ? <Swords/> : <Swords/>}/>
      <Button  bc='$background1' {...profileLinkProps} icon={isProfile ? <Swords/> : <Swords/>}/>
    </XStack>
  )
}