import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyA2HdUPNlvyTZk6FTv3_0EbHrPZtr751jo",
      authDomain: "configuraacaofirebasereact.firebaseapp.com",
      databaseURL: "https://configuraacaofirebasereact.firebaseio.com",
      projectId: "configuraacaofirebasereact",
      storageBucket: "configuraacaofirebasereact.appspot.com",
      messagingSenderId: "270026253249"
    };
    firebase.initializeApp(config);
  }

  salvarDados() {
    var database = firebase.database();
    database.ref("pontuacao").set("100");
  }

  render() {
    return (
      <View>
        <Text>Meu App</Text>
        <Button onPress={() => { this.salvarDados(); }} title="Salvar Dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);

