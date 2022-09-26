import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from "@rneui/themed";
import MyTheme from '../../theme/theme';
import images from '../../images/images';
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setEmployees, forDemo } from '../../slice/employee/employeeSlice';


function HomeScreen({ navigation }) {

    const employeeList = useAppSelector((state) => state.employee.employeesList); 
    const dispatch = useAppDispatch();

    console.log(employeeList.length); 

    return (
        <View style={styles.mainView}>
            <Image source={{ uri: images.home }} style={{ width: 200, height: 200 }} />
            <Image source={{ uri: images.linkEz }} style={{ width: 200, height: 50 }} />
            <View style={{ marginTop: '20%' }}>
                {employeeList?.length !== 0 && <Button
                    title='List Employees'
                    onPress={() => navigation.navigate("ShowTeamDetails")}
                    buttonStyle={{ marginTop: 30 }}
                    color={MyTheme.colors.button}
                />}
                <Button
                    title='Add Employee'
                    onPress={() => navigation.navigate("AddEmployee")}
                    buttonStyle={{ marginTop: 30 }}
                    color={MyTheme.colors.button}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 70
    }
})

export default HomeScreen;