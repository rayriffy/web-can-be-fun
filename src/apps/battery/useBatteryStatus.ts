import { useEffect, useState } from "react";

export const useBatteryStatus = () => {
    const [supported, setSupported] = useState(false);
    const [charging, setCharging] = useState(false);
    const [level, setLevel] = useState(0);
    const [chargingTime, setChargingTime] = useState(0);
    const [dischargingTime, setDischargingTime] = useState(0);

    useEffect(() => {
        if ("getBattery" in navigator) {
            setSupported(true);
            //@ts-ignore No types for getBattery in Navigator, but trust me bro
            navigator.getBattery().then((battery) => {
                // set defaults then add listener to monitor future changes
                setCharging(battery.charging);
                setLevel(battery.level * 100);
                setChargingTime(battery.chargingTime);
                setDischargingTime(battery.dischargingTime);

                // listen for charging state to change
                battery.addEventListener("chargingchange", () => {
                    setCharging(battery.charging);
                });

                // listen for battery level change
                battery.addEventListener("levelchange", () => {
                    setLevel(battery.level * 100);
                });

                // listen event to monitor how long the device is charging/discharging
                battery.addEventListener("chargingtimechange", () => {
                    setChargingTime(battery.chargingTime);
                });
                battery.addEventListener("dischargingtimechange", () => {
                    setDischargingTime(battery.dischargingTime);
                });
            });
        }
    }, []);

    return {
        supported,
        charging,
        level,
        chargingTime,
        dischargingTime,
    };
};
