const Header = (props)=> {
  const {score,topScore}=props
  return (
    <div>
      <div className="first-header">
        <p >Superheroes Memory Game</p>
        <p>Score:{score}</p>
        <p> TopScore:{topScore}</p>
      </div>
      <strong className="second-header">Get points by clicking on an image but don't click on any more than once</strong>
    </div>
  )
  }
  
  export default Header