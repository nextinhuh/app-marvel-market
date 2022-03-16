import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import backgroundImg from '@assets/background-img.png';

export const Container = styled.ImageBackground.attrs({
    source: backgroundImg
})`
    flex: 1;
    background-color: black;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${getStatusBarHeight() + 33}px 24px 58px;
`;