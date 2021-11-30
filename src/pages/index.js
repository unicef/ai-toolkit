import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home({ history }) {
  const {siteConfig} = useDocusaurusContext();
  const [person, setPerson] = useState('');
  const [role, setRole] = useState('');
  const [interest, setInterest] = useState('');
  const [LMS, setLMS] = useState('');


  function handleClick(param) {
    setAnswers(param)
    if(param['person']==='technical'){
      history.push(siteConfig.baseUrl + 'docs/use-cases/customization')
    } else {
      history.push(siteConfig.baseUrl + 'docs/use-cases/integration')
    }
  }

  function handleRadioButton(value) {
    setRadioState(value)
  }

  function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="card-demo row">
            <div className="card col col--6 col--offset-3">
              <div className="card__header">
                <h3>What brings you here?</h3>
              </div>
              <div className="card__body text-start">

                <div className="row">
                  <p>
                    I am a...
                  </p>
                  <div className="col col--7">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="education-specialist"
                      autoComplete="off"
                      checked={person==='EdSpecialist'?true:false}
                      onChange={() => setPerson('EdSpecialist')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="education-specialist">
                        Country Office Education Specialist
                    </label>
                  </div>
                  <div className="col col--2">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="researcher"
                      autoComplete="off"
                      checked={person==='Researcher'?true:false}
                      onChange={() => setPerson('Researcher')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="researcher">
                        Researcher
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col col-6">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="gov-official"
                      autoComplete="off"
                      checked={person==='GovOfficial'?true:false}
                      onChange={() => setPerson('GovOfficial')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="gov-official">
                        Government Official
                    </label>
                  </div>
                  <div className="col col-6">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="implementing-partner"
                      autoComplete="off"
                      checked={person==='ImplementingPartner'?true:false}
                      onChange={() => setPerson('ImplementingPartner')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="implementing-partner">
                        Implementing Partner
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <p>
                    Whose role is...
                  </p>
                  <div className="col col-6 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="technical"
                      autoComplete="off"
                      checked={role==='Technical'?true:false}
                      onChange={() => setRole('Technical')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="technical">
                        Technical
                    </label>
                  </div>
                  <div className="col col-6 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="non-technical"
                      autoComplete="off"
                      checked={role==='Non-Technical'?true:false}
                      onChange={() => setRole('Non-Technical')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="non-technical">
                        Non-Technical
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <p>
                    Who is interested in the following educational purposes of personalized learning...
                  </p>
                  <div className="row">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="converting"
                      autoComplete="off"
                      checked={interest==='converting'?true:false}
                      onChange={() => setInterest('converting')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="converting">
                        Converting Content into Universally Designed and Accessible Formats
                    </label>
                  </div>
                  <div className="row mt-2">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="automating"
                      autoComplete="off"
                      checked={interest==='automating'?true:false}
                      onChange={() => setInterest('automating')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="automating">
                        Automating Assessments and Remediation (Adaptive Learning)
                    </label>
                  </div>
                  <div className="row mt-2">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="virtual"
                      autoComplete="off"
                      checked={interest==='virtual'?true:false}
                      onChange={() => setInterest('virtual')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="virtual">
                        Virtual Teaching Assistants
                    </label>
                  </div>
                  <div className="row mt-2">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="personalized"
                      autoComplete="off"
                      checked={interest==='personalized'?true:false}
                      onChange={() => setInterest('personalized')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="personalized">
                        Personalized Learning Path/Recommendation Systems
                    </label>
                  </div>
                </div>

                <div className="row mt-3">
                  <p>
                    Whose Learning Management System is...
                  </p>
                  <div className="col col-4 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="moodle"
                      autoComplete="off"
                      checked={LMS==='Moodle'?true:false}
                      onChange={() => setLMS('Moodle')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="moodle">
                        Moodle
                    </label>
                    <br/>
                    <input 
                      type="radio"
                      className="btn-check"
                      id="totara"
                      autoComplete="off"
                      checked={LMS==='Totara'?true:false}
                      onChange={() => setLMS('Totara')}
                    />
                    <label 
                      className='btn btn-outline-primary mt-3'
                      for="totara">
                        Totara
                    </label>
                  </div>
                  <div className="col col-4 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="notesmaster"
                      autoComplete="off"
                      checked={LMS==='NotesMaster'?true:false}
                      onChange={() => setLMS('NotesMaster')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="notesmaster">
                        NotesMaster
                    </label>
                    <br/>
                    <input 
                      type="radio"
                      className="btn-check"
                      id="sunbird"
                      autoComplete="off"
                      checked={LMS==='Sunbird'?true:false}
                      onChange={() => setLMS('Sunbird')}
                    />
                    <label 
                      className='btn btn-outline-primary mt-3'
                      for="sunbird">
                        Sunbird
                    </label>
                  </div>
                  <div className="col col-4 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="unilearn"
                      autoComplete="off"
                      checked={LMS==='UniLearn'?true:false}
                      onChange={() => setLMS('UniLearn')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="unilearn">
                        UniLearn
                    </label>
                    <br/>
                    <input 
                      type="radio"
                      className="btn-check"
                      id="forma"
                      autoComplete="off"
                      checked={LMS==='Forma'?true:false}
                      onChange={() => setLMS('Forma')}
                    />
                    <label 
                      className='btn btn-outline-primary mt-3'
                      for="forma">
                        Forma
                    </label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col col-4 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="passport"
                      autoComplete="off"
                      checked={LMS==='Learning Passport'?true:false}
                      onChange={() => setLMS('Learning Passport')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="passport">
                        Learning Passport
                    </label>
                  </div>
                  <div className="col col-4 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="otherOS"
                      autoComplete="off"
                      checked={LMS==='otherOS'?true:false}
                      onChange={() => setLMS('otherOS')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="otherOS">
                        Other open-source LMS
                    </label>
                  </div>
                  <div className="col col-4 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="otherProprietary"
                      autoComplete="off"
                      checked={LMS==='otherProprietary'?true:false}
                      onChange={() => setLMS('otherProprietary')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="otherProprietary">
                        Other Proprietary LMS
                    </label>
                  </div>
                </div>
                <div className="row mt-3 text-center">
                  <div className="col col-4 text-center">
                    <input 
                      type="radio"
                      className="btn-check"
                      id="no"
                      autoComplete="off"
                      checked={LMS==='Not Have'?true:false}
                      onChange={() => setLMS('Not Have')}
                    />
                    <label 
                      className={'btn btn-outline-primary'}
                      for="no">
                        Do not currently have one deployed
                    </label>
                  </div>
                </div>

                <div className="row mt-5 text-center">
                  <div className="col col-7 text-center">
                    <Button 
                      variant="secondary" 
                      disabled={(person==''||role==''||interest==''||LMS=='')?true:false}
                      onClick={() => {
                        alert(`You are a ${person}, whose role is ${role}, interested in ${interest} and whose LMS is ${LMS}`)
                      }}
                    >
                      Show me Solutions
                    </Button>
                  </div>
                </div>

              </div>
              <div className="card__footer" style={{paddingTop: '5em'}}>
                None of the above, take me directly to the <Link to="/docs/intro">documentation</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
