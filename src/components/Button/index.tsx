import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import { Container, Title, TypeProps } from './styles';
import { useTheme } from 'styled-components/native';

type Props = TouchableOpacityProps & {
    title?: string;
    type?: TypeProps;
    isLoading?: boolean;
    hasCartIcon?: boolean;
    hasArrowLeftIcon?: boolean;
}

export function Button({
    title,
    type = 'primary',
    hasCartIcon = false,
    hasArrowLeftIcon = false,
    ...rest
}: Props) {
    const { COLORS } = useTheme();

    return (
        <Container type={type} {...rest}>

            {hasCartIcon &&
                <MaterialIcons
                    name="add-shopping-cart"
                    color={COLORS.PRIMARY_400}
                    size={24}
                />}

            {hasArrowLeftIcon &&
                <AntDesign
                    name="arrowleft"
                    color='#FFF'
                    size={24}
                />
            }
            {!hasArrowLeftIcon && !hasCartIcon &&
                <Title>
                    {title}
                </Title>
            }

        </Container>
    );
}