import React, { useState, useContext } from 'react';
import { useLink } from 'solito/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'solito/router';
import {
    Button,
    Input, 
    Paragraph,
    ParagraphProps,
    Popover,
    Separator,
    Text,
    Label,
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
    H6
  } from 'tamagui';
import { ChevronLeft, Swords, ImagePlus, Grid, Edit, Menu, User } from '@tamagui/lucide-icons'
import { Check } from '@tamagui/lucide-icons'
import { Checkbox } from 'tamagui'
import DatePicker from '@react-native-community/datetimepicker';
import { Alert } from 'react-native';

import { formatBirthDay } from './DateTools';
import { ContainerXL} from '../components/Container';
import { UserType } from '../../../types/user';
import { GenderType } from '../../../types/gender';

export function UserInfoEdit({ user }: { user: UserType}) {
    const [firstName, setFirstName] = useState(user.first_name);
    const [birthDate, setBirthDate] = useState(new Date(Date.parse(user.birthday)));
    const [gender, setGender] = useState<GenderType>(user.gender);
    const [homeCity, setHomeCity] = useState(user.home_city);
    const [dateOpen, setDateOpen] = useState(false)

    const { push } = useRouter();

    const session = useSession();
    const supabase = useSupabaseClient();

    const handleSubmit = async () => {
        try {
          const { error } = await supabase
            .from('users')
            .upsert({
              id: user.id,
              first_name: firstName,
              birthday: birthDate,
              gender,
              home_city: homeCity,
            });
    
          if (error) throw error;

          push('/discover')
        } catch (err) {
          console.error('Error updating user:', err);
          alert('Error updating user');
        }
    };

    return (
        <>
        <ContainerXL f={1} jc='space-around'>
            <YStack>
            <H4 color='$text1' ta="left">First Name</H4>
            <Input size="$4" placeholder={user.first_name} onChangeText={(value) => setFirstName(value)}></Input>
            </YStack>
            
            <XStack>
            <H4 color='$text1' paddingRight="$4">Birth Day</H4>
            <DatePicker
            modal
            mode='date'
            open={dateOpen}
            value={birthDate}
            onConfirm={(birthDate) => {
                setDateOpen(false)
                setBirthDate(birthDate)
            }}
            onCancel={() => {
                setDateOpen(false)
            }}
            />
            </XStack>

            <YStack>
            <H4 color='$text1' ta="left">Gender</H4>
            <XStack>
            <YStack f={1}>
            <Checkbox size="$4" onCheckedChange={() => setGender('female')} checked={gender === 'female'}>
                <Checkbox.Indicator>
                    <Check />
                </Checkbox.Indicator>
            </Checkbox>
            <Label>
                Female
            </Label>
            </YStack>

            <YStack f={1}>
            <Checkbox size="$4" onCheckedChange={() => setGender('male')} checked={gender === 'male'}>
                <Checkbox.Indicator>
                    <Check />
                </Checkbox.Indicator>
            </Checkbox>
            <Label>
                Male
            </Label>
            </YStack>

            <YStack f={1}>
            <Checkbox size="$4" onCheckedChange={() => setGender('non-binary')} checked={gender === 'non-binary'}>
                <Checkbox.Indicator>
                    <Check />
                </Checkbox.Indicator>
            </Checkbox>
            <Label>
                Non-Binary
            </Label>
            </YStack>
            </XStack>
            </YStack>

            <YStack>
            <H4 color='$text1' ta="left">Home City</H4>
            <Input size="$4" placeholder={user.home_city} onChangeText={(value) => setHomeCity(value)}></Input>
            </YStack>

            <Button color='$background1' bg='$primary1' onPress={handleSubmit}>Submit</Button>
        </ContainerXL>
        </>
    );  
}