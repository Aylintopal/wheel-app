
type Props = {
    winningItem: string | null;
}

export function WinningItem({ winningItem }: Props) {

    return <div className='winning item' >
        {winningItem && (
            <div className="mt-6 text-center">
                <h3 className="" style={{
                    fontWeight: 600,
                    color: "#000",
                    fontSize: 18,
                }}>
                    Tebrikler! Kazandığınız ödül:
                </h3>
                <p className="" style={{
                    fontSize: 30,
                    color: "#00809D",
                    fontWeight: 600
                }}>
                    {winningItem}
                </p>
            </div>
        )}
    </div>
}