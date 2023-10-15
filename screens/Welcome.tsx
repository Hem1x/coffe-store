import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/startScreen.jpg')} />
      <ImageBackground
        source={require('../assets/bgImage.png')}
        resizeMode="cover"
        style={styles.bgImage}>
        <Text style={styles.title}>Ради кофе можно пойти на всё</Text>
        <Text style={styles.subTitle}>
          Лучшее зерно, лучшая обжарка, мощный вкус.
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('shop')}>
          <Text style={styles.btnText}>Попробовать</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    marginTop: -100,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '600',
    color: 'white',
    marginBottom: 15,
  },
  subTitle: {
    color: '#A9A9A9',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: '#C67C4E',
    paddingVertical: 21,
    borderRadius: 16,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Welcome;
