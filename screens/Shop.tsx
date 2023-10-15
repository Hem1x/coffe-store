import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import UserData from '../components/UserData';
import Search from '../components/Search';
import { LinearGradient } from 'expo-linear-gradient';
import Promo from '../components/Promo';
import CoffeCarousel from '../components/CoffeCarousel';
import CoffeeList from '../components/CoffeeList';

const Shop = () => {
  const text = [
    1, 34, 23, 5, 64, 7, 56, 9870, 9, 89, 97, 886, 544, 3, 2, 2, 5436545,
    7, 54, 23, 534, 6, 56, 8, 67, 89, 679,
  ];

  return (
    <SafeAreaView style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
      <ScrollView>
        <LinearGradient
          colors={['#242424', '#131313']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingTop: 40,
            }}>
            <UserData />
            <Search />
          </View>
        </LinearGradient>

        <View
          style={{
            marginTop: -70,
          }}>
          <Promo />
          <CoffeCarousel />
          <CoffeeList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
