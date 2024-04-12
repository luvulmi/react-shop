import bgImg from '../img/bg.png';
import { useNavigate } from 'react-router-dom';

export default function Main(props) {
    
    return(
        <>
            <div className="main-bg" style={{backgroundImage : `url(${bgImg})`}}></div>
            <div className="container">
                <div className="row">
                    {
                    props.shoes.map(function(data, i){
                        return(
                        <Card shoes={props.shoes} idx={i} key={i}/>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

function Card(props) {
    let navigate = useNavigate();

    // console.log('props.idx',props.idx);

    return(
        <>
            <div className="col-md-4" onClick={() => {navigate(`/detail/${props.idx}`)}}>
                <img src={props.shoes[props.idx].img} width="80%"/>
                <h4>{props.shoes[props.idx].title}</h4>
                <p>{props.shoes[props.idx].price}</p>
            </div>
        </>
    )
}