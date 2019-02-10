import React from 'react';
import VisitCard from '../components/VisitCard';

class VisitsList extends React.Component {
  userPastVisits = () => {
    return this.props.currentUser.visits.map(visit => <VisitCard
      key={visit.id}
      visit={visit}
    />)
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
