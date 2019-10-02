/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import 'babel-polyfill'
import React from 'react'
import { Dimensions, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import Message from './src/Message';
import Welcome from './src/Welcome';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default class App extends React.Component {

  render(){
    return (
       <ScrollView>
         <Text style={{textAlign:' center', fontSize: 24, fontWeight: 'bold'}}>Welcome Screen</Text>
         <Welcome
           ViewWidth={SCREEN_WIDTH/1.5}
           ViewHeight={SCREEN_HEIGHT/3}
           fontSize={18}
           TextColor={'pink'}
           FontWeight={'bold'}
           TextAllign={'center'}
         />
         <Text></Text>
         <Text></Text>
         <Text style={{textAlign:' center', fontSize: 24, fontWeight: 'bold'}}>Message Screen</Text>
         <Message
           ViewWidth={SCREEN_WIDTH/1.5}
           ViewHeight={SCREEN_HEIGHT/3}
           Message={'Hello Everybody, Welcome to Sample Package'}
           fontSize={18}
           TextColor={'orange'}
           FontWeight={'bold'}
           TextAllign={'center'}
         />
         <View style={{height: SCREEN_HEIGHT/6}}></View>
       </ScrollView>
    )
  }


}
