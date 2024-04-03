import ManualBody from "./components/manualBody.js";
import initialVisible from "../../custom-hook/introduce/initialVisible";

function ManualContent() {
    const isVisible = initialVisible();

    return(
        <div className='manual-container'>
            <div className='manual-image-container'>
                {/* 이곳에 이미지 선언 */}
            </div>
            <div className={`manual-text-container ${isVisible ? 'visible' : ''}`}><p>How To Start?</p></div>
            <ManualBody />
        </div>
    )
}

export default ManualContent