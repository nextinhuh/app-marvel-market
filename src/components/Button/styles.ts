import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
    type: TypeProps;
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border-width: 3px;
    border-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY_400};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_400};
`;