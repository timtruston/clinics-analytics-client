import React, { useState } from 'react';
import Header from './components/Header/Header'
import LeftNav from './components/LeftNav/LeftNav'
import ClinicsNav from './components/ClinicsNav/ClinicsNav'
import KeyIssues from './components/KeyIssues/KeyIssues'
import MonitoringPeriod from './components/MonitoringPeriod/MonitoringPeriod'
import Graphs from './components/Graphs/Graphs'
import StaffTable from './components/StaffTable/StaffTable'
import styled from 'styled-components'
import './css/skeleton.css';
import { startOfDay, endOfDay } from 'date-fns';

const App: React.FC = () => {
  
  const [startDate, setStartDate] = useState(1575936000000) 
  const [endDate, setEndDate] = useState(1578614400000) 
  const setDateRange = (startDate: Date, endDate: Date) => {
    // console.log('start', startDate)
    // console.log('end', endDate)
    if(startDate && endDate){
      setStartDate(startDate.getTime())
      setEndDate(endDate.getTime())
    }
  }
  const setIssue = (issueId: string) => {
    console.log('TODO: change issue using ', issueId) 
    fetchData() // faker
  }
  
  const setClinic = (clinicId: string) => {
    console.log('TODO: change clinic using ', clinicId) 
    fetchData() //faker
  }
    
  const fetchData = () => {
    let d1 = new Date(2019, 12, 1)
    let d2 = new Date(2020, 6, 1)
    let d3 = new Date()
    let randomDate1 = new Date(d1.getTime() + Math.random() * (d2.getTime() - d1.getTime()))
    let randomDate2 = new Date(d2.getTime() + Math.random() * (d3.getTime() - d2.getTime()))
    setStartDate(startOfDay(randomDate1).getTime())
    setEndDate(endOfDay(randomDate2).getTime())
  }

  return (
    <Wrapper>
      <LeftNav/>
      <Container>
        <Header/>
        <Content>
          <Title>Analytics</Title>
          <Body>
            <ClinicsNavContainer>
              <ClinicsNav startDate={startDate} endDate={endDate} setClinic={setClinic}/>
            </ClinicsNavContainer>
            <Inner>
              <KeyIssues setIssue={setIssue}/>
              <MonitoringPeriod  startDate={startDate} endDate={endDate} setDateRange={setDateRange}/>
              <Graphs startDate={startDate} endDate={endDate}/>
              <StaffTable startDate={startDate} endDate={endDate}/>
            </Inner>
          </Body>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100%;
`
const Container = styled.div`
  background: #f5f6fa;
  margin-left: 80px;
  width: calc(100% - 80px);
  display: inline-block;
  @media (max-width: 900px) {
    margin-left: 50px;
    width: calc(100% - 50px);
  }
`
const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 3%;
  padding-right: 3%;
`
const Title = styled.h2`
  /* font-weight: 600; */
`
const Body = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const ClinicsNavContainer = styled.div`
  width: 300px;
  @media (max-width: 900px) {
    width: 100%;
  }
`
const Inner = styled.div`
  margin-left: 2%;
  flex-grow: 1;
  @media (max-width: 900px) {
    margin-top: 30px;
    margin-left: 0;
    margin-right: 2%;
  }
`
