import "./styles.css";


function CharCard ({ elem }) {

    return (
            <div className={
                elem.status === "Alive" ? "card alive" : "card dead"
            }>
                <h4 className="card-title"> {elem.name} </h4>
                <img className="card-img" src={elem.image} alt={elem.name}></img>
                <p className="card-gender"> {elem.gender} </p>    
            </div>
    )
}


export default CharCard;