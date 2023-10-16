import { View, Text, Image, StyleSheet } from 'react-native';

const Promo = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/promo.jpg')}
          style={{ width: '100%', borderRadius: 16 }}
        />
        <View style={styles.containerText}>
          <Text style={styles.badge}>Акция</Text>
          <Text style={styles.text}>Покупай капучино бесплатно</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  containerText: {
    position: 'absolute',
    paddingVertical: 13,
    paddingLeft: 20,
  },
  badge: {
    alignSelf: 'flex-start',
    color: 'white',
    fontWeight: '600',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: '#ED5151',
    marginBottom: 8,
  },
  text: {
    color: 'white',
    fontSize: 27,
    fontWeight: '600',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
});

export default Promo;
