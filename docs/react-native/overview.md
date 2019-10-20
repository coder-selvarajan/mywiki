---
id: overview
title: React-Native Overview
---

## What is React-Native

- Its a Framework for building mobile apps using javascript and React library
- Build cross platform apps
- Uses almost all React.js features like components, props, state, lifecycles etc
- React Native apps are not hybrid apps
- Dont run in a webview
- Uses the same fundamental building blocks as a native app built with Swift / Objective-C / Java
- Better and faster than Cordova / PhoneGap / Ionic

### Advantages

- Cross platform
- Less expensive
- Easier to Code
- Saves time
- Open Source 

### UI Component Examples

- TextInput, Picker, Switch, Slider
- Touchable Elements
- ListView & ScrollView
- Alerts, Modals, ProgressBars
- StatusBar
- TabBarIOS
- ToolbarAndroid

#### APIs for Device Interaction

- CameraRoll
- AsyncStorage
- Grolocation
- ImageEditor
- PushNotifications
- Vibration
- Share / Messages

---

## Installation & Setup 

#### Development Environments 

- Windows 
    - Android Studio
    - Android SDK
    - Android AVD
- Mac 
    - Xcode
    - Simulator


### Setting-up Development Environment

#### Install react native cli

    npm install -g react-native-cli

#### Install yarn

Yarn is a new package manager for Javascript

    npm install -g yarn

#### Create React-native app

    reat-native init myapp

#### To start the app

    cd myapp
    react-native start
    react-native run-ios


#### Sample React-native code

```js
import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';

class MyApp extends Component {
    render(){
        return (
            <view>
                <text>Hell World</Text>
            </view>
        );
    }
}

AppRegistry.registerComponent('MyApp', ()=>MyApp);

```

#### State, Props & Default Props

```js
...
...
constructor(props){
    super(props);
    this.state = {
        message = tihs.props.message;
    }
}

statis defaultProps = {
    message: 'Hi there'
}

render() {
    return(
        <View>
            <Text>{this.state.message}</Text>
        </View>
    );
}
...
...

```

> Above code results the `message` if it is passed into the component, otherwise it displays `Hi there`

#### Debug the app

    react-native log-ios

#### Using Styles

React stylesheets are little different than the CSS. It follows camalCase for element names. 

```js
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component2 extends Component{
    render() {
        return(
            <View style={styles.myView}>
                <Text style={styles.myText}>Hello Coder</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    }
});

AppRegistry.registerComponent('Component2', () => Component2);
```

### Tools and Projects

Ignite Cli: Boilerplate for react-native projects
https://infinite.red/ignite


## Initializing & Running the App

## Creating Components

## UI Features

## API Features 

