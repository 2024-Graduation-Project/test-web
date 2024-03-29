import SideBlock from "./side-block/sideBlock";
import SpecBodyContent from "./sepc-content/specBodyContent";

function SpecBody() {
    return (
        <div className='spec-body-container'>
            <SideBlock />
            <SpecBodyContent />
        </div>
    )
}

export default SpecBody;