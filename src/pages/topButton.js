import { useState, useEffect } from "react";

function TopButton() {
    const [toggleButton, setToggleButton] = useState(false);

    function handleScroll() {
        const { scrollY } = window;
        scrollY > 200 ? setToggleButton(true) : setToggleButton(false);
    };

    function goToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`top-button ${ toggleButton ? 'visible' : ''}`} onClick={goToTop}>
            <img src='/images/top_button.png'/>
        </div>
    );
}

export default TopButton;