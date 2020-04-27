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
                    <Text style={styles.buttonUnloadText}>卸　し</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    buttonLoadContainer: {
        flex: 1,
        padding: scale(35),
        margin: scale(50),
        backgroundColor: '#50d0b0',
        borderWidth: 3,
    },
    buttonUnloadContainer: {
        flex: 1,
        padding: scale(35),
        margin: scale(50),
        backgroundColor: '#FFF',
        borderWidth: 3,
    },
    buttonLoadText: {
        flex: 1,
        color: '#000',
        fontWeight: '500',
        fontSize: moderateScale(60),
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonUnloadText: {
        flex: 1,
        color: '#000',
        fontWeight: '500',
        fontSize: moderateScale(60),
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

