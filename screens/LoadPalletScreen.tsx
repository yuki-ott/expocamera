import React, { Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NavigationStackProp, useHeaderHeight } from 'react-navigation-stack';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner, BarCodeScannerProps, BarCodeEvent, BarCodeScannedCallback } from 'expo-barcode-scanner';
import * as Location from 'expo-location';
import { scale, moderateScale } from 'react-native-size-matters';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
    navigation: NavigationStackProp
}
interface State {}
//const headerHeight:number = useHeaderHeight();

export default class LoadPalletScreen extends Component<Props, State> {
  state = {
    hasPermission: null,
    scanned: false,
    locLati: 0,
    locLongi: 0,
    palletNo: '',
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }
  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION);
    this.setState({ hasPermission: status === 'granted' });
  }

  readonly handleBarCodeScanned = (nativeEvent: BarCodeEvent) => {
    this.setState({ scanned: true });
    console.log(`Bar code with type ${nativeEvent.type} and data ${nativeEvent.data} has been scanned!`);

    this.state.palletNo = nativeEvent.data;
    this.viewLocation();
    this.setState(this.state);

    return this;
  };

  viewLocation = async() => {
    let location:Location.LocationData = await Location.getCurrentPositionAsync({});
    this.state.locLati = Math.round(location.coords.latitude * 100000) / 100000;
    this.state.locLongi = Math.round(location.coords.longitude * 100000) / 100000;
    console.log(`latitude ${this.state.locLati} / longitude ${this.state.locLongi}`);
  }

  render() {
    const { hasPermission, scanned } = this.state;

    if (hasPermission === null) {
    return <View><Text>Requesting for camera permission</Text></View>;
    }
    if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
    }

    return (
      <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                    />                
            </View>
              <View style={styles.otherContainer}>
                <Text style={styles.otherLabel}>緯度：{this.state.locLati}　 経度：{this.state.locLongi}</Text>
                <Text></Text>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.otherLabel}>パレット番号：</Text>
                  <TextInput 
                    style={styles.otherTextInput} 
                    placeholder='パレットNo'
                    keyboardType={'number-pad'} 
                    maxLength={10}
                    value={this.state.palletNo}/>
                </View>
              </View>
            <View style={styles.blankContainer}></View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
  },
  cameraContainer: {
      flex: 5,
      padding: scale(35),
      margin: scale(30),
      backgroundColor: '#50d0b0',
      borderWidth: 3,
      paddingBottom: 150,
  },
  otherContainer: {
    flex: 3,
    padding: scale(10),
    margin: scale(20),
  },
  otherLabel: {
    fontSize: moderateScale(18),
  },
  otherTextInput: {
    fontSize: moderateScale(18),
    borderWidth: 1,
  },
  blankContainer: {
    flex: 2,
    padding: scale(35),
  }
});

