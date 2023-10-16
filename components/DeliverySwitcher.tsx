import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface DeliverySwitcherProps {
  isDeliver: boolean;
  setIsDeliver: (state: boolean) => void;
}

const DeliverySwitcher: React.FC<DeliverySwitcherProps> = ({
  isDeliver,
  setIsDeliver,
}) => {
  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity onPress={() => setIsDeliver(false)}>
        <Text
          style={[
            styles.switchText,
            {
              color: !isDeliver ? '#ffffff' : '#2F2D2C',
              backgroundColor: !isDeliver ? '#bb6530' : 'transparent',
            },
          ]}>
          Cамовывоз
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsDeliver(true)}>
        <Text
          style={[
            styles.switchText,
            {
              color: isDeliver ? '#ffffff' : '#2F2D2C',
              backgroundColor: isDeliver ? '#bb6530' : 'transparent',
            },
          ]}>
          Доставка
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    gap: 10,
  },
  switchText: {
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DeliverySwitcher;
