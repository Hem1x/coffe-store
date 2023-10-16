import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import DeliverySwitcher from '../components/DeliverySwitcher';

const Order = () => {
  const [isDeliver, setIsDeliver] = useState(false);
  const [address, setAddress] = useState('');
  const [isChanging, setIsChanging] = useState(false);

  return (
    <View>
      <Header title="Заказ" />
      <DeliverySwitcher
        isDeliver={isDeliver}
        setIsDeliver={setIsDeliver}
      />
      <View style={styles.addressContainer}>
        {isDeliver ? (
          <View>
            <Text style={styles.title}>Адрес Доставки</Text>
            {isChanging ? (
              <View
                style={[
                  styles.address,
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  },
                ]}>
                <TextInput
                  value={address}
                  style={{ maxWidth: '70%' }}
                  multiline
                  onChangeText={setAddress}
                  placeholder="Введите адрес доставки"
                />
                <TouchableOpacity onPress={() => setIsChanging(false)}>
                  <Text style={{ color: '#C67C4E' }}>Сохранить</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={[styles.address]}>
                {address.length === 0 ? 'Нет данных' : address}
              </Text>
            )}
            <TouchableOpacity
              onPress={() => setIsChanging(true)}
              style={{
                flexDirection: 'row',
                paddingVertical: 6,
                paddingHorizontal: 13,
                alignSelf: 'flex-start',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#c5c5c5',
                borderRadius: 16,
              }}>
              <Feather name="edit" size={14} color="#303336" />
              <Text style={{ color: '#303336', marginLeft: 4 }}>
                Изменить адрес
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Адрес Самовывоза</Text>
            <Text style={[styles.address]}>
              Ходынский б-р, д. 4, Москва, 125252
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    paddingHorizontal: 30,
    marginTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2D2C',
    marginBottom: 10,
  },
  address: {
    marginBottom: 16,
    color: '#808080',
  },
});

export default Order;
