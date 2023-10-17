import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ICoffeeItem } from '../models';
import { AntDesign } from '@expo/vector-icons';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface CoffeeItemProps {
  details: ICoffeeItem;
}

const CoffeeItem: React.FC<CoffeeItemProps> = ({ details }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.dispatch(
          CommonActions.navigate('CoffeeDetails', {
            details,
          }),
        )
      }
      style={{
        marginBottom: 16,
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 4,
          left: 4,
          zIndex: 10,
          paddingVertical: 6,
          paddingRight: 10,
          paddingLeft: 5,
          borderTopLeftRadius: 16,
          borderBottomRightRadius: 20,
          backgroundColor: 'rgba(100,100,100,0.5)',
        }}>
        <AntDesign
          name="star"
          size={10}
          color="#FBBE21"
          style={{ marginTop: 1 }}
        />
        <Text style={{ color: 'white', fontWeight: '600', marginLeft: 3 }}>
          {details.rating}
        </Text>
      </View>

      <Image
        source={{
          uri: details.imageURL,
        }}
        style={{
          width: 135,
          height: 130,
          borderRadius: 16,
        }}
      />

      <View style={{ padding: 12 }}>
        <Text style={{ color: '#2F2D2C', fontWeight: '600' }}>
          {details.category}
        </Text>
        <Text
          style={{
            marginBottom: 8,
            color: '#9B9B9B',
            fontWeight: '400',
          }}>
          {details.name}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#2F4B4E',
              fontWeight: '600',
              fontSize: 18,
            }}>
            {details.price} ₽
          </Text>
          <TouchableOpacity
            style={{
              padding: 11,
              backgroundColor: '#C67C4E',
              borderRadius: 10,
            }}>
            <AntDesign name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeItem;
