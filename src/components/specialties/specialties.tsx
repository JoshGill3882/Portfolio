import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Specialty } from './specialty';


const SpecialtyList: Specialty[] = [
  {
    title: "Professional Tools and Frameworks",
    imagePath: require("@site/static/img/specialties/professional-frameworks.png").default,
    description: (
      <>
        With expertise across multiple enterprise-grade ecosystems including
        Python, NodeJS, and .NET/C#, enabling seamless delivery of robust
        solutions regardless of technology stack requirements.
      </>
    ),
  },
  {
    title: "Cloud Native Proficiency",
    imagePath: require("@site/static/img/specialties/cloud-providers.png").default,
    description: (
      <>
        Architect of scalable cloud-native applications leveraging both AWS and
        Firebase ecosystems, ensuring deployments that are resilient,
        cost-effective, and aligned with modern infrastructure-as-code
        practices.
      </>
    ),
  },
  {
    title: "DevOps and CI/CD Implementation",
    imagePath: require("@site/static/img/specialties/devops.png").default,
    description: (
      <>
        DevOps practitioner skilled at implementing streamlined CI/CD pipelines that
        accelerate development cycles while maintaining code quality through
        automated testing and deployment processes using tools such as GitHub Actions.
      </>
    ),
  },
];

function SpecialtyComponent({ title, imagePath, description }: Specialty) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.specialtyImg} src={imagePath} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function Specialties(): ReactNode {
  return (
    <section className={styles.specialties}>
      <div className="container">
        <h2>My Specialties</h2>
        <p>Throughout my time both in and outside of Education, I have picked up numerous skills which have led to a specialization forming in Back-End Development. Outlined below are just some of the skills which have led to this specialty forming. <br />
          For a more practical view on what I have worked on, see the projects listed in my <a href="/portfolio">Portfolio</a></p>
        <div className="row">
          {SpecialtyList.map((props, idx) => (
            <SpecialtyComponent key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
