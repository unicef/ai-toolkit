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


  function handleClick(i) {
    switch(i){
      case 'converting':
      history.push(siteConfig.baseUrl + 'docs/use-cases/accessibility/');
      break;
      case 'automating':
      history.push(siteConfig.baseUrl + 'docs/use-cases/adaptivelearning/'); 
      break;
      case 'personalized':
      history.push(siteConfig.baseUrl + 'docs/use-cases/recommenders/');
      break;
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

                
                <div className="row mt-3">
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

                <div className="row mt-5 text-center">
                  <div className="col col-7 text-center">
                    <Button 
                      variant="secondary" 
                      disabled={(interest=='')?true:false}
                      onClick={() => handleClick(interest)}
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
