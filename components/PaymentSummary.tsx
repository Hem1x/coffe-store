import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const PaymentSummary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Итого</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Сумма заказа</Text>
          <Text style={styles.rowText}>4.3 $</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Доставка</Text>
          <Text style={styles.rowText}>4.3 $</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#dbdbdb',
            marginVertical: 5,
          }}
        />
        <View style={styles.row}>
          <Text style={styles.rowTitle}>К оплате</Text>
          <Text style={styles.rowText}>8.6 $</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Заказать</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#2F2D2C',
    fontWeight: '600',
    marginBottom: 12,
  },
  table: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowTitle: {
    fontSize: 16,
    color: '#2F2D2C',
  },
  rowText: {
    fontSize: 16,
    color: '#2F2D2C',
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#C67C4E',
    paddingVertical: 21,
    marginTop: 30,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PaymentSummary;
