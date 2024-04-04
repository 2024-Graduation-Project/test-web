import initialVisible from "../../../../custom-hook/introduce/initialVisible";

function TestHeader() {
    const isVisible = initialVisible();

    return (
        <div className='test-header'>
            <div className='test-image-container'>
                <img className="main-image" src="./images/3.jpg"></img>
            </div>
            <div className={`test-text-container ${isVisible ? 'visible' : ''}`}><p>Test Our API!</p></div>
        </div>
    );
}

export default TestHeader;