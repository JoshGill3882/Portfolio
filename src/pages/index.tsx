import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { HomepageHeader } from '../components/homepageHeader';
import { Specialties } from "../components/specialties";

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
