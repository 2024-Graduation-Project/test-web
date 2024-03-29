import ContentSection1 from "./content-section/contentSection1";
import ContentSection2 from "./content-section/contentSection2";
import ContentSection3 from "./content-section/contentSection3";
import ContentSection4 from "./content-section/contentSection4";

function BodyContent() {
    return (
        <div className='content-container'>
            <ContentSection1 /><hr/>
            <ContentSection2 /><hr/>
            <ContentSection3 /><hr/>
            <ContentSection4 /><hr/>
        </div>
    );
}

export default BodyContent;