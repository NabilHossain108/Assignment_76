import React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const FirstSemester=()=>{
    
    const First=[
        {name:"Hum 4145",key:'1'},
        {name:"Hum 4147",key:'2'},
        {name:"Math 4141",key:'3'},
        {name:"Phy 4143",key:'4'},
        {name:"CSE 4107",key:'5'},
        {name:"SWE 4101",key:'6'},];
    return(
        <View style={styles.viewStyle}>
        <FlatList
        data={First}
        renderItem={function({item}){
            return(<Text style={styles.textStyle}>{item.name}</Text>)
        }}
        
        />
        </View>
    )

}

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:40,
            color:'blue',
        },
        viewStyle:{

            borderColor:'red',
            borderWidth:5,
        }
    }
);

export default FirstSemester;