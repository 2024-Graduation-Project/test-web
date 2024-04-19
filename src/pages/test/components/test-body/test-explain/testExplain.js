function TestExplain() {
    const testExplain = `심각도에 따른 분류


[lv3] : 노골적이고 외설적인 비속어
[lv2] : 거친 비속어
[lv1] : 비속어를 포함하지 않은 혐오발언
[lv0] : 비속어 없음


각 클래스의 우측의 숫자는 작성한 문장이 해당 클래스에 속할 확률입니다`;

    return (
        <div className='test-explain'>
            <pre>{testExplain}</pre>
        </div>
    );
}

export default TestExplain;


