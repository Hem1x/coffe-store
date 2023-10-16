import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import DeliverySwitcher from '../components/DeliverySwitcher';
import AddressBlock from '../components/AddressBlock';
import OrderList from '../components/OrderList';
import PaymentSummary from '../components/PaymentSummary';

const Order = () => {
  const [isDeliver, setIsDeliver] = useState(false);
  const [address, setAddress] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header title="Заказ" />
        <DeliverySwitcher
          isDeliver={isDeliver}
          setIsDeliver={setIsDeliver}
        />
        <AddressBlock
          address={address}
          setAddress={setAddress}
          isDeliver={isDeliver}
        />
        <View
          style={{
            height: 1,
            backgroundColor: '#dbdbdb',
            margin: 20,
          }}
        />
        <OrderList />
        <View
          style={{
            height: 3,
            backgroundColor: '#dbdbdb',
            marginVertical: 20,
          }}
        />
        <PaymentSummary />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Order;
