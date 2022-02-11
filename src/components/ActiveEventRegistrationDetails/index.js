import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {currentRegistrationStatus} = props
  const renderYetToRegisterDetails = () => (
    <div className="register-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-card-image"
      />
      <p className="registration-details-description">
        {' '}
        A live performance brings so much to your relationship with dance.
        Seeing dance live cam make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-here-button">
        {' '}
        Register Here{' '}
      </button>
    </div>
  )

  const initialRegistrationDetails = () => {
    const initialRegistrationStatus =
      'Click on an event, to view its registration details'
    return (
      <div className="register-details-container">
        <p className="registration-details-description">
          {' '}
          {initialRegistrationStatus}
        </p>
      </div>
    )
  }

  const renderRegisteredDetails = () => (
    <div className="register-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-card-image"
      />
      <h1 className="registration-details-description">
        {' '}
        You have already registered for the event{' '}
      </h1>
    </div>
  )
  const renderRegistrationsClosedDetails = () => (
    <div className="register-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-card-image"
      />
      <h1 className="registrations-status-heading">
        {' '}
        Registrations Are Closed Now!{' '}
      </h1>
      <p className="registration-details-description">
        {' '}
        Stay tuned. we will reopen registrations soon!
      </p>
    </div>
  )
  const renderEventRegistrationDetails = () => {
    switch (currentRegistrationStatus) {
      case 'YET_TO_REGISTER':
        return renderYetToRegisterDetails()
      case 'REGISTERED':
        return renderRegisteredDetails()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationsClosedDetails()
      default:
        return initialRegistrationDetails()
    }
  }
  return (
    <div className="active-registration-details-container">
      {renderEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
