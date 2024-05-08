import { Card, Image, Space } from "antd";
import { useNavigate, Link } from "react-router-dom";
function Cake(props) {
    // console.log("props in cake")
    // console.log(props)
  var data = {
    name: props.data.name,
    price: props.data.price,
    image: props.data.image,
    cakeid: props.data.cakeid,
  };
  // console.log("data from cake")
  // console.log(data)
  var navigate = useNavigate();
  function handleDetailCard(e) {
    navigate("/cakeDetail", { state: { data: data } });
  }
  return (
    <Space direction="horizontal" size={16}>
      <Card.Grid hoverable style={{ width: 300 }}>
            <Link to={"/cakeDetail/"+data.cakeid}><Image
          preview={false}
          src={data.image}
          width={300}
          onClick={handleDetailCard}
        ></Image></Link>
        <p>{data.name}</p>
        <p>₹ {data.price}</p>
        <p>{data.description}</p>
      </Card.Grid>
    </Space>
  );
}
export default Cake;