import React from 'react';
import Header from './components/Header/Header'
import ClinicsNav from './components/ClinicsNav/ClinicsNav'
import KeyIssues from './components/KeyIssues/KeyIssues'
import MonitoringPeriod from './components/MonitoringPeriod/MonitoringPeriod'
import StaffTable from './components/StaffTable/StaffTable'

import './css/skeleton.css';

const App: React.FC = () => {

  return (
    <div className="row">
      <div className="one column">Left Nav</div>
      <div className="eleven columns">
        <Header/>
        <div className="row">
          <div className="three columns">
            <ClinicsNav/>
          </div>
          <div className="nine columns">
            <KeyIssues/>
            <MonitoringPeriod/>
            <StaffTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

