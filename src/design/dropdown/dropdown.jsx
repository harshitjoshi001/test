const Dropdown = ({name,options,...rest}) =>{
    return(
        <div>
            <select name={name} {...rest}>
                {options.map(({value,name})=>(
                    <option value={value}>{name}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;