import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: this.props.ViewWidth ? this.props.ViewWidth : SCREEN_WIDTH,
            height: this.props.ViewHeight ? this.props.ViewHeight : SCREEN_HEIGHT,
            fontSize: this.props.fontSize ? this.props.fontSize : 24,
            color: this.props.TextColor ? this.props.TextColor : '#000',
            fontWeight: this.props.FontWeight ? this.props.FontWeight : 'bold',
            textAllign: this.props.TextAllign ? this.props.TextAllign : 'center',
            message: this.props.Message ? this.props.Message : 'Welcome To Sample Package'
        }
    }

    render() {
        return (
            <View style={{width: this.state.width, height: this.state.height, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color, textAlign: this.state.textAllign}}>{this.state.message}</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color, textAlign: this.state.textAllign}}>Thank you</Text>
                <Text style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color, textAlign: this.state.textAllign}}>Raushan Ranjan</Text>
            </View>
        )
    }
}