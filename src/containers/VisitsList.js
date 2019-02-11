import React from 'react';
import VisitCard from '../components/VisitCard';
import { Link } from 'react-router-dom'

class VisitsList extends React.Component {
  userPastVisits = () => {
    return this.props.currentUser.visits.map(visit => <Link
      to={`/visits/${visit.id}/edit`}
      key={visit.id}>
        <VisitCard
          key={visit.id}
          visit={visit}
        />
    </Link>)
  }

  render() {
    return (
      <div>
        {!(this.props.currentUser.visits === undefined) ? this.userPastVisits() : null}
      </div>
    )
  }
}

export default VisitsList
