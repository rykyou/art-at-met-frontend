import React from 'react';
import { Link } from 'react-router-dom';

const VisitCard = (props) => {
  return (
    <div className="ui link card">

      <h3 className="ui header spacing"><i className="paint brush icon"></i>{`Date: ` + formatDate(props.visit.date)}</h3>
      <h3 className="ui header spacing">{props.visit.time_of_day}</h3>

      <div className="ui buttons">
        <Link className="tiny ui button"

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

export default VisitCard
