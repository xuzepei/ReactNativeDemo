/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert, AppRegistry} from 'react-native';
import MyScrollView from "./Home/MyScrollView.js";
import MyFlatList from './Home/MyFlatList.js';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type
Props = {};
export default class App extends Component<Props> {
    render() {

        let pic = {
            uri: 'http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-autruche.jpg'
        };

        return (
            <View style={styles.container}>
                <MyFlatList style={{flex: 1, alignItems: 'stretch'}}/>
            </View>
        );
    }
}

class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me2"
                    />
                </View>
                {/*<View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>*/}
            </View>
        );
    }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {

        return (

            <View style={{alignItems: 'flex-start'}}>

                <TextInput style={{height: 40, color: '#0000FF'}}
                           placeholder="Type here to translate!"
                           onChangeText={(text) => this.setState({text})}/>

                <Text style={{pading: 10, fontSize: 12}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>

            </View>

        );


    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true, test: '123'};

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
            <View style={{alignItems: 'center'}}>
                <Text>{this.props.text}</Text>
                <Text>{this.state.test}</Text>
            </View>
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
        paddingTop: 44,
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
    },

    buttonContainer: {
        backgroundColor: '#000000'
    },

    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
