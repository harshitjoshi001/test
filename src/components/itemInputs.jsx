import Input from "../design/input/input";

const ItemInputs = ({data,setData}) =>{


    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }



    return(
        <div>
            <Input name="name" label="name" type="text" value={data.name} onChange={handleChange}/>            
            <Input name="quantity" label="quantity" type="number" value={data.quantity} onChange={handleChange}/>            
            <Input name="price" label="price" type="number" value={data.price} onChange={handleChange}/>            
            <Input name="date" label="date" type="date" value={data.date} onChange={handleChange}/>            
        </div>
    )
}

export default ItemInputs;