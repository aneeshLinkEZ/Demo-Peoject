import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home';
import AddEmployee from '../screens/addEmployee/addEmployee';
import EmployeesList from '../screens/employeeList/employeeList';
import ShowDetails from '../screens/showDetails/showDetails';
import ShowTeamDetails from '../screens/showTeamDetails/showTeamDetails';
import EditDetails from '../screens/editEmployee/editDetails';
import MyTheme from '../theme/theme';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen} options={styles.homeHeader} />
                <Stack.Screen name="AddEmployee" component={AddEmployee} options={{
                    headerTitleAlign: 'center',
                    headerStyle: { elevation: 0, backgroundColor: MyTheme.colors.primary },
                    title: 'Add Employee Details'
                }} />
                <Stack.Screen name="EmployeesList" component={EmployeesList} options={{
                    headerTitleAlign: 'center',
                    headerStyle: { elevation: 0, backgroundColor: MyTheme.colors.primary },
                    title: 'Employees List'
                }} />
                <Stack.Screen name="ShowDetails" component={ShowDetails} options={{
                    headerTitleAlign: 'center',
                    headerStyle: { elevation: 0, backgroundColor: MyTheme.colors.primary },
                    title: 'Show Details'
                }} />
                <Stack.Screen name="ShowTeamDetails" component={ShowTeamDetails} options={{
                    headerTitleAlign: 'center',
                    headerStyle: { elevation: 0, backgroundColor: MyTheme.colors.primary },
                    title: 'Show Team Details Details'
                }} />
                <Stack.Screen name="EditDetails" component={EditDetails} options={{
                    headerTitleAlign: 'center',
                    headerStyle: { elevation: 0, backgroundColor: MyTheme.colors.primary },
                    title: 'Edit Details'
                }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
    homeHeader: {
        headerTitleAlign: 'center',
        headerStyle: { elevation: 0, backgroundColor: MyTheme.colors.primary }
    }
})

export default AppNavigator;