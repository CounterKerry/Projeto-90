import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

const {longitude, latitude} = this.state;
const path = `https://virtualsky.lco.global/embed/index.html?logitude=${logitude}&latitude=${latitude}&constellationlabels=true&showtarlabels=true&gridelines_az=true&live=trueprojection=stereo&showdate=false&showposition=false`

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <WebView
                        scalesPageToFit={true}
                        source={{uri: path}}
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeHolder="Digite sua latitude"
                        placeHolderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
            </View>
        )
    }
}