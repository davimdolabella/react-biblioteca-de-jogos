export default function TextInput({id, label, value, setValue}){
    return(
        <div className="form-group">
            <label >{label}</label>
            <input type='text' className="form-control" id={id} name={id} value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}