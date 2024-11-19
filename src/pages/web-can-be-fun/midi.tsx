import { Button, VStack } from "@chakra-ui/react";
import type { FunctionComponent } from "react";
import { Title } from "../../apps/commons/Title.tsx";
import { MidiDevice } from "../../apps/midi/MidiDevice.tsx";
import { useMidiDevices } from "../../apps/midi/useMidiDevices.ts";

const Page: FunctionComponent = () => {
    const { handleScan, midiDevices } = useMidiDevices();

    return (
        <VStack align="start" gap={6}>
            <Title title="Web MIDI" description="Connect MIDI device to a computer, then start scan" />
            <Button onClick={handleScan}>Scan</Button>
            {midiDevices.map((device) => (
                <MidiDevice key={`midi-device-${device.id}`} {...device} />
            ))}
        </VStack>
    );
};

export default Page;
