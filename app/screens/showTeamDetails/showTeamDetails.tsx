import * as React from 'react'
import { Button, Text, Card } from '@rneui/themed';
import { View, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import GridFlatList from 'grid-flatlist-react-native';
import MyTheme from '../../theme/theme';
import teams from './teams';


function ShowTeamDetails({ navigation }) {


    return (
        <SafeAreaView style={styles.mainView}>
            <GridFlatList
                data={teams}
                renderItem={(item) => (
                    <TouchableOpacity onPress={() => navigation.navigate('EmployeesList', { item })}>
                        <Card containerStyle={{ paddingLeft: '10%', margin: 0, height: 250, alignItems: 'center' }}>
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 150, height: 150 }}
                            />
                            <Text h3 style={{ textAlign: 'center' }}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>

                )}
                numColumns={2}
                gap={5}
            />

            <Button
                title={'Show All'}
                color={MyTheme.colors.button}
                onPress={() => navigation.navigate('EmployeesList')}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        margin: 10,
    }
})

export default ShowTeamDetails;