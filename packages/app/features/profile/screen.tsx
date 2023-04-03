import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Text } from '@my/ui'
import React, { useEffect, useState } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import { Navbar } from 'app/components/Navbar'
import { UserInfoEdit } from 'app/components/UserInfoEditor'

import { UserType } from '../../../../types/user';
import { Alert } from 'react-native';

export function ProfileScreen() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const session = useSession();
  const supabase = useSupabaseClient();

  const getUser = async () => {
    try {
      const { data: fetchedUser, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', session?.user.id)
        .single();
  
      if (userError) throw userError;
  
      setUser(fetchedUser);
    } catch (err) {
      console.error('Error fetching user:', err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, [session, supabase]);

  return (
    <>
    <YStack bg='$background3' f={1} jc='space-around' ai="center" p="$4" space>
      <Text>The following information may be changed once every 90 days. More than three changes may prompt a review of your account.</Text>
      {!isLoading && <UserInfoEdit user={user}/>}
    </YStack>
    <Navbar/>
    </>
  )
}