import './checkbox.css'

const Checkbox = ({label,...checkboxProps}) =>{
    return(
        <div>            
            <input className='checkbox' type="checkbox" {...checkboxProps} />
            <label>{label}</label>
        </div>
    )

}

export default Checkbox;