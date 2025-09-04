export function WheelArrow() {

    return <div className="arrow">
        <div className="relative"  >
            <div
                className="absolute top-1 -translate-x-1/2 z-1"
                style={{
                    borderLeft: '14px solid transparent',
                    borderRight: '14px solid transparent',
                    borderTop: '30px solid #004a5a',
                }}
            />
        </div>
    </div>
}