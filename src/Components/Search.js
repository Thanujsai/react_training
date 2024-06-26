import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import {Space, Card,Spin} from "antd";
import { Link } from "react-router-dom";


export default function Searchcakes(){
    var [matchedCakes, setAllMatchedCakes] = useState([]);
    var [query, setQuery] = useSearchParams();
    var name = query.get("q");
    const [loading, setLoading] = useState(true);


    useEffect(() => {
       const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000);

        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/searchcakes?q="+name,
            method: "get"
        }).then(
            (response) => {
                setAllMatchedCakes(response.data.data);
                console.log("all cakes = ",matchedCakes)
            }, (error) => {
                console.log("no cakes data found", error)
            }
        )
    },[matchedCakes])

    return (<>
    <Spin spinning={loading} size="large" />
    <div style={{ display: loading ? 'none' : 'block' }}></div>
    {!loading && matchedCakes.length > 0 &&
        matchedCakes.map((each) => {
            return(
                <Space direction="horizontal">
                <Card>
                    <Link to={"/cakeDetail/"+each.cakeid}><img src={each.image} style={{height:150, width:150}} /></Link>
                    <p>Name : {each.name}</p>
                    <p>Price : {each.price}</p>
                </Card>
                </Space>
            );
        })
    }
    {!matchedCakes && matchedCakes.length == 0}
    </>);

}