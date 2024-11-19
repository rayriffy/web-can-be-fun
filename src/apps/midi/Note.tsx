import { Box } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

interface Props {
    note: number | null;
    enabled?: boolean;
}

export const Note: FunctionComponent<Props> = ({ note, enabled }) => {
    if (note)
        return (
            <Box
                w={6}
                h={6}
                transition="backgrounds"
                transitionDuration="200ms"
                backgroundColor={enabled ? "green.400" : "gray.100"}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize="2xs"
                color={"gray.700"}
            >
                {note}
            </Box>
        );
    else return <Box w={6} h={6} />;
};
