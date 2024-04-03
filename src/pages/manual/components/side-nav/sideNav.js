import navText from "./navText";

import NavSection1 from "./nav-section/navSection1";
import NavSection2 from "./nav-section/navSection2";

function SideNav() {
    return (
        <div className='side-nav-container'>
            <div className='side-nav'>
                <NavSection1 sect1Links={navText.section1Links}/>
                <NavSection2 sect2Links={navText.section2Links}/>
            </div>

        </div>
    );
}

export default SideNav;