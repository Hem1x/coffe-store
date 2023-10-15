import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import UserData from '../components/UserData';
import Search from '../components/Search';

const Shop = () => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 30,
        paddingTop: 40,
      }}>
      <UserData />
      <Search />
    </SafeAreaView>
  );
};

export default Shop;
