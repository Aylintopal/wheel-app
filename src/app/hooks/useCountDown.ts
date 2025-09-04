import { useEffect, useState } from "react";
import { IStorage } from "../storage/IStorage";

export function useCountDown(storage: IStorage) {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [target, setTarget] = useState<Date | null>(null);

    const duration = 24 * 60 * 60 * 1000;
    const testDuration = 10 * 1000;

    const startCountdown = () => {
        const now = Date.now();
        storage.setData("lastSpinTime", now.toString());

        const targetTime = now + testDuration;

        setTarget(new Date(targetTime));
        setIsActive(false);
    };

    useEffect(() => {
        const loadLastSpinTime = async () => {
            const lastSpin = await storage.getData("lastSpinTime");

            if (lastSpin) {
                const nextSpin = Number(lastSpin) + testDuration;
                const remaining = nextSpin - Date.now();
                if (remaining > 0) {
                    setTarget(new Date(nextSpin));
                    setIsActive(false);
                }
            }
        };

        loadLastSpinTime();
    }, []);

    useEffect(() => {
        if (!target) return;

        const interval = setInterval(() => {

            const now = new Date();
            const difference = Math.max(target.getTime() - now.getTime(), 0);

            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setHours(h);
            setMinutes(m);
            setSeconds(s);

            if (h <= 0 && m <= 0 && s <= 0) {
                setIsActive(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [target]);

    return { hours, minutes, seconds, isActive, startCountdown };

}