import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Nav } from './Nav';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 15px;
    max-width: 900px;
    margin: 0 auto;
`;

export const AppLayout = () => {
    return (
        <Container>
            <Nav />
            <Outlet />
            <Toaster />
        </Container>
    );
};