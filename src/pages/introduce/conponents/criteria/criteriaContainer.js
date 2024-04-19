import CriteriaExplain from "./criteriaExplain";
import CriteriaTable from "./criteriaTable";

function CriteriaContainer() {
    return (
        <div className='cri-container'>
            <div className='cri-title'>Classification Criteria</div>
            <CriteriaExplain />
            <CriteriaTable />
        </div>
    );
}

export default CriteriaContainer;