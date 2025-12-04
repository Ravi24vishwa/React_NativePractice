
import React, {useState} from "react";
import  {View, Text, StyleSheet, TouchableOpacity, } from "react-native"

const App = () => {
  const [bgcolor, setbgcolor] = useState('red');
 
  const hexavalue = "1234567890ABCDEF"
  let color = "#"
  const generatecolor = () => {
    for (let i = 0; i < 6; i++) {
      const hexindex = hexavalue.charAt(Math.round(Math.random() * 16))
      color += hexindex;
    }
    setbgcolor(color)
  }
  return (
      <View style={[styles.container, {backgroundColor: bgcolor,}]}>
      <View style={styles.rightsidebar}>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: 'green'}]}  onPress={() => setbgcolor("green")} > 
      <Text style={styles.tabtextstyle}> green </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: 'red'}]}  onPress={() => setbgcolor("red")}> 
      <Text style={styles.tabtextstyle}> red </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: 'blue'}]}  onPress={() => setbgcolor("blue")}> 
      <Text style={styles.tabtextstyle}> blue </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: 'pink'}]}  onPress={() => setbgcolor("pink")}> 
      <Text style={styles.tabtextstyle}> pink </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: 'black'}]}  onPress={() => setbgcolor("black")}> 
      <Text style={styles.tabtextstyle}> black </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: 'lavender'}]}  onPress={() => setbgcolor("lavender")}> 
      <Text style={styles.tabtextstyle}> lavender </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: 'cyan'}]}  onPress={() => setbgcolor("cyan")}> 
      <Text style={styles.tabtextstyle}> cyan </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabinRightbar, {backgroundColor: '#000', borderRadius: 50}]}  onPress={() => generatecolor()}> 
      <Text style={[styles.tabtextstyle, {fontWeight: 'bold'}]}> Random </Text>
      </TouchableOpacity>
      </View>
     </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    // justifyContent: '',
    flexDirection: 'column'
  },
rightsidebar:{
  flex: 1,
  width: 80,
  height: 10,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 20,
  marginRight: 20,
  borderRadius: 10,
  gap: 28,
},
tabinRightbar:{
  borderRadius: 5,
  padding: 5,
  width: 69,
  height: 70,
  justifyContent: 'center',
  alignItems: 'center',
},
tabtextstyle:{
  color: 'white',
},
});
