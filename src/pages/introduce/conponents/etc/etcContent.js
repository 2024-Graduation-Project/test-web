import Git from "./git/git";
import Contact from "./contact/contact";

function EtcContent() {
    return (
        <div className='etc-container'>
            <Git />
            <Contact />
        </div>
    );
}

export default EtcContent;