import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ComicDetail } from '@screens/ComicDetail';
import { ComicList } from '@screens/ComicList';

const { Navigator, Screen } = createNativeStackNavigator();

export function ComicStackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={ComicList} />
            <Screen name="detail" component={ComicDetail} />
        </Navigator>
    )
}