import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/ml01.svg').default,
    description: (
      <>
        The AI Toolkit has been designed from the ground up to be easily understandable and
        to leverage content personalization in existing learning management systems.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/ml02.svg').default,
    description: (
      <>
        The AI Toolkit lets you focus on your needs, and we&apos;ll guide you through the most
        important aspects that make a difference.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/ml03.svg').default,
    description: (
      <>
        Leverage open source software and open content to stand on the shoulders of giants and
        build great products for the benefit of the communities care most about.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
