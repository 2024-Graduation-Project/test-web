import {serverURL} from "../../../specification/specificationText";
import scrollVisible from "../../../../custom-hook/introduce/scrollVisible";

function CriteriaTable() {
    const isVisible = scrollVisible(3600);

    return(
        <div className='cri-table-container'>
            <div className='table-section'>
                <table className='default-cri-table'>
                    <thead>
                    <tr><th colSpan="3">방송통신심의위원회</th></tr>
                    <tr><th>등급</th><th>내용정의</th><th>세부내용</th></tr>
                    </thead>
                    <tbody>
                    <tr><td>level 4</td><td>노골적이고 외설적인 비속어</td><td>상대의 인격 모독할 의도가 분명하고 폭력적이라고 느껴지는 비속어</td></tr>
                    <tr><td>level 3</td><td>심한비속어</td><td>상대가 욕으로 받아들여 심한 불쾌함과 수치심을 느끼게하는 비속어</td></tr>
                    <tr><td>level 2</td><td>거친비속어</td><td>상대방의 기분을 상하게 할수있는 거친 비속어</td></tr>
                    <tr><td>level 1</td><td>일상비속어</td><td>상대의 기분을 상하게 하지 않는 악의 없는 비속어</td></tr>
                    <tr><td>level 0</td><td>비속어 없음</td><td>---</td></tr>
                    </tbody>
                </table>
                <div className={`cri-table-arrow ${isVisible ? 'visible' : ''}`}>
                    <img src='/images/arrow-down.png'/>
                </div>
                <table className='new-cri-table'>
                    <thead>
                    <tr><th colSpan="3">Swear Monitor</th></tr>
                    <tr><th>등급</th><th>내용정의</th><th>세부내용</th></tr>
                    </thead>
                    <tr><td>level 3</td><td>노골적이고 외설적인 비속어</td><td>상대의 인격 모독할 의도가 분명하고 폭력적이라고 느껴지는 비속어</td></tr>
                    <tr><td>level 2</td><td>거친비속어</td><td>상대방의 기분을 상하게 할수있는 거친 비속어</td></tr>
                    <tr><td>level 1</td><td>혐오발언</td><td>비속어가 들어가 있지 않지만, 특정 집단을 폄하하는 발언</td></tr>
                    <tr><td>level 0</td><td>비속어 없음</td><td>---</td></tr>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CriteriaTable;