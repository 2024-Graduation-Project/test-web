import { useEffect, useState } from "react";

function UseVisible() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, [])

    return isVisible;
}

export default UseVisible;