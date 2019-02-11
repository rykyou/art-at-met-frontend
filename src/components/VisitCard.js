import React from 'react';


const VisitCard = ({visit}) => {
  return (
    <div className="ui link card" onClick={() => handleVisitCardClick()}>
      <h3>{formatDate(visit.date)}</h3>
      <h5>{visit.time_of_day}</h5>
    </div>
  )
}

function formatDate(visit_date) {
  const date = new Date(visit_date)
  return date.toLocaleDateString("en-US")
}

function handleVisitCardClick() {
  console.log('clicked VisitCard!')

}

export default VisitCard
