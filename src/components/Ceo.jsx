import React from "react";
import "../App.css"; // adjust if needed
import salmanPhoto from "../assets/salman.jpg"; // Make sure this path matches where you store the photo

export default function CEO() {
  return (
    <section className="ceo-section">
      <div className="ceo-photo-container">
        <img src={salmanPhoto} alt="Salman Saeed" className="ceo-photo" />
      </div>
      <div className="ceo-bio">
        <h2>Salman Saeed, Founder & CEO</h2>
        <p>
          Salman Saeed is a visionary technologist and prodigious programmer,
          whose deep intellect and humility define his leadership at Conscious
          Neurons. With a remarkable blend of scientific rigor and spiritual
          insight, Salman builds AI solutions that transcend technology —
          designed to uplift, empower, and simplify human experience.
        </p>
        <p>
          Starting his programming journey at age five, Salman’s curiosity and
          dedication have propelled him to master complex neural networks,
          software architectures, and human-centric AI integration. His work
          embodies the union of logic and empathy, faith and reason, and
          innovation rooted in conscious design.
        </p>
        <p>
          Beyond technology, Salman’s path reflects resilience, deep
          introspection, and an unwavering commitment to creating a future where
          artificial intelligence serves as a co-evolutionary partner for
          individuals and society.
        </p>
      </div>
    </section>
  );
}
