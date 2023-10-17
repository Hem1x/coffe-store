import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const router = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#C67C4E"
          />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        {router.name === 'CoffeeDetails' ? (
          <TouchableOpacity>
            <Feather name="heart" size={24} color="#2F2D2C" />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: -20,
  },
});

export default Header;
