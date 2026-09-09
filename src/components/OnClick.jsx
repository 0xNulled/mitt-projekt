import { useState } from "react";

function OnClick() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={ () => setCount(count + 1)}>
                Klicka På Mig
            </button>
            <p> Antal Klick: {count}</p>
        </div>
    );
}

export default OnClick;