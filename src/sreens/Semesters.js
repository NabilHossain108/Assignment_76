import React from 'react';
import{Text,View,StyleSheet,Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Semesters=(props)=>{
return(
    <View>
        <Button
      title='First Semester'
      onPress={
        function(){
        props.navigation.navigate("FirstSemester");
          }
      }
      />
              <Button
      title='Second Semester'
      onPress={
        function(){
        props.navigation.navigate("SecondSemester");
          }
      }
      />
              <Button
      title='Third Semester'
      onPress={
        function(){
        props.navigation.navigate("ThirdSemester");
          }
      }
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

export default Semesters;