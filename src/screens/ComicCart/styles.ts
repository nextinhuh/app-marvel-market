import styled, { css } from 'styled-components/native';
import backgroundImg from '@assets/background-img.png';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ImageBackground.attrs({
    source: backgroundImg
})`
    flex: 1;
    background-color: black;
`;

export const Header = styled.View`
    padding: ${getStatusBarHeight() + 33}px 24px 40px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    text-align: center;
    color: white;
    margin-left: 70px;
`;

export const CouponContainer = styled.View`
    width: 55%;
    align-self: center;
    flex-direction: row;
    margin: 10px 0;
    justify-content: space-between;
`;

export const InputAreaBorder = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
}))`
    height: 44px;
    width: 150px;
    justify-content: center;
    align-self: center;
    align-items: center;
    border-radius: 16px;
`;

export const InputArea = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: #EFEFEF;
    width: 97%;
    margin: 4px;
    border-radius: 14px;
`;

export const CouponInput = styled.TextInput`
    flex: 1;
    height: 52px;
    padding-left: 12px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    background-color: transparent;
`;

export const BuyButton = styled.TouchableOpacity`
    background-color: rgb(0, 255, 155);
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 60px;
`;

export const BuyButtonText = styled.Text`
    font-size: 28px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    text-align: center;
    color: white;
    margin-right: 20px;
`;

export const PriceContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PriceTitle = styled.Text`
    font-size: 22px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: white;
    margin-right: 12px;
`;

export const PriceSubject = styled.Text`
    font-size: 22px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_400};

    margin-right: 35px;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;