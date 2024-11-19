import { useState } from "react";
import { useMidiDevicesAtomState } from "./midiDevicesAtom.ts";
import type { ParsedMidiDevice } from "./types.ts";

export const useMidiDevices = () => {
    const [midiDevices, setMidiDevices] = useMidiDevicesAtomState();
    const [error, setError] = useState<Error | null>(null);

    const handleScan = async () => {
        setError(null);

        try {
            // Request browser permission to MIDI devices
            const midiAccess = await navigator.requestMIDIAccess({ sysex: false });

            // Map into iterable array
            const midiDevices = Array.from(midiAccess.inputs.entries()).map(
                ([id, midi]) => ({ id, midi }) satisfies ParsedMidiDevice,
            );
            setMidiDevices(midiDevices);
        } catch (e) {
            setError(e as Error);
        }
    };

    return {
        error,
        midiDevices,
        handleScan,
    };
};
