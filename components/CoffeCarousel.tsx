import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

const CoffeCarousel = () => {
  const [selectedCoffee, selectCoffee] = useState(0);
  const coffies = ['Капучино', 'Мокачино', 'Латте', 'Американо', 'Раф'];

  return (
    <View>
      <FlatList
        horizontal
        data={coffies}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => selectCoffee(index)}
            style={[
              styles.coffeeContainer,
              {
                backgroundColor:
                  selectedCoffee === index ? '#C67C4E' : 'white',
                marginLeft: index === 0 ? 30 : 0,
                marginRight: index === coffies.length - 1 ? 30 : 0,
              },
            ]}>
            <Text
              style={{
                color: selectedCoffee === index ? 'white' : '#2F4B4E',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coffeeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
});
export default CoffeCarousel;
