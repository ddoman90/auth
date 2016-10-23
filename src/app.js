import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBn_pwnulkRdR-UjiHJ4ZiYBQw9uuzzUJc",
      authDomain: "authentication-e35ab.firebaseapp.com",
      databaseURL: "https://authentication-e35ab.firebaseio.com",
      storageBucket: "authentication-e35ab.appspot.com",
      messagingSenderId: "118740226729"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
