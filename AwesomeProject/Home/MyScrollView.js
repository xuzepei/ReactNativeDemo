import React, {Component} from 'react';
import {ScrollView, Image, Text} from 'react-native';

export default class MyScrollView extends Component {
    render() {

        let pic = {
            uri: 'http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-autruche.jpg'
        };

        return(
            <ScrollView>
                <Text style={{fontSize:30, color:"#FFFFFF"}}>Scroll me plz</Text>
                <Image source={pic} style={{width:40, height:40}} />
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Text style={{fontSize:30, color:"#FFFFFF"}}>If you like</Text>
                <Image source={pic} style={{width:40, height:40}} />
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Text style={{fontSize:30, color:"#FFFFFF"}}>Scrolling down</Text>
                <Image source={pic} style={{width:40, height:40}} />
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Text style={{fontSize:30, color:"#FFFFFF"}}>What's the best</Text>
                <Image source={pic} style={{width:40, height:40}} />
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Text style={{fontSize:30, color:"#FFFFFF"}}>Framework around?</Text>
                <Image source={pic} style={{width:40, height:40}} />
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Image source={pic} style={{width:40, height:40}}/>
                <Text style={{fontSize:30, color:"#FFFFFF"}}>React Native</Text>
            </ScrollView>
        );
    }
}