import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigators/appNavigator';

function Root() {

    return (
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
    )
}

export default Root;