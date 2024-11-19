import { atom, useAtom, useAtomValue } from "jotai";
import type { ParsedMidiDevice } from "./types.ts";

export const midiDevicesAtom = atom<ParsedMidiDevice[]>([]);

export const useMidiDevicesAtomState = () => useAtom(midiDevicesAtom);
export const useMidiDevicesAtomValue = () => useAtomValue(midiDevicesAtom);
