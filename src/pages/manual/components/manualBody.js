import SideNav from './side-nav/sideNav'
import BodyContent from "./body-content/bodyContent";

function ManualBody() {
    return(
        <div className='manual-body-container'>
            <SideNav />
            <BodyContent />
        </div>
    );
}

export default ManualBody;