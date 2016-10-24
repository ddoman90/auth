import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBn_pwnulkRdR-UjiHJ4ZiYBQw9uuzzUJc",
      authDomain: "authentication-e35ab.firebaseapp.com",
      databaseURL: "https://authentication-e35ab.firebaseio.com",
      storageBucket: "authentication-e35ab.appspot.com",
      messagingSenderId: "118740226729"
    });

    // this function will be called, if the user state changes
    // user argument is undefined, if sign out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      }
      else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={ () => firebase.auth().signOut() }>Log Out</Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
