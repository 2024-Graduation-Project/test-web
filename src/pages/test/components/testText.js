import initialVisible from "../../../custom-hook/introduce/initialVisible";

function TestText() {
    const isVisible = initialVisible();

    return(
        <div className='test-text-container'>
            <p className={`test-text ${isVisible ? 'visible' : ''}`}>Try Now!</p>
        </div>
    )
}

export default TestText;