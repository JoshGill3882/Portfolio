import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./homepageHeader.module.css";

export function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">Hi, I'm Josh</Heading>
        <p className="hero_subtitle">Welcome to my Portfolio</p>
      </div>
    </header>
  );
}
