//Import files needed

import React from 'react'
import { 
  AppRegistry, 
  View,  
  StyleSheet,
  ListView,
  Text
} from 'react-native'

import ColorButton from './components/color-button'

//Create react component

class App extends React.Component {
  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    }) 
    const availableColors = [
      'red',
      'green',
      'yellow',
      'orange',
      'purple',
      'brown',
      'black',
      'white',
      'lime'
      ]
    this.state = {
      backgroundColor: 'blue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }
  render() {
    const { backgroundColor, dataSource } = this.state
    return (
      <ListView style={ [styles.container,{ backgroundColor }]}
        dataSource={dataSource} 
        renderRow= {(color) => (
          <ColorButton backgroundColor={color} 
            onSelect= {this.changeColor}/>
          )}
          renderHeader={() => (
             <Text style={styles.header}>Color-List </Text>
        )}>
      </ListView>
    )
  }
}

//Create stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'lightgrey',
    paddingTop:20,
    padding: 10,
    fontSize:30,
    textAlign:'center'
  }
})


//Register component, first takes the app name, second is a function

AppRegistry.registerComponent('HelloWorld', () => App)