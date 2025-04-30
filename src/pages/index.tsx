import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { Specialties } from "../components/specialties";

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">Hi, I'm Josh</Heading>
        <p className="hero_subtitle">Welcome to my Portfolio</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Specialties />
      </main>
    </Layout>
  );
}
