import initialVisible from "../../../../custom-hook/introduce/initialVisible";

function Reason({ reasonsText }) {
    const isVisible = initialVisible();
    const test = "API for\nUser";

    return (
        <div className='reason-container'>
            {reasonsText.map((reasons, index) => (
                <div key={reasons.visible} className={`reason-text ${isVisible ? `visible${reasons.visible}` : ''}`}>
                    {reasons.content}
                </div>
            ))}
        </div>
    );
}

export default Reason;