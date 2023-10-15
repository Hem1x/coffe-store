import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const UserData = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
        }}>
        <Image
          source={require('../assets/avatar.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>alex</Text>
      </View>

      <TouchableOpacity style={styles.btnExit}>
        <Text style={styles.btnExitText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 14,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
  },
  btnExit: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#4e4e4e',
    borderRadius: 10,
  },
  btnExitText: {
    color: 'white',
  },
});

export default UserData;
