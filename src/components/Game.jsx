export default function game({title, cover, onRemove}){
    return(
        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center my-5">
            <img src={cover} className="rounded shadow-md mb-3" style={{width:'100px', height:'100px', objectFit:'cover'} } />
            <div className="d-flex flex-column align-items-center gap-2">
                <h2>{title}</h2>
                <button className="btn btn-danger rounded" onClick={onRemove}>Remover</button>
            </div>
        </div>
    )
}