import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Button,
    ButtonClear,
    Input,
    InputArea,
    InputAreaBorder
} from './styles';
import { useTheme } from 'styled-components/native';

type Props = TextInputProps & {
    onSearch: () => void;
    onClear: () => void;
}

export function Search({ onClear, onSearch, ...rest }: Props) {
    return (
        <Container>
            <InputAreaBorder>
                <InputArea>
                    <Input placeholder="pesquisar..." {...rest} />

                    <ButtonClear onPress={onClear}>
                        <Feather name="x" size={16} />
                    </ButtonClear>
                </InputArea>
            </InputAreaBorder>

            <Button onPress={onSearch}>
                <Feather name="search" size={16} color="black" />
            </Button>
        </Container>
    );
}