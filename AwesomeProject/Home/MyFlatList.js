import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image} from 'react-native';

export default class MyFlatList extends Component {
    render() {

        let pic = {
            uri: 'http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-autruche.jpg'
        };

        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => { return <View style={styles.item}>
                        <Image source={pic} style={{width:80, height:80}} />
                        <Text style={styles.text}>{item.key}</Text>
                        </View>}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 90
    },

    text: {
        flex: 1,
        fontSize: 18,
        height: 80,
        color: '#FF0000',
        paddingLeft: 10,
        paddingTop: 31
    },
})