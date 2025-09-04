import React from "react";
import styles from './Wheel.module.css';

type Props = {
    sliceAngle: number;
    wheelItems: string[];
}

export function WheelSvg({ sliceAngle, wheelItems }: Props) {

    const radius = 160;

    return <svg className={styles.wheel}
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >

        {wheelItems.map((item, index) => {
            const startAngle = sliceAngle * index;
            const endAngle = sliceAngle * (index + 1);

            const midAngle = (startAngle + endAngle) / 2;

            // Dilimlerin başlangıç ve bitiş koordinatlarını hesaplıyorum
            const x1 = radius + radius * Math.cos((Math.PI * startAngle) / 180);
            const y1 = radius + radius * Math.sin((Math.PI * startAngle) / 180);
            const x2 = radius + radius * Math.cos((Math.PI * endAngle) / 180);
            const y2 = radius + radius * Math.sin((Math.PI * endAngle) / 180);

            const largeArc = sliceAngle > 180 ? 1 : 0;

            // Yazı konumunu belirlemek için (yarıçapın %65'inde)
            const textX = radius + (radius * 0.65) * Math.cos((Math.PI * midAngle) / 180);
            const textY = radius + (radius * 0.65) * Math.sin((Math.PI * midAngle) / 180);


            return (
                <g key={index}>
                    <path
                        d={`M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`}
                        fill={index % 2 === 0 ? "#9ACBD0"
                            : "#48A6A7"}
                        stroke="#123458"
                        strokeWidth="0.5"
                    />
                    <text
                        x={textX}
                        y={textY}
                        fill="white"
                        fontSize="14"
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${midAngle}, ${textX}, ${textY})`}
                    >
                        {item}
                    </text>
                </g>
            );
        })}
    </svg>

}