import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: this.props.ViewWidth ? this.props.ViewWidth : SCREEN_WIDTH,
            height: this.props.ViewHeight ? this.props.ViewHeight : SCREEN_HEIGHT,
            fontSize: this.props.fontSize ? this.props.fontSize : 24,
            color: this.props.TextColor ? this.props.TextColor : '#000',
            fontWeight: this.props.FontWeight ? this.props.FontWeight : 'bold',
            textAllign: this.props.TextAllign ? this.props.TextAllign : 'center'
        }
    }

    render() {
        return (
            <View style={{width: this.state.width, height: this.state.height, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color, textAlign: this.state.textAllign}}>WELCOME TO MY SAMPLE PACKAGE</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color, textAlign: this.state.textAllign}}>THANKS YOU</Text>
                <Text style={{fontSize: this.state.fontSize, fontWeight: this.state.fontWeight, color: this.state.color, textAlign: this.state.textAllign}}>RAUSHAN RANJAN</Text>
            </View>
        )
    }
}