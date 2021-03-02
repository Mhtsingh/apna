import {useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import './Design.css'
import { Tabs, Tab, Row, Col, Container} from 'react-bootstrap'

const NavTab = () => {
    const [key, setKey] = useState('home');
        return (
            
          <Container className='tab_cont'>
          <Row eventKey={key}
          onSelect={(k) => setKey(k)}>
              <Col>
                  <Tabs className="tab_col btn-group" eventKey="Home" 
                        id="controlled-tab-example" >
                      <Tab eventKey="home" title="Basic Infromation">
                          <Step1 />
                      </Tab>
                      <Tab eventKey="profile" title="Event Infromation">
                          <Step2 />
                      </Tab>
                      <Tab eventKey="contact" title="Submit Idea">
                          <Step3 />
                      </Tab>
                  </Tabs>
              </Col>
          </Row>
      </Container>
          ); 
      }

export default NavTab
