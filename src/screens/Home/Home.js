import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  console.log('navigation ????', navigation);

  const [name, setName] = useState('');

  const handleChangeLanguage = () => {
    setName('Hello this is my name');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello Welcome to HOme Page</Text>
      <TouchableOpacity onPress={handleChangeLanguage}>
        <Text>Change Language Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
