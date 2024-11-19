import { Box, Text } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

interface Props {
    isCharging: boolean;
}

export const ChargingIndicator: FunctionComponent<Props> = ({ isCharging }) => {
    return (
        <Box background={isCharging ? "green.500" : "gray.200"} px={4} py={2} borderRadius={8} flexShrink={0}>
            <Text textStyle="xs" fontWeight="bold" color={isCharging ? "white" : "black"} textTransform="uppercase">
                {isCharging ? "Charging" : "Not charging"}
            </Text>
        </Box>
    );
};
