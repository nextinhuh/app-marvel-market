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
    onDetail: () => void;
    onBuy: () => void;
}

export function ComicCard({
    uri,
    title,
    onBuy,
    onDetail,
    ...rest
}: Props) {
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
                            onPress={onDetail}
                        />

                        <Button
                            type='secondary'
                            hasCartIcon
                            style={{
                                width: 95,
                            }}
                            onPress={onBuy}
                        />
                    </ButtonContainer>
                </DescriptionContainer>
            </CardContent>
        </Container>
    );
}