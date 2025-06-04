import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { HomepageHeader } from '../components/homepageHeader/homepageHeader';
import { Interests } from '../components/interests/interests';
import { Specialties } from "../components/specialties/specialties";

export default function Home(): ReactNode {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <Interests />
        <Specialties />
      </main>
    </Layout>
  );
}
