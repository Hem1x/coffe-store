import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Feather
          name="search"
          size={20}
          color="white"
          style={{ marginRight: 12 }}
        />
        <TextInput
          placeholder="Найти кофе"
          maxLength={25}
          placeholderTextColor="#989898"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.btnFilter}>
        <Entypo name="sound-mix" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    backgroundColor: '#313131',
    borderRadius: 16,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  input: {
    color: 'white',
  },
  btnFilter: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#C67C4E',
  },
});
export default Search;
