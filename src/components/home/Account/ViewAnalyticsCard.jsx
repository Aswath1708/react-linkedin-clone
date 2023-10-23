import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ViewAnalyticsCard = () => {
  return (
    <div className="analytics-container">
        <div>
        <p>10 profile viewers</p>
        <p>past 90 days</p>
        </div>
        <a href="#">View all analytics <FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
  )
}

export default ViewAnalyticsCard