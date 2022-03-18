import React from 'react';
import { render } from '@testing-library/react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../themes';

import { ComicCard } from '.';

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

describe('Comic Card Component', () => {
    it('should have a image component', () => {
        const { getByTestId } = render(
            <ComicCard
                comic={{
                    id: '1',
                    rare: true,
                    uri: 'photo_uri',
                    title: 'Homem Aranha #3',
                    quantity: 0,
                    price: 45.5,
                    creators: [
                        {
                            name: 'Roboto',
                            role: 'Escritor'
                        }
                    ],
                    dates: [
                        {
                            date: new Date,
                            type: 'venda'
                        }
                    ],
                    description: 'Descrição teste'
                }}
            />,
            {
                wrapper: Providers
            }
        );

        const imageComponent = getByTestId('image-component');
        expect(imageComponent).toBeTruthy();
    });

    it('should have show comic title when description mode', () => {
        const { getByText } = render(
            <ComicCard
                hasDescription
                comic={{
                    id: '1',
                    rare: true,
                    uri: 'photo_uri',
                    title: 'Homem Aranha #3',
                    quantity: 0,
                    price: 45.5,
                    creators: [
                        {
                            name: 'Roboto',
                            role: 'Escritor'
                        }
                    ],
                    dates: [
                        {
                            date: new Date,
                            type: 'venda'
                        }
                    ],
                    description: 'Descrição teste'
                }}
            />,
            {
                wrapper: Providers
            }
        );

        const comicTitle = getByText('Homem Aranha #3');
        expect(comicTitle).toBeTruthy();
    });

    it('should have button to move details screen', () => {
        const { getByTestId } = render(
            <ComicCard
                hasDescription
                comic={{
                    id: '1',
                    rare: true,
                    uri: 'photo_uri',
                    title: 'Homem Aranha #3',
                    quantity: 0,
                    price: 45.5,
                    creators: [
                        {
                            name: 'Roboto',
                            role: 'Escritor'
                        }
                    ],
                    dates: [
                        {
                            date: new Date,
                            type: 'venda'
                        }
                    ],
                    description: 'Descrição teste'
                }}
            />,
            {
                wrapper: Providers
            }
        );

        const buttonComponent = getByTestId('move-to-details-button');
        expect(buttonComponent).toBeTruthy();
    });

    it('should have button to add comic at cart', () => {
        const { getByTestId } = render(
            <ComicCard
                hasDescription
                comic={{
                    id: '1',
                    rare: true,
                    uri: 'photo_uri',
                    title: 'Homem Aranha #3',
                    quantity: 0,
                    price: 45.5,
                    creators: [
                        {
                            name: 'Roboto',
                            role: 'Escritor'
                        }
                    ],
                    dates: [
                        {
                            date: new Date,
                            type: 'venda'
                        }
                    ],
                    description: 'Descrição teste'
                }}
            />,
            {
                wrapper: Providers
            }
        );

        const buttonComponent = getByTestId('add-to-cart-button');
        expect(buttonComponent).toBeTruthy();
    });

    it('should have badge to show comic rarity', () => {
        const { getByTestId } = render(
            <ComicCard
                comic={{
                    id: '1',
                    rare: true,
                    uri: 'photo_uri',
                    title: 'Homem Aranha #3',
                    quantity: 0,
                    price: 45.5,
                    creators: [
                        {
                            name: 'Roboto',
                            role: 'Escritor'
                        }
                    ],
                    dates: [
                        {
                            date: new Date,
                            type: 'venda'
                        }
                    ],
                    description: 'Descrição teste'
                }}
            />,
            {
                wrapper: Providers
            }
        );

        const badgeComponent = getByTestId('badge-rarity');
        expect(badgeComponent).toBeTruthy();
    });
})