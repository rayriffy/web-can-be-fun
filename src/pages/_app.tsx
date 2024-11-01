import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <Container maxW="xl" py={12}>
            <Outlet />
        </Container>
    );
};

export default App;
