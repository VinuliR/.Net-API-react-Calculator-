export function NumPadButton({ display, onClick }) {
    return (
        <button onClick={() => onClick(display) }
            style={{ backgroundColor: "blue", color: "white" }}>{display}</button>
    )
}