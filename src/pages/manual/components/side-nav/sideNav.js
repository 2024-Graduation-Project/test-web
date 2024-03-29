import NavSection1 from "./nav-section/navSection1";
import NavSection2 from "./nav-section/navSection2";

function SideNav() {
    const section1Links = [
        { content: "Installation", scrollTo: 250 },
        { content: "Request/Response Format", scrollTo: 1100 },
        { content: "Using Axios", scrollTo: 1800 }
    ];
    const section2Links = [
        { content: "Other Uses", scrollTo: 2930 },
        { content: "Minecraft", scrollTo: 1500 }
    ];

    return (
        <div className='side-nav-container'>
            <div className='side-nav'>
                <NavSection1 sect1Links={section1Links}/>
                <NavSection2 sect2Links={section2Links}/>
            </div>

        </div>
    );
}

export default SideNav;