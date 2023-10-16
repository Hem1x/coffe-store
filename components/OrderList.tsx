import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { coffeeData } from '../mock/data';
import { AntDesign } from '@expo/vector-icons';

const OrderList = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      {coffeeData.map((item, index) => (
        <View
          key={item.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: index === coffeeData.length - 1 ? 0 : 20,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: item.imageURL }}
              style={{
                width: 54,
                height: 54,
                borderRadius: 12,
                marginRight: 12,
              }}
            />
            <View>
              <Text
                style={{
                  color: '#2F2D2C',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                {item.category}
              </Text>
              <Text
                style={{
                  color: '#9B9B9B',
                  fontSize: 12,
                }}>
                {item.name}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 14,
            }}>
            <TouchableOpacity style={{}}>
              <AntDesign name="minuscircleo" size={20} color="#AAADB0" />
            </TouchableOpacity>

            <Text style={{ fontSize: 20 }}>1</Text>

            <TouchableOpacity>
              <AntDesign name="pluscircleo" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default OrderList;
