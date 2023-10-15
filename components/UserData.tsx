import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const UserData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>alex</Text>
      <Image
        source={require('../assets/avatar.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 14,
  },
  text: {
    fontSize: 20,
  },
});

export default UserData;
