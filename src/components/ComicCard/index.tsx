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
}

export function ComicCard({ uri, ...rest }: Props) {
    return (
        <Container {...rest}>
            <CardContent>
                <Image source={{ uri }} />

                <DescriptionContainer>
                    <Title>Spider-man (2003) #1</Title>

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
                                width: 95
                            }}
                        />
                    </ButtonContainer>
                </DescriptionContainer>
            </CardContent>
        </Container>
    );
}