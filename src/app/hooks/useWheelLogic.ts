import { useState } from "react";

export function useWheelLogic() {

    const [rotation, setRotation] = useState(0);
    const [winningItem, setWinningItem] = useState<string | null>(null);

    const rewards: Reward[] = [
        { min: 0, max: 39, values: [1, 3] },
        { min: 40, max: 69, values: [5, 10] },
        { min: 70, max: 89, values: [15, 25] },
        { min: 90, max: 97, values: [50] },
        { min: 98, max: 99, values: [100] }
    ];

    const wheelItems = rewards.flatMap(r => r.values.map(v => `${v} Token`));
    const sliceAngle = 360 / wheelItems.length;
    const animationDuration = 4;

    const getRandomReward = () => {
        const randomNum = Math.floor(Math.random() * 100);
        for (let reward of rewards) {
            if (randomNum >= reward.min && randomNum <= reward.max) {
                const values = reward.values;
                const randomIndex = Math.floor(Math.random() * values.length);
                return values[randomIndex];
            }
        }
    };

    const spinWheel = () => {
        const rewardValue = getRandomReward();
        const rewardIndex = wheelItems.findIndex(item =>
            item.startsWith(`${rewardValue}`)
        );
        const targetAngle = rewardIndex * sliceAngle + sliceAngle / 2;
        const randomSpin = 360 * animationDuration + (360 - targetAngle);
        const newRotation = rotation + randomSpin;

        setRotation(newRotation);
        setWinningItem(null);

        setTimeout(() => {
            const finalAngle = newRotation % 360;
            const winningAngle = (360 - finalAngle + 270) % 360;
            const winningIndex = Math.floor(winningAngle / sliceAngle);
            setWinningItem(wheelItems[winningIndex]);
        }, animationDuration * 1000);
    };

    return { rotation, winningItem, spinWheel, wheelItems, sliceAngle, animationDuration };
}
