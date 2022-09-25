import { Button } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateEmployeeDetails } from '../../slice/employee/employeeSlice';
import MyTheme from '../../theme/theme';
import { useForm, Controller } from 'react-hook-form';


function EditDetails({ navigation, route }) {

    const dispatch = useAppDispatch();
    const afterUpdate = useAppSelector((state) => state.employee.employeesList)

    const details = route.params?.item
    const [name, setName] = useState(details?.name);
    const [phone, setPhone] = useState(details?.phone);
    const [role, setRole] = useState(details?.role);
    const [email, setEmail] = useState(details?.email);
    const [company, setCompany] = useState(details?.company);
    const [place, setPlace] = useState(details?.place);

    const [teamOpen, setTeamOpen] = useState(false);
    const [teamValue, setTeamValue] = useState(details?.team)



    const [team, setTeam] = useState([
        { label: 'FronEnd', value: 'frontEnd' },
        { label: 'BackEnd', value: 'backEnd' },
        { label: "Testing", value: "testing" },
        { label: "CustomSupport", value: "customSupport" },
    ]);

    function updateDetails() {
        let updatedDetails = {
            id: details?.id,
            employeeId: details?.employeeId,
            name: name,
            phone: phone,
            role: role,
            team: teamValue,
            email: email,
            company: company,
            place: place,
            gender: details?.gender
        }
        console.log("updatedDetails", updatedDetails);

        dispatch(updateEmployeeDetails({
            id: details?.id,
            employeeId: details?.employeeId,
            name: name,
            phone: phone,
            role: role,
            team: teamValue,
            email: email,
            company: company,
            place: place,
            gender: details?.gender
        }))
        console.log("afterUpdate", afterUpdate);

        navigation.navigate('ShowTeamDetails')
    }

    const { handleSubmit, control } = useForm();

    return (
        <ScrollView style={{ margin: 10, flex: 1 }}>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Id</Text>
                <TextInput
                    style={styles?.textInput}
                    value={details?.employeeId}
                    editable={false}
                    selectTextOnFocus={false}
                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={(value) => setName(value)}
                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Phone</Text>
                <TextInput
                    style={styles.textInput}
                    maxLength={10}
                    value={phone}
                    onChangeText={(value) => setPhone(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={(value) => setEmail(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Company</Text>
                <TextInput
                    style={styles.textInput}
                    value={company}
                    onChangeText={(value) => setCompany(value)}

                />
            </View>
            <View style={styles.dropdown}>
                <Text style={styles.dropDownTitle}>Team</Text>

                <Controller
                    name="gender"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownTeam}>
                            <DropDownPicker
                                dropDownDirection="TOP"

                                style={styles.dropdown}
                                open={teamOpen}
                                value={teamValue} //genderValue
                                items={team}
                                setOpen={setTeamOpen}
                                setValue={setTeamValue}
                                setItems={setTeam}
                                placeholder={details?.team}
                                // placeholderStyle={styles.placeholderStyles}
                                // onOpen={onGenderOpen}
                                onChangeValue={onChange}
                                zIndex={3000}
                                zIndexInverse={1000}
                            />
                        </View>
                    )}
                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Place</Text>
                <TextInput
                    style={styles.textInput}
                    value={place}
                    onChangeText={(value) => setPlace(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Team</Text>
                <TextInput
                    style={styles.textInput}
                    value={team}
                    onChangeText={(value) => setTeam(value)}

                />
            </View>
            <View style={styles.textInputView}>
                <Text style={styles.leftSide}>Role</Text>
                <TextInput
                    style={styles.textInput}
                    value={role}
                    onChangeText={(value) => setRole(value)}

                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1 }}>
                <Button
                    title={'Cancel'}
                    color={MyTheme.colors.button}
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title={'Update'}
                    color={MyTheme.colors.button}
                    onPress={() => updateDetails()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%'
    },
    textInput: {
        color: 'grey',
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '89%',
        borderRadius: 8
    },
    leftSide: {
        width: '20%'
    },
    dropDownTitle: {
        width: '17%',
        marginTop: 20,

    },
    dropdown: {
        flexDirection: 'row',
        marginBottom: 10,
        width: '100%'
    },
    dropdownTeam: {
        margin: 12,
        width: "75%",
        height: 40,
    }
})

export default EditDetails;
