import { VStack, Icon } from 'native-base';
import { Octicons } from '@expo/vector-icons';

import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export function Polls() {
  const navigation = useNavigation();

  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title='Meus bolões' />
      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor='gray.600'
        pb={4}
        mb={4}
      >
        <Button
          title='Buscar bolão por código'
          leftIcon={
            <Icon as={Octicons} name='search' color='black' size='md' />
          }
          onPress={() => navigation.navigate('find')}
        />
      </VStack>
    </VStack>
  );
}
