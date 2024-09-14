import { useState } from "react"
import TextInput from "./TextInput"
export default function NewGameForm({addGame}){
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const  handleSubmit = (ev) =>{
        ev.preventDefault()
        addGame({title, cover});
        setCover('')
        setTitle('')
        
      }
    return(
        <form className="col-6 " onSubmit={handleSubmit}>
            <TextInput id={'title'} label={'Título:'} value={title} setValue={setTitle}/>
            <TextInput id={'cover'} label={'Cover:'} value={cover} setValue={setCover}/>
            <button type="submit" className="btn btn-dark mt-3 col-12">Adicionar</button>
        </form>
    )
}