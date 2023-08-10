import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { loginbg } from "../assests/assests";

const LoginScreen = ({ navigation, onPress }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');

  const userValidation = () => {
    if (state.userName == "") {
      setState({ userError: "Enter a Username, can't be empty" })
    } else {
      setState({ userError: '' })
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={loginbg} style={{ flex: 1 }}>
      {/* <SvgUri 
          height="200"
          width="200"
          source={loginbgsvg}
        /> */}
        <View style={{flex:5/10, }}>
        <Text style={{ alignSelf: 'center', margin: 40, fontWeight: 'bold', fontSize: 20 }}>Login screen</Text>
        </View>
        <View style={{flex:9/10,}}>
        <Text style={{ marginLeft: 30, margin: 5, color: '#243B97', fontWeight: '700', fontSize: 15 }}>Username</Text>
          <TextInput
            style={{ backgroundColor: '#64B9FB', padding: 20, width: '80%', alignSelf: 'center', margin: 10, borderRadius: 10 }}
            onChangeText={(text) => { setUserName(text) }}
            value={userName}
            placeholder="Username"
            placeholderTextColor='#fff'
          />
          <Text style={{ marginLeft: 30, margin: 5, color: '#243B97', fontWeight: '700', fontSize: 15 }}>Password</Text>
          <TextInput
            style={{ backgroundColor: '#64B9FB', padding: 20, width: '80%', alignSelf: 'center', margin: 10, borderRadius: 10 }}
            onChangeText={(text) => { setPassword(text) }}
            value={password}
            placeholder="Password"
            placeholderTextColor='#fff'
            secureTextEntry={true}
          />
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ justifyContent: 'center', alignSelf: 'flex-end', marginTop: 30, backgroundColor: '#243B97', padding: 45, borderRadius: 55, marginRight: 40 }} >
            <Text style={{ right: -40, position: 'absolute', alignSelf: 'flex-end', marginRight: 70, fontSize: 40, color: 'black', fontWeight: '600' }}>Lo<Text style={{ alignSelf: 'flex-end', fontSize: 40, color: '#fff', fontWeight: '600' }}>gin</Text></Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1/10, flexDirection: 'row', justifyContent: 'space-between',}}>
          <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>

            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 20, textDecorationLine: 'underline', marginLeft: 15 }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 20, textDecorationLine: 'underline', marginRight: 10 }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
export default LoginScreen;