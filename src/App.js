import axios from "axios";
import { useState } from "react";
import "./App.css";
import ItemInputs from "./components/itemInputs";
import SupplierInputs from "./components/supplierInputs";
import Checkbox from "./design/checkbox/checkbox";
import useUsersData from "./hooks/useGetData";

function App() {
  const users = useUsersData()
  const [selected,setSelected] = useState("");
  const [data,setData] = useState({
    name:"",quantity:"", price:"", date:null,
      sname:"",
      companyName:"",
      country:"",
      state:"",
      city:"",
      email:"",
      phone:null
});
  const submit = async () =>{
    try{
        await axios.post("https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers",{
            "itemDetails":{
                "itemName":data.name,
                "quantity":data.quantity,
                "unitPrice":data.quantity,
                "currency":"$",
                "submissionDate":data.date.toString() 
                },
                "supplier":{
                  "supplierName":data.sname,
                  "companyName":data.companyName,
                  "email":data.email,
                  "phoneCode":"+91",
                  "phoneNumber":data.phone,
                  "countryId":data.country,
                  "stateId":data.state,
                  "cityId":data.city
                }
        })
        alert("success")
    }catch(e){
        alert("fail")
    }
}

  return <div className="App">
    <Checkbox label="item" onChange={(e)=>setSelected("item")} checked={selected === "item"} />
    <Checkbox label="supplier" onChange={(e)=>setSelected("sup")} checked={selected === "sup"} />
    {selected === "item" ? 
      <ItemInputs data={data} setData={setData}/>
    :null}
    {selected === "sup" ? 
      <SupplierInputs data={data} setData={setData}/>
    :null}
    <button onClick={submit}>submit</button>

    <div>

      <table>
        {users.map((user)=>(
          <tr>
            <td>itemId - {user.itemId}</td>
            <td>unitPrice - {user.unitPrice}</td>
            <td>submissionDate - {user.submissionDate}</td>
            <td>itemName - {user.itemName}</td>
          </tr>
        ))}
      </table>
    </div>
  </div>;
}

export default App;
