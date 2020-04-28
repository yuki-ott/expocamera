import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { scale, moderateScale } from 'react-native-size-matters';

interface Props {
    navigation: NavigationStackProp
}
interface State {}

export default class HomeScreen extends Component<Props, State> {
    _OnPress = (navName: string) => {
        console.log('Goto ' + navName);
        this.props.navigation.navigate(navName);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonLoadContainer}
                        onPress = {() => {this._OnPress('LoadPallet')}}
                        >
                    <Text style={styles.buttonLoadText}>積　む</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUnloadContainer}
                        onPress = {() => {this._OnPress('UnloadPallet')}}
                        >
                    <Text style={styles.buttonUnloadText}>降ろす</Text>
                </TouchableOpacity>
                <View style={{flex: 0.5}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2.5,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    buttonLoadContainer: {
        flex: 1,
        flexDirection: "row",
        margin: scale(50),
        backgroundColor: '#50d0b0',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonUnloadContainer: {
        flex: 1,
        flexDirection: "row",
        margin: scale(50),
        backgroundColor: '#F0F8FF',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLoadText: {
        color: '#000',
        fontWeight: '500',
        fontSize: moderateScale(60),
        textAlign: 'center',
    },
    buttonUnloadText: {
        color: '#000',
        fontWeight: '500',
        fontSize: moderateScale(60),
        textAlign: 'center',
    }
});

