import axios from "axios"
import { useEffect, useState } from "react"

const useUsersData = () =>{
    const [users,setUsers] = useState([])

    const fetchUsers = async () =>{
        const res = await axios.get("https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Items")
        setUsers(res.data.data.items)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    return users
}

export default useUsersData