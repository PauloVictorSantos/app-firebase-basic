import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pontuacao: 0
    }
  }

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
    
  
  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      var pontos = snapshot.val();
      this.setState({ pontuacao: pontos });
    });

  }

  render() {
    let { pontuacao } = this.state;
    return (

      <View>
        <Text>Meu App</Text>
        <Button onPress={() => { this.salvarDados(); }} title="Salvar Dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />
        <Button onPress={() => { this.listarDados(); }} title="Salvar Dados"
          color="#841584"
          accessibilityLabel="Listar dados"
        />
        <Text>{pontuacao}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);

