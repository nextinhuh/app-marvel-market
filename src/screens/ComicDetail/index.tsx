import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ComicNavigationProps } from '../../@types/navigation';
import { useComic } from '@hooks/comic';

import { Button } from '@components/Button';
import { Divider } from '@components/Divider';

import {
    Container,
    ButtonContainer,
    ComicTitle,
    Header,
    DetailsContent,
    DetailsTitle,
    DetailsInfoContainer,
    InfoContent,
    InfoTitle,
    InfoSubject,
    DetailsPriceContainer,
    PriceContent,
    PriceTitle,
    PriceSubject,
} from './styles';


export function ComicDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { comic } = route.params as ComicNavigationProps;
    const { addComicToCart } = useComic();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleCart() {
        navigation.navigate('cart');
    }

    return (
        <Container>

            <Header
                source={{ uri: comic?.uri }}
            >
                <ButtonContainer>
                    <Button
                        hasArrowLeftIcon
                        style={{
                            borderColor: '#fff',
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={handleGoBack}
                    />
                    <Button
                        hasCartIcon
                        style={{
                            borderColor: '#fff',
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={handleCart}
                    />
                </ButtonContainer>


                <ComicTitle>{comic?.title}</ComicTitle>

            </Header>

            <Divider
                style={{
                    marginTop: -2,
                    width: '80%'
                }}
            />

            <DetailsContent>
                <DetailsTitle>Detalhes</DetailsTitle>

                <DetailsInfoContainer>
                    <InfoContent>
                        <InfoTitle>Publicado:</InfoTitle>
                        <InfoSubject>{comic?.dates.map(comicData => {
                            if (comicData.type === 'onsaleDate') {
                                return comicData.date;
                            }
                        })}</InfoSubject>
                    </InfoContent>

                    <InfoContent>
                        <InfoTitle>Escritor:</InfoTitle>
                        <InfoSubject>{comic?.creators.map(comicData => {
                            if (comicData.role === 'writer') {
                                return comicData.name;
                            }
                        })}</InfoSubject>
                    </InfoContent>
                </DetailsInfoContainer>

                <DetailsInfoContainer>
                    <InfoContent>
                        <InfoTitle>Letrista:</InfoTitle>
                        <InfoSubject>{comic?.creators.map(comicData => {
                            if (comicData.role === 'letterer') {
                                return comicData.name;
                            }
                        })}</InfoSubject>
                    </InfoContent>

                    <InfoContent>
                        <InfoTitle>Desenhista:</InfoTitle>
                        <InfoSubject>{comic?.creators.map(comicData => {
                            if (comicData.role === 'penciler' || comicData.role === 'penciler (cover)') {
                                return comicData.name;
                            }
                        })}</InfoSubject>
                    </InfoContent>
                </DetailsInfoContainer>
            </DetailsContent>

            <Divider
                style={{
                    marginTop: 10,
                    width: '35%',
                    borderWidth: 1
                }}
            />

            <DetailsContent>
                <DetailsTitle>Valor</DetailsTitle>

                <DetailsPriceContainer>
                    <PriceContent>
                        <PriceTitle>R$</PriceTitle>
                        <PriceSubject>{comic?.price}</PriceSubject>
                    </PriceContent>

                    <Button
                        title='Comprar'
                        type='secondary'
                        style={{
                            width: 150,
                            height: 40
                        }}
                        onPress={() => addComicToCart(comic)}
                    />
                </DetailsPriceContainer>
            </DetailsContent>





        </Container>
    );
}