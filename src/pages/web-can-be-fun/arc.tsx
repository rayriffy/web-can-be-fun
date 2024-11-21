import { ArcBrowserAlert } from "@/apps/arc/ArcBrowserAlert.tsx";
import { Title } from "@/apps/commons/Title.tsx";
import { Heading, VStack } from "@chakra-ui/react";

const Page = () => {
    return (
        <VStack align="start" gap={6}>
            <Title
                title="Arc Browser CSS hacks"
                description="You can actually pickpocketing Arc browser theme color to your web!"
            />
            <ArcBrowserAlert />
            <VStack
                background="var(--arc-palette-background, black)"
                width="100%"
                aspectRatio={1}
                borderRadius={8}
                justifyContent="center"
                alignItems="center"
                gap={2}
            >
                <Heading size="4xl" color="var(--arc-palette-foregroundPrimary, black)">
                    Hello JSConf JP
                </Heading>
                <Heading size="2xl" color="var(--arc-palette-foregroundSecondary, black)">
                    おはよ、JSConf JP
                </Heading>
            </VStack>
        </VStack>
    );
};

export default Page;
