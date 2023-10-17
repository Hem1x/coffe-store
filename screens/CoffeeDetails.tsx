import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ICoffeeItem } from '../models';
import Header from '../components/Header';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const sizes = [150, 300, 500];

const CoffeeDetails = () => {
  const params = useRoute();
  const [details, setDetails] = useState<ICoffeeItem | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (params) {
      setDetails(params.params?.details);
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header title={`${details?.category} ${details?.name}`} />
        <View style={styles.container}>
          {details && (
            <>
              <Image
                source={{ uri: details.imageURL }}
                style={styles.image}
              />
              <View>
                <Text style={styles.title}>{details.category}</Text>
                <Text style={styles.subTitle}>{details.name}</Text>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign name="star" size={20} color="#FBBE21" />
                  <Text style={styles.ratingText}>{details.rating}</Text>
                </View>
              </View>

              <View style={styles.horizonalLine} />

              <View style={{ marginBottom: 20 }}>
                <Text style={styles.descTitle}>Описание</Text>
                <Text style={[styles.descText]}>
                  {showMore
                    ? details.description
                    : details.description.slice(0, 130)}

                  <Text
                    onPress={() => setShowMore(!showMore)}
                    style={{
                      color: '#C67C4E',
                      fontWeight: '600',
                      fontSize: 14,
                    }}>
                    {showMore ? ' скрыть' : '.. ещё'}
                  </Text>
                </Text>
              </View>

              <View>
                <Text style={styles.descTitle}>Размер (мл)</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 15,
                    marginTop: 15,
                  }}>
                  {sizes.map((item, index) => (
                    <TouchableOpacity
                      key={item}
                      style={[
                        styles.sizeBtn,
                        {
                          backgroundColor:
                            index === size ? '#FFF5EE' : 'transparent',
                          borderColor:
                            index === size ? '#C67C4E' : '#cccbcb',
                        },
                      ]}
                      onPress={() => setSize(index)}>
                      <Text
                        style={[
                          styles.sizeBtnText,
                          {
                            color: index === size ? '#C67C4E' : '#2F2D2C',
                          },
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 20,
                  gap: 40,
                }}>
                <View>
                  <Text style={{ color: '#747474' }}>Цена</Text>
                  <Text
                    style={{
                      color: '#C67C4E',
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    {details.price} ₽
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: '#C67C4E',
                    paddingVertical: 21,
                    borderRadius: 16,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Купить
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    color: '#2F2D2C',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 3,
  },
  subTitle: {
    color: '#9B9B9B',
    fontSize: 15,
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 18,
    marginBottom: 1,
    marginLeft: 4,
    fontWeight: '700',
    color: '#2F2D2C',
  },
  horizonalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#cccccc',
    marginVertical: 20,
  },
  descTitle: {
    fontSize: 18,
    color: '#2F2D2C',
    fontWeight: '600',
  },
  descText: {
    color: '#8f8f8f',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 10,
  },
  sizeBtn: {
    paddingVertical: 10,
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
  },
  sizeBtnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2F2D2C',
  },
});

export default CoffeeDetails;
