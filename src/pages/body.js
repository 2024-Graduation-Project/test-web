import IntroduceContent from './introduce/introduceContent';
import TestContent from "./test/testContent";
import ManualContent from './manual/manualContent';
import SpecificationContent from './specification/specificationContent';

const contents = 
[
    <IntroduceContent />,
    <TestContent />,
    <ManualContent />,
    <SpecificationContent />
];

function Body({ contentCode }) {
    return (
        <div className='body-container'>
            {contents.map((content, index) => contentCode === index && <div key={index}>{content}</div>)}
        </div>
    );
}

export default Body;