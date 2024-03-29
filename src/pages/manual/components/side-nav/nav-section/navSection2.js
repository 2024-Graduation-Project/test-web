function NavSection2({ sect2Links }) {
    return (
        <div className='side-nav-section'>
            <div className='side-nav-header'>END POINTS</div>
            { sect2Links.map((link, index) => (
                <a className='side-nav-item' key={index} onClick={() => window.scrollTo({top: link.scrollTo, behavior: "smooth"})}>
                    { link.content }
                </a>
            ))}
        </div>
    );
}

export default NavSection2;