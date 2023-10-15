import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import UserData from '../components/UserData';
import Search from '../components/Search';
import { LinearGradient } from 'expo-linear-gradient';
import Promo from '../components/Promo';
import CoffeCarousel from '../components/CoffeCarousel';

const Shop = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
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
      </View>
    </SafeAreaView>
  );
};

export default Shop;
