function StarRating({ rating, max = 5 }) {
    return (
        <div>
            {Array.from({ length: max }, (_, i) => (
                <span
                    key={i}
                    style={{ color: i < rating ? "#f9e795" : "#ccc" }}
                    >★</span>
            ))}
        </div>
    );  
}

export default StarRating;