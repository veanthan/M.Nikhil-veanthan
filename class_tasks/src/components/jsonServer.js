import { useEffect, useState } from "react";
import axios from 'axios';

export default function JsonServerDemo()
{
    const [data,setData] = useState([]);

    useEffect(() => {
        axios
          .get('http://localhost:3001/veggies')
          .then((Response) => {
            setData(Response.data)
          })
          .catch((error) => {
            console.error(error.message)
          })
    },[])
  
    return (
        <div>
            <h1>VEGETABLES DATA FROM SERVER</h1>
            <table border={1} style={{margin:'10px'}}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}