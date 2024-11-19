import { ProgressBar, ProgressRoot, ProgressValueText } from "@/components/ui/progress.tsx";
import { Box, HStack } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

interface Props {
    level: number;
}

export const BatteryLevel: FunctionComponent<Props> = ({ level }) => {
    return (
        <Box width="100%">
            <ProgressRoot value={level} size="lg" borderRadius={8}>
                <HStack gap={4} width="100%">
                    <ProgressBar width="100%" />
                    <ProgressValueText>{level}%</ProgressValueText>
                </HStack>
            </ProgressRoot>
        </Box>
    );
};
