import { useEffect, useState } from "react";

export const useMidiDevice = (input: MIDIInput) => {
    const [notes, setNotes] = useState<number[]>([]);

    useEffect(() => {
        console.log(`mounted ${input.name}`);

        // Start listening for MIDI events
        input.onmidimessage = (event) => {
            const [status, note, velocity] = event.data!;

            // Message when note on
            if ((status & 0xf0) === 0x90 && velocity > 0) {
                console.log("note pressed!", note);
                setNotes((notes) => [...notes, note]);
            }
            // Message when note off
            else if ((status & 0xf0) === 0x80 && velocity === 0) {
                console.log("note released!", note);
                setNotes((notes) => notes.filter((n) => n !== note));
            }
        };
        return () => {
            console.log(`unmounted ${input.name}`);
            input.onmidimessage = null;
        };
    }, [input]);

    return {
        notes,
    };
};
