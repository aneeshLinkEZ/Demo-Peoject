import React, { useState, useEffect } from 'react';
import { Button, Text, SearchBar, Card, Avatar, Overlay } from '@rneui/themed';
import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../images/images';
import MyTheme from '../../theme/theme';
import { removeEmployee } from '../../slice/employee/employeeSlice';



function EmployeesList({ navigation, route }) {
    const teamName = route.params.item.value;

    const [visible, setVisible] = useState(false);


    const data = useAppSelector((state) => state.employee.employeesList);
    const employeeList = data.filter(item => item.team === teamName);

    const dispatch = useAppDispatch();


    const [search, setSearch] = useState('');
    const [newData, setNewData] = useState();
    const [deleteEmployee, setDeleteEmployee] = useState();
    let [count, setCount] = useState(0);

    useEffect(() => {
        let filterData = employeeList.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))
        setNewData(filterData);
    },[search, count])

    const updateSearch = (search) => {
        setSearch(search);
    }


    const toggleOverlay = () => {
        setVisible(!visible);
        console.log("toggleOverlay");

    };

    function handleDelete(deleteDetails) {
        setCount(count+=1)
        dispatch(removeEmployee(deleteDetails));
        console.log('Delete : ', deleteDetails.name);
        setVisible(!visible);

    }




    const DeleteConfirmation = (item) => {
        return (
            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={{ width: '90%' }}
            >
                <Text >Delete</Text>
                <Text >
                    Are you sure you want to Delete
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 20, paddingLeft: 190 }}>
                    <Button
                        title="Confirm"
                        onPress={() => { handleDelete(deleteEmployee) }}
                        buttonStyle={{ marginRight: 10 }}
                    />
                    <Button
                        title="Cancel"
                        onPress={toggleOverlay} />
                </View>
            </Overlay>
        )
    }

    const renderItem = ({ item }) => {


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
                                onPress={() => { setDeleteEmployee(item), setVisible(true) }}
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
            {employeeList.length !== 0 &&
                <View>
                    <SearchBar
                        style={{ height: 10 }}
                        placeholder='Type Here.....'
                        onChangeText={updateSearch}
                        value={search}
                    />
                    <FlatList
                        data={newData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>}
            {employeeList.length === 0 &&
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '80%' }}>
                    <Button
                        title={'Add Employee'} color={MyTheme.colors.button}
                        onPress={() => navigation.navigate('AddEmployee')}
                    />
                </View>}
        </SafeAreaView>)
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    }
})

export default EmployeesList;