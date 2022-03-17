import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ComicCard } from '@components/ComicCard';
import { Divider } from '@components/Divider';
import { Button } from '@components/Button';
import { useComic } from '@hooks/comic';

import {
    Container,
    Header,
    Title,
    CouponContainer,
    CouponInput,
    InputArea,
    InputAreaBorder,
    BuyButton,
    BuyButtonText,
    PriceContent,
    PriceSubject,
    PriceTitle,
    Footer
} from './styles';

export function ComicCart() {
    const [coupon, setCoupon] = useState<string>('');
    const [value, setValue] = useState<number>(0);
    const navigation = useNavigation();
    const { comicCartList, addComicToCart, removeComicFromCart, verifyDiscount, validateCoupon } = useComic();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleValidateCoupon() {
        setValue(validateCoupon(value, coupon.toLocaleUpperCase()));
    }

    function calculateValue() {
        var value: number = 0;
        comicCartList.map(comic => {
            value += comic.price * comic.quantity;
        });

        const descountValue = verifyDiscount(value);
        setValue(Number((value - descountValue).toFixed(2)));
    }

    useFocusEffect(
        useCallback(() => {
            calculateValue();
        }, [comicCartList])
    );

    return (
        <Container>
            <Header>
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

                <Title>Carrinho</Title>


            </Header>

            <Divider
                style={{
                    borderWidth: 1,
                    width: '90%'
                }}
            />

            <FlatList
                data={comicCartList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ComicCard
                        comic={item}
                        addComicToCart={() => addComicToCart(item)}
                        removeComicFromCart={() => removeComicFromCart(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    marginHorizontal: 24,
                    paddingBottom: 90,
                }}
            />

            <Footer>
                <PriceContent>
                    <PriceTitle>R$</PriceTitle>
                    <PriceSubject>{value}</PriceSubject>
                </PriceContent>

                <CouponContainer>
                    <InputAreaBorder>
                        <InputArea>
                            <CouponInput
                                placeholder="Insira o cupom"
                                autoCapitalize='characters'
                                maxLength={5}
                                onChangeText={setCoupon}
                            />
                        </InputArea>
                    </InputAreaBorder>

                    <Button
                        type='secondary'
                        hasPlusIcon
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }}
                        onPress={handleValidateCoupon}
                    />
                </CouponContainer>
            </Footer>



            <Divider />

            <BuyButton>
                <BuyButtonText>Comprar</BuyButtonText>
                <EvilIcons name="cart" size={38} color="white" />
            </BuyButton>

        </Container>
    );
}