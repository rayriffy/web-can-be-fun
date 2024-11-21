import { Link, List, VStack } from "@chakra-ui/react";
import type { FunctionComponent } from "react";
import { LuExternalLink } from "react-icons/lu";
import { PageLink } from "../../apps/commons/PageLink.tsx";
import { Title } from "../../apps/commons/Title.tsx";

const Page: FunctionComponent = () => {
    return (
        <VStack alignItems="start" gap={6}>
            <Title title="WEB CAN BE FUN!" description="Please choose demo from following options" />
            <List.Root>
                <List.Item>
                    <Link href="https://theuselessweb.com/">
                        The Useless Web <LuExternalLink />
                    </Link>
                </List.Item>
                <List.Item>
                    <Link href="https://eelslap.com/">
                        Eel Slap <LuExternalLink />
                    </Link>
                </List.Item>
                <List.Item>
                    <PageLink to="/web-can-be-fun/arc">Arc Browser</PageLink>
                </List.Item>
                <List.Item>
                    <PageLink to="/web-can-be-fun/midi">Web MIDI</PageLink>
                </List.Item>
                <List.Item>
                    <PageLink to="/web-can-be-fun/battery">Battery Status API</PageLink>
                </List.Item>
            </List.Root>
        </VStack>
    );
};

export default Page;
