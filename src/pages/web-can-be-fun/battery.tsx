import { BatteryLevel } from "@/apps/battery/BatteryLevel.tsx";
import { ChargingIndicator } from "@/apps/battery/ChargingIndicator.tsx";
import { SecureContextAlert } from "@/apps/battery/SecureContextAlert.tsx";
import { UnsupportedAlert } from "@/apps/battery/UnsupportedAlert.tsx";
import { useBatteryStatus } from "@/apps/battery/useBatteryStatus.ts";
import { Title } from "@/apps/commons/Title.tsx";
import { Box, HStack, VStack } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

const Page: FunctionComponent = () => {
    const { level, supported, charging } = useBatteryStatus();

    return (
        <Box opacity={!supported ? undefined : level + "%"}>
            <VStack align="start" gap={6}>
                <Title title="Battery Status API" description="Content will slowly fading based on battery level" />
                <SecureContextAlert />
                {!supported && <UnsupportedAlert />}
                <HStack gap={2} width="100%">
                    <ChargingIndicator isCharging={charging} />
                    <BatteryLevel level={level} />
                </HStack>
            </VStack>
        </Box>
    );
};

export default Page;
