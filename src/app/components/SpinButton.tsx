import styles from './Wheel.module.css';

type Props = {
    isActive: boolean;
    onClick: () => void;
    hours: number;
    minutes: number;
    seconds: number;

}

export function SpinButton({ isActive, onClick, hours, minutes, seconds }: Props) {

    return <div className="spin-button">
        {isActive ? (
            <button onClick={onClick} className={styles.spinButton}> Çevir </button>
        ) : (
            <button disabled className={styles.disabledButton}>
                Tekrar çevirmek için {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')} kaldı
            </button>
        )}
    </div>

}