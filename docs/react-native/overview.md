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


## Sample React-native Code

<!--DOCUSAURUS_CODE_TABS-->
<!--Hello-World-->
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

<!--State-Props-->
```js
// Below code results the `message` if it is passed into the component, otherwise it displays `Hi there`
...
...
constructor(props){
    super(props);
    this.state = {
        message = tihs.props.message;
    }
}

//Default props
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

<!--Stylesheet-->
```js
// React stylesheets are little different than the CSS. It follows camalCase for element names. 

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

<!--Flexbox-->
```js
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component2 extends Component{
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <View style={styles.v1}>
                        <Text>View 1</Text>
                    </View>
                    <View style={styles.v2}>
                        <Text>View 2</Text>
                    </View>
                    <View style={styles.v3}>
                        <Text>View 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:100
    },
    v1: {
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2: {
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3: {
        flex:1,
        backgroundColor:'black',
        padding:10
    },
    vText: {
        color:'white'
    }
});

AppRegistry.registerComponent('Component2', () => Component2);
```

<!--Touchable-->
```js
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component{
    onPress(){
        console.log('Area Pressed');
    }

    onPress2(){
        console.log('Area 2 Pressed');
    }

    render(){
        return(
            <View>
                <View style={styles.container}>
                    <TouchableHighlight 
                        style={styles.v1} 
                        onPress={this.onPress}
                        underlayColor="blue" >
                        <View>
                            <Text>View 1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity
                        style={styles.v2}
                        onPress={this.onPress2} >
                        <View>
                            <Text>View 2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:100
    },
    v1: {
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2: {
        flex:1,
        backgroundColor:'green',
        padding:10
    }
});

AppRegistry.registerComponent('Component2', () => Component2);
```
<!--END_DOCUSAURUS_CODE_TABS-->


#### Debug the app

    react-native log-ios



### Tools and Projects

Ignite Cli: Boilerplate for react-native projects
https://infinite.red/ignite


## Initializing & Running the App

## Creating Components

## UI Features

## API Features 

