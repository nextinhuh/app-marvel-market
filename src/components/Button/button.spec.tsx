import React from 'react';
import { render } from '@testing-library/react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../themes';

import { Button } from '.';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: jest.fn(),
        }),
    };
});

describe('Button Component', () => {
    it('should have a title on button', () => {
        const { getByText } = render(
            <Button
                title="Teste title on button"
            />,
            {
                wrapper: Providers
            }
        );

        const titleButton = getByText('Teste title on button');
        expect(titleButton).toBeTruthy();
    });
})