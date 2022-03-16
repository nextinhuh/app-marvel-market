import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, TypeProps } from './styles';
import { useTheme } from 'styled-components/native';

type Props = TouchableOpacityProps & {
    title: string;
    type?: TypeProps;
    isLoading?: boolean;
    hasIcon?: boolean;
}

export function Button({
    title,
    type = 'primary',
    hasIcon = false,
    ...rest
}: Props) {
    const { COLORS } = useTheme();

    return (
        <Container type={type} {...rest}>

            {hasIcon ?
                <MaterialIcons name="add-shopping-cart" color={COLORS.PRIMARY_400} size={24} />
                : <Title>{title}</Title>}
        </Container>
    );
}