import * as React from 'react'
import { Button, Text, ListItem } from '@rneui/themed';
import { View, StyleSheet, Image } from 'react-native';
import MyTheme from '../../theme/theme';
import images from '../../images/images'
function ShowDetails({ navigation, route }) {

    const details = route.params

    return (
        <View style={styles.mainView}>
            <Image
                source={{ uri: images?.personIcon }}
                style={{ alignSelf: 'center', marginBottom: 50, width: 100, height: 100 }}
            />
            <View style={{ paddingVertical: 20 }}>
                <View style={styles.alignRow}>
                    <Text style={{ width: 100 }}>Name</Text>
                    <Text style={{ width: 50 }}>:</Text>
                    <Text  >{details?.item?.name}</Text>
                </View>
                <View style={styles.alignRow}>
                    <Text style={{ width: 100 }}>Id</Text>
                    <Text style={{ width: 50 }}>:</Text>
                    <Text  >{details?.item?.employeeId}</Text>
                </View>
                <View style={styles.alignRow}>
                    <Text style={{ width: 100 }}>Phone</Text>
                    <Text style={{ width: 50 }}>:</Text>
                    <Text  >{details?.item?.phone}</Text>
                </View>
                <View style={styles.alignRow}>
                    <Text style={{ width: 100 }}>Email</Text>
                    <Text style={{ width: 50 }}>:</Text>
                    <Text  >{details?.item?.email}</Text>
                </View>
                <View style={styles.alignRow}>
                    <Text style={{ width: 100 }}>Company</Text>
                    <Text style={{ width: 50 }}>:</Text>
                    <Text  >{details?.item?.company}</Text>
                </View>
                <View style={styles.alignRow}>
                    <Text style={{ width: 100 }}>Place</Text>
                    <Text style={{ width: 50 }}>:</Text>
                    <Text  >{details?.item?.place}</Text>
                </View>
                <View style={styles.alignRow}>
                    <Text style={{ width: 100 }}>Role</Text>
                    <Text style={{ width: 50 }}>:</Text>
                    <Text  >{details?.item?.role}</Text>
                </View>
            </View>
            <Button title={'Home'} color={MyTheme.colors.button} onPress={() => navigation.navigate('Home')} />
        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        margin: 20
    },
    alignRow: {
        flexDirection: 'row'
    }
})

export default ShowDetails;