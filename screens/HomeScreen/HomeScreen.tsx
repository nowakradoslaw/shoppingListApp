import { View, Text } from 'react-native';

//styles
import { styles } from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
