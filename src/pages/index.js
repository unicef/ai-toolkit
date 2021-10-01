import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';



export default function Home({ history }) {
  const {siteConfig} = useDocusaurusContext();
  const [answers, setAnswers] = useState(0);

  function handleClick(param) {
    setAnswers(param)
    if(param['person']==='technical'){
      history.push(siteConfig.baseUrl + 'docs/use-cases/customization')
    } else {
      history.push(siteConfig.baseUrl + 'docs/use-cases/integration')
    }
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
              <div className="card__body">
                <p>
                  Which of the following describes you best
                </p>

                <div className="row">
                  <div className="col col--4 col--offset-1">
                    <Link
                      className="button button--primary button--lg"
                      onClick={(e) => handleClick({person: 'government'})}>
                      Government<br/>Official
                    </Link>
                  </div>
                  <div className="col col--4 col--offset-2">
                    <Link
                      className="button button--primary button--lg"
                      onClick={(e) => handleClick({person: 'technical'})}>
                      Technical<br/>Person
                    </Link>
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
