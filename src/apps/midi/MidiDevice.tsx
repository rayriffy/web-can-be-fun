import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Fragment, type FunctionComponent } from "react";
import { Note } from "./Note.tsx";
import { OPZBottomRow, OPZTopRow } from "./constants.ts";
import type { ParsedMidiDevice } from "./types.ts";
import { useMidiDevice } from "./useMidiDevice.ts";

export const MidiDevice: FunctionComponent<ParsedMidiDevice> = ({ id, midi }) => {
    const { notes } = useMidiDevice(midi);

    return (
        <VStack justify="center" align="start" gap={4}>
            <HStack align={"center"} justify={'space-between'} w={"100%"}>
                <VStack align="start" gap={0}>
                    <Heading>{midi.name}</Heading>
                    <Text fontSize={"xs"} color={'gray.600'}>Select track mode to instrument 6</Text>
                </VStack>
                {notes[notes.length - 1] && (
                    <Box>{notes[notes.length - 1]}</Box>
                )}
            </HStack>
            {/* Hard coded layout for OP-Z */}
            {midi.name?.toLowerCase().includes("op-z") && (
                <Fragment>
                    <VStack gap={2}>
                        <HStack>
                            {OPZTopRow.map((note, i) => (
                                <Note
                                    key={`opz-t-${id}-${note}-${i}`}
                                    note={note}
                                    enabled={notes.includes(note ?? -1)}
                                />
                            ))}
                        </HStack>
                        <HStack>
                            {OPZBottomRow.map((note, i) => (
                                <Note
                                    key={`opz-b-${id}-${note}-${i}`}
                                    note={note}
                                    enabled={notes.includes(note ?? -1)}
                                />
                            ))}
                        </HStack>
                    </VStack>
                </Fragment>
            )}
            {/* For generic MIDI device, just show many key pressed */}
            <VStack gap={2}>
                <HStack>
                    {Array.from({ length: 14 }).map((_, i) => (
                        <Box
                            key={`generic-${id}-${i}`}
                            w={6}
                            h={16}
                            transition="backgrounds"
                            transitionDuration="200ms"
                            backgroundColor={notes.length > i ? "blue.400" : "gray.100"}
                        />
                    ))}
                </HStack>
            </VStack>
        </VStack>
    );
};
