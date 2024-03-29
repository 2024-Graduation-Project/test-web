import { useEffect, useState } from "react";

function InitialVisible() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, [])

    return isVisible;
}

export default InitialVisible;