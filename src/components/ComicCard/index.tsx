import React from 'react';
import { ViewProps } from 'react-native';
import { Badge } from 'react-native-paper';

import { ComicProps } from '@hooks/comic';

import { Button } from '../Button';

import {
    Container,
    CardContent,
    Image,
    Title,
    ButtonContainer,
    DescriptionContainer,
    CartContainer,
    PriceContent,
    PriceSubject,
    PriceTitle,
    QuantityContainer,
    QuantityText
} from './styles';

type Props = ViewProps & {
    comic: ComicProps;
    hasDescription?: boolean;
    onDetail?: () => void;
    addComicToCart?: () => void;
    removeComicFromCart?: () => void;
}

export function ComicCard({
    comic,
    onDetail,
    hasDescription,
    addComicToCart,
    removeComicFromCart,
    ...rest
}: Props) {
    return (
        <Container {...rest}>
            <CardContent>
                <Image source={{ uri: comic.uri }} />

                {hasDescription ? (
                    <DescriptionContainer>
                        <Title>{comic.title}</Title>

                        <Badge
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 15,
                                backgroundColor: comic.rare ? 'orange' : 'green'
                            }}
                        >{comic.rare ? 'RARO' : 'COMUN'}</Badge>

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
                                onPress={addComicToCart}
                            />
                        </ButtonContainer>
                    </DescriptionContainer>
                ) : (
                    <CartContainer>
                        <Title>{comic.title}</Title>

                        <Badge
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 15,
                                backgroundColor: comic.rare ? 'orange' : 'green'
                            }}
                        >{comic.rare ? 'RARO' : 'COMUN'}</Badge>

                        <PriceContent>
                            <PriceTitle>R$</PriceTitle>
                            <PriceSubject>{comic.price}</PriceSubject>

                            <QuantityContainer>
                                <Button
                                    type='secondary'
                                    hasPlusIcon
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 20,
                                    }}
                                    onPress={addComicToCart}
                                />
                                <QuantityText>{comic.quantity}</QuantityText>
                                <Button
                                    type='secondary'
                                    hasMinusIcon
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 20
                                    }}
                                    onPress={removeComicFromCart}
                                />
                            </QuantityContainer>
                        </PriceContent>
                    </CartContainer>
                )}

            </CardContent>
        </Container>
    );
}