import Game from './components/Game.jsx'
import useGameCollection from './hooks/useGameCollection.js'
import './App.css'
import NewGameForm from './components/NewGameForm.jsx'

export default function App(){
  const {games, addGame, removeGame} = useGameCollection()
  
  return(
    <div id="app" className="container row mx-auto bg-secondary justify-content-center col-11  p-5 rounded mt-3 text-light shadow shadow-light">
        <h1 className="text-center">Biblioteca de Jogos</h1>
        <NewGameForm addGame={addGame}/>
          <div className="flex-wrap d-flex flex-column flex-md-row container justify-content-center align-items-center">
            {games.length>0?games.map((game) =>(
              <Game 
                key={game.id}
                title={game.title}
                cover={game.cover}
                onRemove={() => removeGame(game.id)}
              />
            )):(
              <h2 className=' mt-5' >Ainda Não tem Jogos</h2>
            )}
          </div>
    </div>
  )
}