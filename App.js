import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
const App = () => {
  const htmlContent = `<p><a>Install the  react native html view package</a></p> <h1>Render the element from code or backend</h1> <p>Html tags:</p><ul>
      <li>u can use any tags available in html</li>
      
   
  </ul><p>NOTE:When you are trying to get the html from backend,you should enclose the HTML by div or body tag</p><img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" width="102" height="32">`;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        steps 
      </Text>
      <HTMLView
        value={htmlContent}
        stylesheet={styles}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  a: {
    fontWeight: '500',
    fontSize:20,
    color: 'green', // make links coloured green
  },
  
  h1:{
    color:"yellow",
    fontWeight:"900"
  },
  li:{
    fontWeight:"500",
    

  },
  p:{
    fontSize:20
  }
});

export default App;