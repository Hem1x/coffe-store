import { View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import UserData from '../components/UserData';
import Search from '../components/Search';
import { LinearGradient } from 'expo-linear-gradient';
import Promo from '../components/Promo';
import CoffeCarousel from '../components/CoffeCarousel';
import CoffeeList from '../components/CoffeeList';

const Shop = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
      <ScrollView>
        <LinearGradient
          colors={['#242424', '#131313']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}>
          <View
            style={{
              paddingHorizontal: 20,
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
