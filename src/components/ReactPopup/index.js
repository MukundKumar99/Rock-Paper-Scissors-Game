import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          RULES
        </button>
      }
    >
      {close => (
        <div className="popup-bg-container">
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine className="close-icon" />
          </button>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="popup-image"
            />
          </div>
        </div>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
