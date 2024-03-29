function Menu({ selectContent }) {
    const menuItems = [
        { code: 1, value: 'API Test' },
        { code: 2, value: 'Manual' },
        { code: 3, value: 'Specification' },
    ]

    return (
        <div className='main-header'>
            <div className='main-logo'>
                <p onClick={() => selectContent(0)}>API Name</p>
            </div>
            <div className='page-select'>
                { 
                    menuItems.map((item) => (
                        <a key={item.code} onClick={() => selectContent(item.code)}>{item.value}</a>
                ))}
            </div>
        </div>
        
    ) 
}

export default Menu;