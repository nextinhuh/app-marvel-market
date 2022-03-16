import styled, { css } from 'styled-components/native';
import backgroundImg from '@assets/background-img.png';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ImageBackground.attrs({
    source: backgroundImg
})`
    flex: 1;
    background-color: black;
`;

export const Header = styled.ImageBackground`
    width: 100%;
    height: 400px;
    justify-content: space-between;
`;

export const ButtonContainer = styled.View`
    padding: ${getStatusBarHeight() + 33}px 24px 58px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ComicTitle = styled.Text`
    font-size: 28px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    text-align: center;
    color: white;
`;

export const DetailsContent = styled.View`
    padding: 20px;
`;

export const DetailsTitle = styled.Text`
    font-size: 20px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    text-align: center;
    color: white;
    margin-bottom: 20px;
`;

export const DetailsInfoContainer = styled.View`
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const InfoContent = styled.View`
    width: 70%;
`;

export const InfoTitle = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: white;
`;

export const InfoSubject = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
`;

export const DetailsPriceContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PriceContent = styled.View`
    flex-direction: row;
`;

export const PriceTitle = styled.Text`
    font-size: 32px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: white;
    margin-right: 12px;
`;

export const PriceSubject = styled.Text`
    font-size: 32px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
`;