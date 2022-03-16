import React from 'react';
import { ViewProps } from 'react-native';

import { Container } from './styles';

export function Divider({ ...rest }: ViewProps) {
    return (
        <Container {...rest} />
    );
}