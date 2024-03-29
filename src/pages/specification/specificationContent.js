import initialVisible from "../../custom-hook/introduce/initialVisible";
import SideBlock from "./components/side-block/sideBlock";
import SpecBody from "./components/specBody";

function SpecificationContent() {
    const isVisible = initialVisible();

    return(
        <div className='spec-container'>
            <div className='spec-image-container'>
                {/* 이곳에 이미지 선언 */}
            </div>
            <div className={`manual-text-container ${isVisible ? 'visible' : ''}`}><p>Specification</p></div>
            <SpecBody />
        </div>
    )
}

export default SpecificationContent;