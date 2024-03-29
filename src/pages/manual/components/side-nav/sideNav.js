import NavSection1 from "./nav-section/navSection1";
import NavSection2 from "./nav-section/navSection2";

function SideNav() {
    const section1Links = [
        { content: "Installation", scroll: { start: 250, end: 1100 }},
        { content: "Request/Response Format", scroll: { start: 1100, end: 1800 } },
        { content: "Using Axios", scroll: { start: 1800, end: 2930 }}
    ];
    const section2Links = [
        { content: "Other Uses", scroll: { start: 2930, end: 3800 }},
        { content: "Minecraft", scroll: { start: 3800, end: 4900 }}
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