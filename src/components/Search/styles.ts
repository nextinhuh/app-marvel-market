import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 24px;
`;

export const InputAreaBorder = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
}))`
    height: 44px;
    width: 250px;
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

export const Input = styled.TextInput`
    flex: 1;
    height: 52px;
    padding-left: 12px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    background-color: transparent;
`;

export const ButtonClear = styled.TouchableOpacity`
    margin-right: 7px;
`;

export const Button = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    margin-left: 7px;
    background-color: #EFEFEF;
`;