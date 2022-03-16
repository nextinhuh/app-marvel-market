import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ComicStackRoutes } from './comic.stack.routes';

export function Routes() {
    return (
        <NavigationContainer>
            <ComicStackRoutes />
        </NavigationContainer>
    )
}