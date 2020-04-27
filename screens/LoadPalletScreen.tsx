import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner, BarCodeScannerProps, BarCodeEvent, BarCodeScannedCallback } from 'expo-barcode-scanner';

interface Props {
    navigation: NavigationStackProp
}
interface State {}

export default class LoadPalletScreen extends Component<Props, State> {
    state = {
        hasCameraPermission: null,
        scanned: false,
      };

      async componentDidMount() {
        this.getPermissionsAsync();
      }
      getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }

      readonly handleBarCodeScanned = (nativeEvent: BarCodeEvent) => {
        this.setState({ scanned: true });
        console.log(`Bar code with type ${nativeEvent.type} and data ${nativeEvent.data} has been scanned!`);
//        return this;
      };

    //   handleBarCodeScanned = ({type<BarCodeScannerProps>, data<string>}) => {
    //     this.setState({ scanned: true });
    //     console.log(`Bar code with type ${props} and data ${context} has been scanned!`);
    //   };

      render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
        return <View><Text>Requesting for camera permission</Text></View>;
        }
        if (hasCameraPermission === false) {
        return <View><Text>No access to camera</Text></View>;
        }

        return (
            <View>
                <View>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                        />                
                </View>
        <Text>パレット積み</Text>
            </View>
        )
    }
}
