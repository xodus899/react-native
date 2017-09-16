//Import files needed

import React from 'react'
import { 
  AppRegistry, 
  View, 
  Text, 
  StyleSheet
} from 'react-native'

//Create react component

class App extends React.Component {
  render() {
    return (
      <View> 
        <Text style={[styles.defaultText,styles.selectedText]}> Chris </Text>
        <Text style={[styles.defaultText,styles.selectedText]}> Charlie </Text>
        <Text style={[styles.defaultText,styles.selectedText]}> Mason </Text>
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
  }
})


//Register component, first takes the app name, second is a function

AppRegistry.registerComponent('HelloWorld', () => App)
