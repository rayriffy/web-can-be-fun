import { Container } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <JotaiProvider>
            <Container maxW="xl" py={12}>
                <Outlet />
            </Container>
        </JotaiProvider>
    );
};

export default Layout;
