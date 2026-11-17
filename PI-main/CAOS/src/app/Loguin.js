import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Button } from '../components/loguin';
import { Block } from '../components/block';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 700,
    height: 350,
    resizeMode: 'center',
  },

  inputBackground: {
    backgroundColor: 'argba(255, 255, 255, 0.66)',
    borderRadius: 60,
    width: 546,
    paddingLeft: 20,
    paddingRight: 55,
  },
  input: {
    fontFamily: 'Nova Flat',
    fontSize: 18,
    textAlign: 'left',
    justifyContent: 'justify',
  },

  ButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Nova Flat',
    fontSize: 20,
    fontWeight: 'regular ',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
});

export default function Loguin() {
  return (
    <View style={styles.background}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        />
      </View>

      <View
        style={styles.inputBackground}
      >
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="argba(0, 0, 0, 0.66)"
        />
      </View>

      <View>
        <Block></Block>
      </View>

      <View>
        <Button></Button>
        <Text
          style={styles.ButtonText}
        >
          Start System
        </Text>
      </View>

      <View>
        <StatusBar hidden={true} />
      </View>
    </View>
  );
};