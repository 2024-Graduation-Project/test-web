import { useEffect, useState } from "react";

function ScrollVisible(scrollY) {
    const [isVisible, setIsVisible] = useState(false);

    function handleScroll() {
        if(window.scrollY > scrollY) setIsVisible(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [window.scrollY]);

    return isVisible;
}

export default ScrollVisible;