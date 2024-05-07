import { useSearchParams } from 'react-router-dom';

export default function Search(params){
    console.log("in search")
    console.log("params")
    console.log(params)
    console.log(useSearchParams)
    var [query,setQuery] = useSearchParams()
    console.log(query)
    var name = query.get("name");
    console.log("name is : ",name)
}