import React from 'react';
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
    hasPlusIcon?: boolean;
    hasMinusIcon?: boolean;
}

export function Button({
    title,
    type = 'primary',
    hasCartIcon = false,
    hasArrowLeftIcon = false,
    hasPlusIcon = false,
    hasMinusIcon = false,
    ...rest
}: Props) {
    const { COLORS } = useTheme();

    return (
        <Container type={type} {...rest}>

            {hasCartIcon &&
                <MaterialIcons
                    testID="cart-icon"
                    name="add-shopping-cart"
                    color={COLORS.PRIMARY_400}
                    size={24}
                />}

            {hasArrowLeftIcon &&
                <AntDesign
                    testID="arrow-icon"
                    name="arrowleft"
                    color='#FFF'
                    size={24}
                />
            }

            {hasPlusIcon &&
                <AntDesign
                    testID="plus-icon"
                    name="plus"
                    color='#FFF'
                    size={19}
                    style={{
                        marginTop: 18
                    }}
                />
            }

            {hasMinusIcon &&
                <AntDesign
                    testID="minus-icon"
                    name="minus"
                    color='#FFF'
                    size={24}
                    style={{
                        marginTop: 17
                    }}
                />
            }

            {!hasArrowLeftIcon && !hasCartIcon &&
                <Title testID="title-button">
                    {title}
                </Title>
            }

        </Container>
    );
}