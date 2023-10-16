import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { coffeeData } from '../mock/data';

const FavoriteList = () => {
  return (
    <FlatList
      data={coffeeData}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
          <Image
            source={{ uri: item.imageURL }}
            style={styles.itemImage}
          />
          <View style={styles.itemText}>
            <Text
              style={{
                color: '#2F2D2C',
                fontWeight: '600',
                fontSize: 18,
              }}>
              {item.category}
            </Text>
            <Text
              style={{
                color: '#9B9B9B',
                fontWeight: '400',
                fontSize: 14,
                marginBottom: 5,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: '#2F4B4E',
                fontWeight: '700',
              }}>
              {item.price} ₽
            </Text>
          </View>

          <TouchableOpacity style={styles.itemBtn}>
            <Text style={styles.itemBtnText}>Убрать</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  itemText: {
    justifyContent: 'center',
  },
  itemBtn: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  itemBtnText: {
    color: 'red',
  },
});

export default FavoriteList;
