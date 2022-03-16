import React from 'react';

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
    return (
        <Container>

            <Header
                source={{ uri: 'https://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7/detail.jpg' }}
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
                    />
                    <Button
                        hasCartIcon
                        style={{
                            borderColor: '#fff',
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                    />
                </ButtonContainer>


                <ComicTitle>Ant-Man (2003) #4</ComicTitle>

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
                        <InfoTitle>Published:</InfoTitle>
                        <InfoSubject>December 31, 2019</InfoSubject>
                    </InfoContent>

                    <InfoContent>
                        <InfoTitle>Writer:</InfoTitle>
                        <InfoSubject>Daniel Way</InfoSubject>
                    </InfoContent>
                </DetailsInfoContainer>

                <DetailsInfoContainer>
                    <InfoContent>
                        <InfoTitle>Cover Artist:</InfoTitle>
                        <InfoSubject>December 31, 2019</InfoSubject>
                    </InfoContent>

                    <InfoContent>
                        <InfoTitle>Penciller:</InfoTitle>
                        <InfoSubject>Clayton Crain</InfoSubject>
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
                        <PriceSubject>48,56</PriceSubject>
                    </PriceContent>

                    <Button
                        title='Comprar'
                        type='secondary'
                        style={{
                            width: 150,
                            height: 40
                        }}
                    />
                </DetailsPriceContainer>
            </DetailsContent>





        </Container>
    );
}