/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Image} from 'react-native';

 const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 type Props = {};
 export default class HomeView extends Component<Props> {
    render() {

        let pic = {
            uri: 'http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-autruche.jpg'
        };

        return (
            <View style={styles.container}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
            <View style={{height: 50, backgroundColor: 'skyblue'}}/>
            <View style={{height: 50, backgroundColor: 'steelblue'}}/>
            </View>
            );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            });
        }, 1000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
            );
        }

    }

    class GreetingList extends Component {
        render() {
            return (
            <View style={{alignItems: 'center'}}>
            <Text>Hello {this.props.name}!</Text>
            </View>
            );
        }
    }



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: '#FFFFFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: 'red',
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
        hello: {
            color: 'red',
        },
        pic: {
            width: 193,
            height: 110,
        }
    });
