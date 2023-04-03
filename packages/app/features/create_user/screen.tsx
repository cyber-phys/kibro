import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack, Spinner, Text, H3, H4 } from '@my/ui'
import { useRouter } from 'solito/router';
import { v4 as uuidv4 } from 'uuid'
import React, { useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import { UserInfoEdit } from 'app/components/UserInfoEditor'

import { UserType } from '../../../../types/user'

export function CreateUserScreen() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const session = useSession();
  const supabase = useSupabaseClient();

  const { push } = useRouter();

  const newUser: UserType = {
    id: session?.user.id,
    first_name: '',
    birthday: new Date(),
    gender: '',
    home_city: '',
  };

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
  }, [supabase, session]);

  useEffect(() => {
    if (user) {
      push('/discover');
    }
  }, [user]);

  return (
    <>
    <YStack bg='$background3' f={1} jc="center" ai="center" p="$4" space>
      {!isLoading && !user && <H4 alignSelf='flex-start'>Tell us about yourself</H4>}
      {!isLoading && !user && <Text alignSelf='flex-start'>Please note that this information may only be changed once every six months.</Text>}
      {!isLoading && !user && <UserInfoEdit user={newUser} />}
    </YStack>
    </>
  )
}