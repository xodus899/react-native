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

//Create react component

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }


  render() {
    const { backgroundColor } = this.state
    return (
      <View style={[styles.container,{ backgroundColor } ]}>
        <Text style={styles.button} onPress={ () => this.changeColor('green')} > Green </Text>
        <Text style={styles.button} onPress={ () => this.changeColor('red')} > Red </Text>
      </View>
    )
  }
}

//Create stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'
  }

})


//Register component, first takes the app name, second is a function

AppRegistry.registerComponent('HelloWorld', () => App)
