import React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ThirdSemester=()=>{
    
    const Third=[
        {name:"Hum 4247",key:'1'},
        {name:"Hum 4249",key:'2'},
        {name:"Math 4241",key:'3'},
        {name:"CSE 4203",key:'4'},
        {name:"CSE 4205",key:'5'},
        {name:"SWE 4201",key:'6'},];
    return(
        <View style={styles.viewStyle}>
        <FlatList
        data={Third}
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

export default ThirdSemester;