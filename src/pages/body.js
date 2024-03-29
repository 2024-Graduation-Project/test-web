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
        contents.map((content, index) => contentCode === index && <div key={index}>{content}</div>)        
    );
}

export default Body;