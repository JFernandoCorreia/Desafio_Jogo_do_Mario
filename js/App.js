import React from 'react';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{
        uri: 'file:///E:/Workspace/Desafio_Mobile/Desafio_Jogo_do_Mario/play.html',
      }}
    />
  );
}
