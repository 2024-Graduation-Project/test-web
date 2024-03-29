import { useState, useEffect } from "react";

function Reason() {
    const [isVisible, setIsVisible] = useState(false);
    const reasonsText = [
        "API For Personal Servers For Game Operators",
        "Preventing Slang From Being Exposed To Users",
        "Reduce Operational Costs To Improve User Experience"
    ];

    function handleScroll() {
        if(window.scrollY > 200) setIsVisible(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <div className='reason-container'>
            {reasonsText.map((reasons, index) => (
                <div key={reasons} className={`reason-text ${isVisible ? 'visible' : ''}`}>
                    {reasons}
                </div>
            ))}
        </div>
    );
}

export default Reason;