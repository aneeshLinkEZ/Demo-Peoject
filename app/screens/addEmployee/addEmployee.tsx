import React, { useState, useEffect } from 'react';
import { Button, Text, ListItem } from '@rneui/themed';
import { View, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MyTheme from '../../theme/theme';
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addEmployee, forDemo } from '../../slice/employee/employeeSlice';
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from 'react-hook-form';



function AddEmployee({ navigation }) {

    const dispatch = useAppDispatch();

    const Data = useAppSelector((state) => state.employee)

    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);

    const [teamOpen, setTeamOpen] = useState(false);
    const [teamValue, setTeamValue] = useState(null)

    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [place, setPlace] = useState('');
    const [gender, setGender] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: "Prefer Not to Say", value: "neutral" },
    ]);
    const [team, setTeam] = useState([
        { label: 'FronEnd', value: 'frontEnd' },
        { label: 'BackEnd', value: 'backEnd' },
        { label: "Testing", value: "testing" },
        { label: "CustomSupport", value: "customSupport" },
    ]);

    const save = () => {
        var x = Math.floor((Math.random() * 1000) + 1);
        let data = {
            id: x,
            employeeId: employeeId,
            name: name,
            phone: phone,
            role: role,
            email: email,
            company: company,
            place: place,
            gender: genderValue,
            team: teamValue
        }
        dispatch(addEmployee(data))
        navigation.navigate('Home')

    }
    const { handleSubmit, control } = useForm();


    return (
        <KeyboardAvoidingView
            style={{ margin: 10, flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.textInputView}>
                        <Text style={styles.leftSide}>Id</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            onChangeText={(text) => setEmployeeId(text)}
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.leftSide}>Name</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setName(text)}

                        />
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.leftSide}>Phone</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setPhone(text)}
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.leftSide}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.leftSide}>Company</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setCompany(text)}
                        />
                    </View>
                    <View style={styles.dropdown}>
                        <Text style={styles.dropDownTitle}>Team</Text>

                        <Controller
                            name="gender"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <View style={styles.dropdownGender}>
                                    <DropDownPicker
                                        dropDownDirection="TOP"

                                        style={styles.dropdown}
                                        open={teamOpen}
                                        value={teamValue} //genderValue
                                        items={team}
                                        setOpen={setTeamOpen}
                                        setValue={setTeamValue}
                                        setItems={setTeam}
                                        placeholder="Select Team"
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
                            onChangeText={(text) => setPlace(text)}
                        />
                    </View>

                    <View style={styles.textInputView}>
                        <Text style={styles.leftSide}>Role</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setRole(text)}
                        />
                    </View>
                    <View style={styles.dropdown}>
                        <Text style={styles.dropDownTitle}>Gender</Text>

                        <Controller
                            name="gender"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <View style={styles.dropdownGender}>
                                    <DropDownPicker
                                        dropDownDirection="TOP"

                                        style={styles.dropdown}
                                        open={genderOpen}
                                        value={genderValue} //teamValue
                                        items={gender}
                                        setOpen={setGenderOpen}
                                        setValue={setGenderValue}
                                        setItems={setGender}
                                        placeholder="Select Gender"
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button
                            title='Save'
                            color={MyTheme.colors.button}
                            onPress={() => save()}
                            disabled={((employeeId && name && phone) === '' && (teamValue && genderValue) === null)}
                        />
                        <Button
                            title='Clear'
                            color={MyTheme.colors.button}
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        marginTop: 15,
        borderWidth: 1,
        padding: 10,
        width: '89%',
        borderRadius: 8
    },
    leftSide: {
        width: '20%'
    },
    dropdownGender: {
        margin: 12,
        width: "75%",
        height: 40,
    },
    dropDownTitle: {
        width: '18%',
        marginTop: 20,
    },
    dropdown: {
        flexDirection: 'row',
        marginBottom: 10
    }
})

export default AddEmployee;