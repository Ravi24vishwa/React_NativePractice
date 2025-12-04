import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React,{useState} from 'react'

 const HomeScreen = () => {
    const [count, setcount] = useState(0);
    const addvalue = () => (setcount(prevalue => prevalue + 1))
    const resetvalue = () => (setcount(0))
    const decvalue = () => (setcount(prevalue => prevalue - 1))

  return (
    <View style={styles.container}>
    
       <Text> Counter : {count}</Text>
      <View style={styles.fnbuttons}>
        <View style={{flexDirection: 'row', gap: 9, borderRadius: 20}}>
       <Button title=" + " onPress={() => (addvalue())} />
      <Button title=" - " onPress={() => (decvalue())} />
        </View>
      <Button title="reset" onPress={() => (resetvalue())} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 15,
  },
  fnbuttons: {
    flexDirection: 'column',
    justifyContent:'space-between',
    gap: 5,
  }
})
