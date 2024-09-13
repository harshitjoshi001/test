import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "../design/dropdown/dropdown";
import Input from "../design/input/input";

const SupplierInputs = ({data,setData}) =>{
    const [countryList,setCountryList] = useState([]);
    const [stateList,setStateList] = useState([]);
    const [cityList,setCityList] = useState([]);


    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const fetchCountry = async () =>{
        const res = await axios.get("https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList")
        setCountryList(res.data.data.countyList);
    }

    useEffect(()=>{
        fetchCountry();             
    },[])

    const fetchstates = async () =>{
        const res = await axios.get(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=${data.country}`)
        setStateList(res.data.data.stateList);
    }

    useEffect(()=>{
        if(data.country)
        fetchstates();             
    },[data.country])

    const fetchCity = async () =>{
        const res = await axios.get(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CityList-By-Country-State?countryId=${data.country}&stateId=${data.state}`)
        setCityList(res.data.data.cityList);
    }

    useEffect(()=>{
        if(data.state)
        fetchCity();             
    },[data.state])

    const formattedCountries = () =>{
        return countryList?.map((i)=>({
            name:i.name,
            value:i.countryId
        }))        
    }

    const formattedStates = () =>{
        return stateList.map((i)=>({
            name:i.name,
            value:i.stateId
        }))        
    }

    const formattedCities = () =>{
        return cityList.map((i)=>({
            name:i.name,
            value:i.cityId
        }))        
    }


    return(
        <div>
            <Input name="sname" label="name" type="text" value={data.sname} onChange={handleChange}/>            
            <Input name="companyName" label="companyName" type="text" value={data.companyName} onChange={handleChange}/>            
            <Dropdown name="country" onChange={handleChange} options={formattedCountries()} />
            <Dropdown name="state" onChange={handleChange} options={formattedStates()}/>
            <Dropdown name="city"  onChange={handleChange} options={formattedCities()}/>
            <Input name="email" label="email" type="text" value={data.email} onChange={handleChange}/>            
            <Input name="phone" label="phone" type="number" value={data.phone} onChange={handleChange}/>            
        </div>
    )
}

export default SupplierInputs;