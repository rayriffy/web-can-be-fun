import { Link as ChakraLink } from "@chakra-ui/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { Link, type Path } from "../../router";

interface Props extends PropsWithChildren {
    to: Path;
}

export const PageLink: FunctionComponent<Props> = ({ to, children }) => {
    return (
        <ChakraLink asChild>
            <Link to={to}>{children}</Link>
        </ChakraLink>
    );
};
