
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { LoginContext } from "../routes/route";
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Login() {

  const loginContext = useContext(LoginContext);

  const [login, setLogin] = useState({});
  const [senha, setSenha] = useState({});
  const [logado, setLogado] = useState(false);

  const handleSubmit = async () => {
    setLogado(true);

    if (login === 'luana' && senha === '123') {
      loginContext.setLogin(login);
    } else {
      Alert.alert(
        'Credenciais não encontradas',
        'Por favor, digite seus dados corretamente!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  const onChangeText = (prop, value) => {
    if (prop === 'login') {
      setLogin(value);
    }
    if (prop === 'pass') {
      setSenha(value);
    }
  };

  return (
    <View style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
      }}>
      <Image
        // eslint-disable-next-line global-require
        source={require('../../assets/icons/icon.png')}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'contain',
        }}
      />
    </View>
    <View style={{flex: 2}}>
      <KeyboardAvoidingView
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        behavior="height">
        <View style={styles.inputText}>
        <Icon name="user" size={25} color="#900" />
          <TextInput
            placeholder="Login"
            style={{
              width: '100%',
              height: '100%',
              color: 'rgba(124,47,94,0.8)',
            }}
            placeholderTextColor="rgba(124,47,94,0.8)"
            onChangeText={(text) => onChangeText('login', text)}
          />
        </View>
        <View style={styles.inputText}>
                <Icon name="lock" size={25} color="#900" />

          <TextInput
            placeholder="Senha"
            style={{
              width: '100%',
              height: '100%',
              color: 'rgba(124,47,94,0.8)',
            }}
            secureTextEntry={true}
            placeholderTextColor="rgba(124,47,94,0.8)"
            onChangeText={(text) => onChangeText('pass', text)}
          />
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 40,
        }}>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 100,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  logo: {
    width: 250,
    height: 250,
  },

  input: {
    padding: 10,
    width: 300,
    margin: 5,
    backgroundColor: '#f4f4f4',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    borderColor: 'rgba(124,47,94,1)',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn: {
    width: 200,
    height: 42,
    backgroundColor: 'rgba(124,47,94,0.6)',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderWidth: wp('0.3%'),
    borderColor: 'rgba(124,47,94,1)',
    borderRadius: 20,
    paddingHorizontal: wp('5%'),
    height: hp('7%'),
    width: wp('80%'),
    marginBottom: hp('2%'),

    flexDirection: 'row',
    alignItems: 'center',
  },
});