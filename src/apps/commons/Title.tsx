import { Heading, Text, VStack } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

interface Props {
    title: string;
    description: string;
}

export const Title: FunctionComponent<Props> = ({ title, description }) => {
    return (
        <VStack alignItems="start" gap={1}>
            <Heading size="2xl">{title}</Heading>
            <Text>{description}</Text>
        </VStack>
    );
};
