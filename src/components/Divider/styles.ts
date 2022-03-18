import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
}))`
    height: 5px;
    width: 100%;
    justify-content: center;
    align-self: center;
    align-items: center;
    border-radius: 16px;
`;