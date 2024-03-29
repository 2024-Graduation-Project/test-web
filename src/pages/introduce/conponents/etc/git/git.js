function Git() {
    const gitDoyeon = "https://github.com/Yeon228";
    const gitSuhyeon = "https://github.com/choisuchoi";

    return (
        <div className='git-container'>
            <p className='etc-title'>GitHub</p>
            <a href={`${gitDoyeon}`} target='_blank'>{gitDoyeon}</a><br/>
            <a href={`${gitSuhyeon}`} target='_blank'>{gitSuhyeon}</a>
        </div>
    );
}

export default Git;