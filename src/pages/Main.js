import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import bgImg from '../img/bg.png';

/**
 * 메인 페이지
 * @param {*} props 
 * @returns 
 */
export default function Main(props) {
    const [shoes, setShoes] = useState(props.shoes); // 신발 데이터
    const [btnNum, setBtnNum] = useState(0); // 더보기 클릭 횟수
    const [showBtn, setShowBtn] = useState(true); // 더보기 버튼 유무
    const [showSpin, setShowSpin] = useState(false); // 로딩바 유무

    /**
     * 더보기 클릭 시
     */
    const fetchMoreData = () => {
        // 클릭 횟수 증가
        let num = btnNum + 1;
        setBtnNum(num);

        console.log('btnNum=>',btnNum); // useState 함수는 상태를 업데이트할 때 다음 렌더링 사이클에서 적용됨.

        // 로딩중 띄우기
        if(showBtn){
            setShowBtn(false);
            setShowSpin(true);
        }

        // 클릭 횟수 따른 url 설정
        let url = `https://codingapple1.github.io/shop/data${num + 1}.json`;
        if(num > 2){
            alert('마지막 상품입니다.');
            setShowBtn(true);
            setShowSpin(false);
            return;
        }

        // axios 요청
        axios.get(url)
            .then((response) => {
                // 기존 shoes 배열과 새로운 데이터를 합쳐서 새로운 배열 생성
                const updatedShoes = [...shoes, ...response.data];
                // 새로운 배열을 상태에 업데이트
                setShoes(updatedShoes);
                // 로딩중 숨기기
                setShowBtn(true);
                setShowSpin(false);
            })
            .catch(() => {
                // 로딩중 숨기기
                setShowBtn(true);
                setShowSpin(false);
                console.log('데이터를 불러오는 데 실패했습니다.');
            });
    };

    return(
        <>
            <div className="main-bg" style={{backgroundImage : `url(${bgImg})`}}></div>
            <div className="container">
                <div className="row">
                    {
                    shoes.map(function(data, i){
                        return(
                        <Card shoes={shoes} idx={i} key={i}/>
                        )
                    })
                    }
                </div>
            </div>
            {showSpin && <Spinner animation="border" />}
            {showBtn && <Button variant="light" onClick={fetchMoreData}>더보기</Button>}
        </>
    )
}

function Card(props) {
    let navigate = useNavigate();

    // console.log('props.idx',props.idx);
    return(
        <>
            <div className="col-md-4" onClick={() => {navigate(`/detail/${props.idx}`)}}>
                <img src={props.shoes[props.idx].img || "https://codingapple1.github.io/shop/shoes1.jpg"} width="80%"/>
                <h4>{props.shoes[props.idx].title}</h4>
                <p>{props.shoes[props.idx].price}</p>
            </div>
        </>
    )
}