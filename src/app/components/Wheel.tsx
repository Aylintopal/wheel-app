import React, { useEffect, useState } from 'react';
import styles from './Wheel.module.css';
import { IStorage } from '../storage/IStorage';
import { LocalStorageService } from '../storage/LocalStorageService';
import { motion } from 'framer-motion';
import { SpinButton } from './SpinButton';
import { useCountDown } from '../hooks/useCountDown';
import { useWheelLogic } from '../hooks/useWheelLogic';
import { WheelSvg } from './WheelSvg';
import { WinningItem } from './WinningItem';
import { WheelArrow } from './WheelArrow';
import { WheelTitle } from './WheelTitle';

export function Wheel() {

    const storage: IStorage = new LocalStorageService();

    const { hours, minutes, seconds, isActive, startCountdown } = useCountDown(storage);

    const { rotation, wheelItems, spinWheel, winningItem, sliceAngle, animationDuration } =
        useWheelLogic();

    const spinFunction = () => {
        spinWheel();
        startCountdown();
    };

    return (
        <div
            className={styles.container}
        >
            <WheelTitle></WheelTitle>

            <WheelArrow></WheelArrow>

            <motion.div
                className="flex items-center justify-center"
                animate={{ rotate: rotation }}
                transition={{ duration: animationDuration, ease: "easeOut" }}
            >
                <WheelSvg sliceAngle={sliceAngle} wheelItems={wheelItems}></WheelSvg>

            </motion.div>

            <SpinButton isActive={isActive} onClick={spinFunction} hours={hours} minutes={minutes} seconds={seconds}></SpinButton>

            <WinningItem winningItem={winningItem}></WinningItem>

        </div>
    );
}