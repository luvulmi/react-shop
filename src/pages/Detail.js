import { useParams } from 'react-router-dom';

export default function Detail(props) {

    let {id} = useParams();

    const shoes = props.shoes.find(data => data.id == id);

    // console.log('shoes=>',shoes);

    return(
        <div className="container">
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