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
    
    let {id} = useParams();
    
    const shoes = props.shoes.find(data => data.id == id);
    
    useEffect(() => {
        setTimeout(() => {setIsAlert(false)},2000);
    })

    console.log('isAlert=>',isAlert);

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
        </div> 
    )
}