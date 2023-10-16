import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import FavoriteList from '../components/FavoriteList';

const Favorite = () => {
  return (
    <View>
      <Header title="Избранное" />
      <FavoriteList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Favorite;
