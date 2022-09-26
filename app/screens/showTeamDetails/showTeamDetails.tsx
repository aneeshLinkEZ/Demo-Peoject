import * as React from 'react'
import { Button, Text, Card } from '@rneui/themed';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions, ScrollView, View } from 'react-native';
import GridFlatList from 'grid-flatlist-react-native';
import MyTheme from '../../theme/theme';
import teams from './teams';
import { useAppSelector } from '../../hooks';
import PieChart from 'react-native-pie-chart';


function ShowTeamDetails({ navigation }) {
    const employeeList = useAppSelector(state => state.employee.employeesList)
    const frontEnd = employeeList.filter(item => item.team === 'frontEnd')
    const backEnd = employeeList.filter(item => item.team === 'backEnd')
    const testing = employeeList.filter(item => item.team === 'testing')
    const customSupport = employeeList.filter(item => item.team === 'customSupport')

    const screenWidth = Dimensions.get("window").width - 50
    const widthAndHeight = 220

    const series = [frontEnd.length, backEnd.length, testing.length, customSupport.length]
    // const series = [5, 8, 2, 10]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', 'green']


    return (
        <SafeAreaView style={styles.mainView}>
            <ScrollView>
                <GridFlatList
                    data={teams}
                    renderItem={(item) => (
                        <TouchableOpacity onPress={() => navigation.navigate('EmployeesList', { item })}>
                            <Card containerStyle={{ paddingLeft: '10%', margin: 0, height: 230, alignItems: 'center' }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 150, height: 150 }}
                                />
                                <Text h4 style={{ textAlign: 'center' }}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>

                    )}
                    numColumns={2}
                    gap={5}
                />
                <View>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        style={{ alignSelf: 'center' }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.pieChartIdentifier, { backgroundColor: '#F44336' }]}>FrontEnd</Text>
                        <Text style={[styles.pieChartIdentifier, { backgroundColor: '#2196F3' }]}>BackEnd</Text>

                        <Text style={[styles.pieChartIdentifier, { backgroundColor: '#FFEB3B' }]}>Testing</Text>

                        <Text style={[styles.pieChartIdentifier, { backgroundColor: 'green' }]}>Custom{"\n"}Support</Text>

                    </View>
                </View>
                <Button
                    title={'Show All'}
                    color={MyTheme.colors.button}
                    onPress={() => navigation.navigate('EmployeesList')}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        margin: 10,
    },
    pieChartIdentifier: {
        width: '20%',
        textAlign: 'center',
        padding: 5,
        marginBottom: 10,
        paddingVertical: '1%',
    }

})

export default ShowTeamDetails;