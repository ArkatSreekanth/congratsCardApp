const userCompleteDetails = {
  congratsCardImg:
    'https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png',
  userName: 'Kiran V',
  collegeName:
    'Vishnu Institute of Computer Education and Technology, Bhimavaram',
  userProfileImg:
    'https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png',
  watchImg:
    'https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png',
}

const element = (
  <div className='text-center'>
    <h1 className='congratulations-heading'>Congratulations</h1>
    <div class='user-profile-card'>
      <img src={userCompleteDetails.userProfileImg} className='userImg' />
      <h1 className='userDetails'>{userCompleteDetails.userName}</h1>
      <p className='userDetails'>{userCompleteDetails.collegeName}</p>
      <img src={userCompleteDetails.watchImg} className='productImg' />
    </div>
  </div>
)

const rootElement = document.getElementById('root')

rootElement.className = 'bg-container'

ReactDOM.render(element, rootElement)
