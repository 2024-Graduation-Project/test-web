import {useEffect, useState} from "react";

function CurrentViewMenu(scrollY) {
    const [isView, setIsView] = useState(false);
    console.log(scrollY);

    function handleView() {
        if(scrollY.start <= window.scrollY < scrollY.end) setIsView(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleView);

        return () => {
            window.removeEventListener("scroll", handleView);
        };
    }, [window.scrollY]);

    return isView;
}

export default CurrentViewMenu;