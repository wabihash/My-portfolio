import './App.css'
import Evan from './components/Evan'
import userData from './components/userData'

function App() {

  return (
    <div className='all-container'>   
       <header className="title">
        <h1>Ethio Menu</h1>
        <div></div>
      </header>
      <div className="foods-container">
 {userData.map(({title, price, desc, img}, id) => {
  return (
    <Evan
      key = {id}
      title={title}
      price={price}
      desc={desc}
      img={img}
    />
  );
})}
      </div>
    </div>
  )
}

export default App
