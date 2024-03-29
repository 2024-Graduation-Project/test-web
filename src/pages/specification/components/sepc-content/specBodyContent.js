import SepcSection1 from "./content-section/sepcSection1";
import SepcSection2 from "./content-section/sepcSection2";
import SepcSection3 from "./content-section/sepcSection3";

function SpecBodyContent() {
    return (
        <div className='content-container'>
            <SepcSection1 /><hr/>
            <SepcSection2 /><hr/>
            <SepcSection3 /><hr/>
        </div>
    )
}

export default SpecBodyContent;