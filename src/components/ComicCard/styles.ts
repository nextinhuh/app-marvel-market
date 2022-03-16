import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    height: 120px;
    width: 100%;
    margin-bottom: 80px;
`;

export const CardContent = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT_BACKGROUND,
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
}))`
    flex-direction: row;

    height: 177px;
    width: 100%;
    border-radius: 20px;

    border-width: 2px;
    border-color: #09FBD3;
`;

export const Image = styled.Image.attrs(() => ({
    resizeMode: 'contain'
}))`
    height: 170px;
    width: 115px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
`;

export const DescriptionContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    margin-bottom: 15px;
    padding: 15px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.PRIMARY_800};
    `};
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    width: 90%;
    align-items: center;
    justify-content: space-between;
`;