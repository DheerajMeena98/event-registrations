import './index.css'

const EventItem = props => {
  const {eachEvent, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent
  const clickOnEvent = () => {
    onClickEvent(registrationStatus)
  }
  return (
    <li className="each-event-card">
      <button type="button" className="event-button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={clickOnEvent}
        />
      </button>

      <p className="event-name"> {name} </p>
      <p className="event-location"> {location}</p>
    </li>
  )
}

export default EventItem
