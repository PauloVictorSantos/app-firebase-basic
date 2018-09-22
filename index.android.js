import React, { Component } from 'react';
import { AppRegistry, View, Text, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

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

  cadastrarUsuario() {
    var email = "paulovictor494@gmail.com";
    var senha = "paulovictor";

    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(
      email, senha
    ).catch((error) => {
      var mensagem = "";
      if (error.code == "auth/weak-password") {
        mensagem = "A senha precisa ter no mínimo 6 caracteres";
        Alert.alert("Aviso:", mensagem);
      }

    }
    )
  }

  logOutUsuario(){
    const usuario =firebase.auth();
    usuario.signOut();
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
    /* const usuarioAtual = usuario.currentUser;
     if(usuarioAtual){
       Alert.alert("Aviso:","Usuario Logado!");
     }else{
       Alert.alert("Aviso:","Usuario não está Logado!");
     }
     */

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          Alert.alert("Aviso:", "Usuario Logado!");
        } else {
          Alert.alert("Aviso:", "Usuario não está Logado!");
        }
      }
    );
  }

  logarUsuario(){
    const usuario = firebase.auth();
    var email = "paulovictor494@gmail.com";
    var senha = "paulovictor";

    usuario.signInWithEmailAndPassword(email, senha)
      .catch((error) => {
        alert(error.mensagem);
      }
    );


  }

  render() {
    return (
      <View>
        <Text>Meu App</Text>
        <Button onPress={() => { this.cadastrarUsuario(); }} title="Salvar Dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />

        <Button onPress={() => { this.verificarUsuarioLogado(); }} title="Verifica Usuario"
          color="#841584"
          accessibilityLabel="Verifica Usuario"
        />

         <Button onPress={() => { this.logOutUsuario(); }} title="Sigh Out"
          color="#841584"
          accessibilityLabel="Sair Usuario"
        />

        <Button onPress={() => { this.logarUsuario(); }}
         title="LogIn"
          color="#841584"
          accessibilityLabel="Logar"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);

