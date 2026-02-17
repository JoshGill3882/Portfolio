import { useState, type ReactNode } from "react";
import styles from "./interests.module.css";
import { Interest } from "./interest";
import { interests } from "./interest_consts";


export function Interests(): ReactNode {
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);

  const handleInterestClick = (interest: Interest): void => {
    if (selectedInterest && selectedInterest.id === interest.id) {
      return
    } else {
      setSelectedInterest(interest);
    }
  };

  const closeInfoPanel = (): void => { setSelectedInterest(null); };

  return (
    <section className={styles.interests}>
      <div className="container">
        <div className="card__header">
          <h2>
            <span>My Interests</span>
          </h2>
        </div>

        {/* Desktop layout */}
        <div className={`card__body ${styles.desktopLayout}`}>
          {/* Left side - Interest buttons */}
          <div className={styles.interestsGrid}>
            {interests.map((interest) => (
              <div
                key={interest.id}
                className={`${styles.interestCard} ${
                  selectedInterest?.id === interest.id
                    ? styles.interestCardSelected
                    : ""
                }`}
                onClick={() => handleInterestClick(interest)}
                role="button"
                tabIndex={0}
                aria-pressed={selectedInterest?.id === interest.id}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleInterestClick(interest);
                    e.preventDefault();
                  }
                }}
              >
                <div className={styles.interestIcon}>{interest.icon}</div>
                <div className={styles.interestTitle}>
                  {interest.id.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Description panel */}
          <div className={styles.descriptionPanel}>
            {selectedInterest ? (
              <div>
                <div className={styles.descriptionHeader}>
                  <h3 className="margin-bottom--sm">
                    {" "}
                    {selectedInterest.title}{" "}
                  </h3>
                  <button
                    onClick={closeInfoPanel}
                    className="clean-btn"
                    aria-label="Close panel"
                    type="button"
                  >
                    {" "}
                    ✕{" "}
                  </button>
                </div>
                {selectedInterest.description
                  .split(/\n\s*\n/)
                  .map((para) => para.trim())
                  .filter(Boolean)
                  .map((para, i) => (<p key={i}>{para}</p>))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <b>
                  <p> ← Select an interest to learn more </p>
                </b>
              </div>
            )}
          </div>
        </div>

        {/* Mobile layout */}
        <div className={`card__body ${styles.mobileLayout}`}>
          <div className={styles.mobileInterestsGrid}>
            {interests.map((interest) => (
              <div
                key={interest.id}
                className={styles.interestCard}
                onClick={() => handleInterestClick(interest)}
                role="button"
                tabIndex={0}
                aria-pressed={selectedInterest?.id === interest.id}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleInterestClick(interest);
                    e.preventDefault();
                  }
                }}
              >
                <div className={styles.interestIcon}>{interest.icon}</div>
                <div className={styles.interestTitle}>{interest.id.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {selectedInterest && (
            <div className={styles.mobileOverlayPanel}>
              <div className={styles.mobileOverlayHeader}>
                <button
                  onClick={closeInfoPanel}
                  className="clean-btn"
                  type="button"
                >
                  {" "}
                  ← Click for more Info{" "}
                </button>
                <button
                  onClick={closeInfoPanel}
                  className="clean-btn"
                  aria-label="Close panel"
                  type="button"
                >
                  {" "}
                  ✕{" "}
                </button>
              </div>
              <div className={styles.mobileOverlayContent}>
                {selectedInterest.description
                  .split(/\n\s*\n/)
                  .map((para) => para.trim())
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
