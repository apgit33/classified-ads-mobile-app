import React from 'react';
import { View, Text } from 'react-native';

const Test = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LogindScreen</Text>
        <Text>This is profile</Text>
    </View>
  );
}

export default Test;