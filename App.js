import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/sreens/HomeScreen';
import Semesters from './src/sreens/Semesters';
import FacultyMembers from './src/sreens/FacultyMembers';
import Profile from './src/sreens/Profile';
import FirstSemester from './src/sreens/FirstSemester';
import SecondSemester from './src/sreens/SecondSemester';
import ThirdSemester from './src/sreens/SecondSemester';
const stack= createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Semesters" component={Semesters}/>
        <stack.Screen name="FacultyMembers" component={FacultyMembers}/>
        <stack.Screen name="Profile" component={Profile}/>
        <stack.Screen name="FirstSemester" component={FirstSemester}/>
        <stack.Screen name="SecondSemester" component={SecondSemester}/>
        <stack.Screen name="ThirdSemester" component={ThirdSemester}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

