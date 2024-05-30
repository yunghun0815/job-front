import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Header } from 'widgets/header';

export const Layout = () => {
    return (
        <>
            <Header />
            <Box display={'flex'} width={'100dvw'} height={'100dvh'}>
                <Outlet />
            </Box>
        </>
    );
}