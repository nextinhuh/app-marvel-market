import React from 'react';
import { render } from '@testing-library/react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../themes';

import { Divider } from '.';

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

describe('Divider Component', () => {
    it('should have a 100% width', () => {
        const { getByTestId } = render(
            <Divider
                testID="divider-component"
            />,
            {
                wrapper: Providers
            }
        );

        const dividerComponent = getByTestId('divider-component');
        expect(dividerComponent.props.style[0].width)
            .toEqual('100%');
    });
})