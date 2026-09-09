function StatusBadge({ status }){
    const Colours = {
        active: "#02c39a",
        pending: "#f9e795",
        inactive: "#b85042",
    };

    return (
        <span 
            style={{
                background: Colours[status],
                padding: "4px 12px",
                borderRadius: 12, 
                color: "white",
            }}
            >
                {status.toUpperCase()}
        </span>
    );
}

export default StatusBadge;