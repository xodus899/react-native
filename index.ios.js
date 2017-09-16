//Import files needed

import React from 'react'
import { 
  AppRegistry, 
  View, 
  Text, 
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

import picGolf1 from './assets/golf1.jpg'
import picGolf2 from './assets/golf2.png'

//Create react component

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={picGolf2} style={styles.pic} /> 
      </View>
    )
  }
}

//Create stylesheet
const styles = StyleSheet.create({
  defaultText: {
    fontSize: 24,
    padding:10,
    margin: 5,
    color: "black",
    borderWidth: 10,
    borderColor: "red"
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: "bold"
  },
  container: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pic: {
    flex:1,
    width:Dimensions.get('window').width,
    resizeMode: 'cover'

  }
})


//Register component, first takes the app name, second is a function

AppRegistry.registerComponent('HelloWorld', () => App)
