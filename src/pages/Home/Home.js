import React, { Fragment, Component } from 'react';
import { DummyContent, Wrapper, Title, SubTitle } from './home.style';

import { Header, Selector } from '@organisms';
import { StatusBox } from '@molecules';
import { LogoDeploy, Hider } from '@atoms';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  renderStatusItems = () => {

  }

  render() {
    return (
      <Fragment>
        <Hider />
        <Wrapper>
          
          <Header />
            <Title>DEPLOYMENT DETAILS: </Title>
            <SubTitle>PROD-STATS:</SubTitle>
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'redLight'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            <StatusBox 
              status={'blue'}
              heading={'All is functional'}  
              text={'And this is just a test of the status box'}  
            /> 
            {/* {this.renderStatusItems()} */}
          <Selector />
          <span></span>
        </Wrapper>
      </Fragment>
    );
  }

};

export default Home;
