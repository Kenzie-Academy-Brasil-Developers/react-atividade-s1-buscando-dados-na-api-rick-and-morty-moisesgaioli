import CharCard from "../CharCard";
import "./styles.css";


function Characters ({ characterList }) {

    return (
        <>
            <h2>
                Meus personagens
            </h2>

            <section className="container">
                {characterList.map(elem => <CharCard key={elem.id} elem={elem} /> )}7
            </section>

        </>
    )
}


export default Characters;