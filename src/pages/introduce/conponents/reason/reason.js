import scrollVisible from "../../../../custom-hook/introduce/scrollVisible";

function Reason({ reasonsText }) {
    const isVisible = scrollVisible(200);

    return (
        <div className='reason-container'>
            {reasonsText.map((reasons, index) => (
                <div key={reasons} className={`reason-text ${isVisible ? `visible${reasons.visible}` : ''}`}>
                    {reasons.content}
                </div>
            ))}
        </div>
    );
}

export default Reason;