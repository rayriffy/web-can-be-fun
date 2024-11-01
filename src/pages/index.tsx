import { Heading, Text, VStack } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

const Page: FunctionComponent = () => {
    return (
        <VStack alignItems="start" gap={6}>
            <VStack alignItems="start" gap={1}>
                <Heading size="2xl">WEB CAN BE FUN!</Heading>
                <Text>Please choose demo from following options</Text>
            </VStack>
        </VStack>
    );
};

export default Page;
