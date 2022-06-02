import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
//import styles from '../css/custom.css';
import HomepageFeatures from '../components/HomepageFeatures';

import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container home_page_box">
        <h1 className="hero__title ">.</h1>
        <p className="hero__subtitle">.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
