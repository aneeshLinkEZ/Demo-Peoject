import React, { useState, useEffect } from 'react';
import { Button, Text, SearchBar, Card, Avatar, Overlay } from '@rneui/themed';
import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../images/images';
import MyTheme from '../../theme/theme';
import { removeEmployee } from '../../slice/employee/employeeSlice';



function EmployeesList({ navigation }) {

    const [visible, setVisible] = useState(false);


    const data = useAppSelector((state) => state.employee.employeesList)
    const dispatch = useAppDispatch();


    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search)
    }

    useEffect(() => {
    }, [])

    const deleteEmployee = (item) => {

        dispatch(removeEmployee(item))
        setVisible(!visible);

    }

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const DeleteConfirmation = (item) => {
        return (
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%' }}>
                <Text >Delete</Text>
                <Text >
                    Are you sure you want to Delete
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 20, paddingLeft: 190 }}>
                    <Button
                        title="Delete"
                        onPress={() => deleteEmployee(item)}
                        buttonStyle={{ marginRight: 10 }}
                    />
                    <Button
                        title="Cancel"
                        onPress={toggleOverlay}
                    />
                </View>
            </Overlay>
        )
    }

    const renderItem = ({ item }) => {

        const items = item
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ShowDetails', { item })}>
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar
                            size={40}
                            rounded
                            source={{ uri: images.personIcon }}
                            avatarStyle={{ paddingVertical: 2 }}
                            containerStyle={{ alignContent: 'center', alignSelf: 'center' }}
                        />
                        <Card.Title style={{ marginTop: 15, width: '45%' }}>{item?.name}</Card.Title>
                        <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                            <Button
                                title={'Edit'}
                                buttonStyle={{ marginRight: 10, width: 70 }}
                                color={MyTheme.colors.button}
                                onPress={() => navigation.navigate('EditDetails', { item })}
                            />
                            <Button
                                title={'Delete'}
                                color={MyTheme.colors.button}
                                buttonStyle={{ width: 70 }}
                                onPress={toggleOverlay}
                            />
                            <DeleteConfirmation item={item} />
                        </View>

                    </View>
                </Card>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView>
            <SearchBar
                style={{ height: 10 }}
                placeholder='Type Here.....'
                onChangeText={updateSearch}
                value={search}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.Id}
            />
            <Card />
        </SafeAreaView>)
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    }
})

export default EmployeesList;