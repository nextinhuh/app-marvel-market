import React from 'react';
import { ViewProps } from 'react-native';
import { Button } from '../Button';

import {
    Container,
    CardContent,
    Image,
    Title,
    ButtonContainer,
    DescriptionContainer
} from './styles';

type Props = ViewProps & {
    uri: string;
    title: string;
}

export function ComicCard({ uri, title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <CardContent>
                <Image source={{ uri }} />

                <DescriptionContainer>
                    <Title>{title}</Title>

                    <ButtonContainer>
                        <Button
                            title='Detalhes'
                            style={{
                                width: 95
                            }}
                        />

                        <Button
                            title='Comprar'
                            type='secondary'
                            hasIcon
                            style={{
                                width: 95,
                            }}
                        />
                    </ButtonContainer>
                </DescriptionContainer>
            </CardContent>
        </Container>
    );
}