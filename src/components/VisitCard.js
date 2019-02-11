import React from 'react';
import { Link } from 'react-router-dom';

const VisitCard = (props) => {
  return (
    <div className="ui link card">
      <h3>{formatDate(props.visit.date)}</h3>
      <h5>{props.visit.time_of_day}</h5>

      <div className="ui buttons">
        <Link className="tiny ui button"
          onClick={() => props.setCurrentVisit(props.visit.id)}
          to={`/visits/${props.visit.id}/edit`}
          key={props.visit.id}>
            <div>Edit</div>
        </Link>
        <div className="tiny ui button" onClick={() => props.handleDeleteVisit(props.visit.id)}>Delete</div>
      </div>
    </div>
  )
}

function formatDate(visit_date) {
  const date = new Date(visit_date)
  return date.toLocaleDateString("en-US")
}

// function handleVisitCardClick(props) {
//   console.log('clicked VisitCard!')
//
// }

export default VisitCard
