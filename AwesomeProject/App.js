import React, {Component} from "react";
import {Image, StyleSheet, Text, View, FlatList} from "react-native";

var MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: {thumbnail: "https://i.imgur.com/UePbdph.jpg"}
    }
];

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
        };

        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {

                console.log(responseData);

                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true,
                });
            });
    }


    render() {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={item => item.id}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text>正在加载电影数据...... </Text>
            </View>
        );
    }

    renderMovie({item}) {
        return (
            <View style={styles.container}>
                <Image source={{uri: item.posters.thumbnail}} style={styles.thumbnail}></Image>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },

    rightContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    loading: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },

    thumbnaiheight: 81
    },

    title: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'center',
    },

    year: {
        textAlign: 'center',
    },

    list: {
        marginTop: 44,
        backgroundColor: "#F5FCFF",
    },
});
