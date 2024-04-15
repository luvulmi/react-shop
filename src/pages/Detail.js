import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail(props) {

    // mount, update 시 코드 실행.
    // 언제쓰면 좋을까?
    // html 렌더링 후에 동작함!!!
    // 1. 서버에서 데이터 가져오기
    // 2. 어려운 연산
    // 3. 타이머 장착하는 거
    // 사이드 effect

    
    let [count, setCount] = useState(0);
    let [isAlert, setIsAlert] = useState(true);
    let [inputText, setInputText] = useState('');
    
    let {id} = useParams();
    
    const shoes = props.shoes.find(data => data.id == id);
    
    useEffect(() => {
        let al = setTimeout(() => {setIsAlert(false)},2000);
        return () => {
            // useEffect 동작 전에 실행.
            // 예) 타임아웃 제거, 기존 데이터 요청 제거
            // mount시 실행x. unmount시 실행됨.
            clearTimeout(al);
        }
    },[]) // 실행조건을 넣을 수 있는 곳. 빈 조건은 mount 시 1회만 실행. update 시엔 실행x.

    useEffect(()=> {
        if( isNaN(inputText) == true){
            alert('이러지마세요');
            return;
        }
    }, [inputText])

    return(
        <div className="container">
            {isAlert && 
            <div className="alert alert-warning" onClick={()=>{alert('구매 성공')}}>
                !! 2초 이내 구매 시 할인 !!
            </div>}
            <div className="row">
                <div className="col-md-6">
                    <img src={shoes.img} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            <input onChange={(e)=>{setInputText(e.target.value)}}></input>
        </div> 
    )
}