import './TeamCard.css'

const TeamCard = () => {
  return (
    <div className="team-card">
      <div className="card">
        <div className="content">
          <div className="imageBx"><img src=''></img></div>
          <div className="contentBx">
            <h3>Someone Famous<br><span>Creative Designer</span></br></h3>
          </div>
        </div>
      </div>
      <ul className="sci">
        <li style='--i:1'>
          <a href='#'><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li style='--i:1'>
          <a href='#'><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li style='--i:1'>
          <a href='#'><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  )
}

export default TeamCard