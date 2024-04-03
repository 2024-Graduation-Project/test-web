function NavSection1({ sect1Links }) {

    return (
        <div className='side-nav-section'>
            <div className='side-nav-header'>GETTING STARTED</div>
            { sect1Links.map((link, index) => (
                <a className='side-nav-item'
                   key={index}
                   onClick={() => window.scrollTo({top: link.scroll.start, behavior:"smooth"})}>
                    { link.content }
                </a>
            ))}
        </div>
    );
}

export default NavSection1;