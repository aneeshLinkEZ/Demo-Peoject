import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Button, Text } from "@rneui/themed";
import MyTheme from '../../theme/theme';
import images from '../../images/images';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LineChart } from "react-native-chart-kit";

function HomeScreen({ navigation }) {

    const employeeList = useAppSelector((state) => state.employee.employeesList);
    const dispatch = useAppDispatch();

    const frontEnd = employeeList.filter(item => item.team === 'frontEnd')
    const backEnd = employeeList.filter(item => item.team === 'backEnd')
    const testing = employeeList.filter(item => item.team === 'testing')
    const customSupport = employeeList.filter(item => item.team === 'customSupport')



    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollView}>
                <View style={styles.mainView}>
                    <View>
                        <Image source={{ uri: images.home }} style={styles.firstImage} />
                        <Image source={{ uri: images.linkEz }} style={styles.secondImage} />
                        <View style={styles.buttonView}>
                            {employeeList?.length !== 0 && <Button
                                title='List Employees'
                                onPress={() => navigation.navigate("ShowTeamDetails")}
                                buttonStyle={styles.buttonStyle}
                                color={MyTheme.colors.button}
                            />}
                            <Button
                                title='Add Employee'
                                onPress={() => navigation.navigate("AddEmployee")}
                                buttonStyle={styles.buttonStyle}
                                color={MyTheme.colors.button}
                            />
                        </View>
                    </View>
                    <View style={styles.lineChartView}>
                        <LineChart
                            data={{
                                labels: ["FrontEnd", "BackEnd", "Testing", "Custom Support"],
                                datasets: [
                                    {
                                        data: [
                                            frontEnd.length,
                                            backEnd.length,
                                            testing.length,
                                            customSupport.length,
                                            
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width - 50} // from react-native
                            height={220}
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={styles.chartConfigStyle}
                            bezier
                            style={styles.lineChartStyle}
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 70
    },
    scrollView: {
        padding: 5
    },
    buttonStyle: { 
        marginTop: 10 
    },
    buttonView: { 
        marginVertical: '10%' 
    },
    victoryChart: {
        theme: MyTheme.colors.primary
    },
    chartConfigStyle: {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        // decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    },
    lineChartStyle: {
        marginVertical: 8,
        borderRadius: 8
    },
    lineChartView : {
        margin: 5
    },
    firstImage: { 
        width: 200, 
        height: 200 
    },
    secondImage: { 
        width: 200, 
        height: 50 
    }

})

export default HomeScreen;