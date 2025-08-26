// src/pages/Finance/ModulesAccordion.jsx
import React, { useState } from "react";
import styles from "./ModulesAccordion.module.css";

function Module({ title, items, id, index, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={`${styles.module} ${open ? styles.open : ""}`} id={id}>
      <button
        className={styles.header}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`${id}-content`}
      >
        <span className={styles.badge}>Module {index + 1}</span>
        <h3 className={styles.title} id={`${id}-label`}>{title}</h3>
        <span className={styles.chev} aria-hidden>▾</span>
      </button>

      <div
        id={`${id}-content`}
        className={styles.contentWrap}
        role="region"
        aria-labelledby={`${id}-label`}
        hidden={!open}
      >
        <ul className={styles.list}>
          {items.map((t, i) => (
            <li key={i} className={styles.item}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ModulesAccordionFinance() {
  const modules = [
    {
      title: "Introduction to Money & Economy",
      items: [
        "What is Money? (barter → coins → digital)",
        "Earning, Saving, Spending basics",
        "Need vs. Want (with simple scenarios)",
        "National Income & GDP – kid-friendly view",
        "Value of family expenses (respect & awareness)"
      ],
      id: "module-1"
    },
    {
      title: "Personal Finance & Budgeting",
      items: [
        "What is a Budget?",
        "Personal Budgeting for kids (pocket money, allowances, school expenses)",
        "Family Budget Project",
        "Goal-based Saving",
      ],
      id: "module-2"
    },
    {
      title: "Banking & Digital Money",
      items: [
        "Introduction to Banks (savings account, interest, deposits)",
        "UPI, Debit Cards, Net Banking basics",
        "Digital Wallets (PayTM, GPay, etc.)",
        "Safety & Security with Money (passwords, OTP, scams)",
      ],
      id: "module-3"
    },
    {
      title: "Investing Fundamentals",
      items: [
        "Why saving isn’t enough",
        "Simple vs Compound Interest (with activities)",
        "Introduction to Assets (stocks, bonds, gold, real estate, mutual funds in child-friendly language)",
        "Risk & Return basics",
      ],
      id: "module-4"
    },
    {
      title: "Business & Entrepreneurship",
      items: [
        "How Companies Make Money (products, services, profits)",
        "Entrepreneurship basics (starting small businesses, lemonade stand style examples)",
        "Advertising & Marketing (how it influences spending)",
        "Case study / Project: Students design a mini business plan",
      ],
      id: "module-5"
    },
    {
      title: "Smart Money Habits",
      items: [
        "Delayed Gratification (Marshmallow test, real-life examples)",
        "Avoiding Impulse Buying",
        "Giving & Sharing (charity, social responsibility)",
        "Decision-making with Money",
      ],
      id: "module-6"
    },
    {
      title: "Applied Learning & Simulation",
      items: [
        "Recap with games & simulations (e.g., marketplace roleplay, investing game)",
        "Reflection: What did you learn about your own money habits?",
        "Presenting their Family Budget Project",
        "Certificates / Showcase",
      ],
      id: "module-7"
    }
  ];

  return (
    <div className={styles.wrap}>
      <h2 className={styles.heading}>Course Modules</h2>
      <p className={styles.kicker}>7 practical modules • activities • projects • real-world examples</p>

      <div className={styles.listWrap}>
        {modules.map((m, idx) => (
          <Module
            key={m.id}
            index={idx}
            id={m.id}
            title={m.title}
            items={m.items}
            defaultOpen={false}   // all closed by default
          />
        ))}
      </div>

<div className={styles.bonusWrap}>
  <span className={styles.bonusBadge}>🌟 Bonus · Optional</span>
  <h3 className={styles.bonusTitle}>The Young Entrepreneur Challenge</h3>
  <ul className={styles.bonusList}>
    <li>Plan & Budget: Estimate costs for simple flyers/posters</li>
    <li>Outreach & Marketing: Talk to a printing shop; explore real outreach</li>
    <li>Teamwork & Execution: Work in small groups with assigned roles</li>
    <li>Reflection: Present learnings on money decisions & outcomes</li>
  </ul>
  <p className={styles.bonusNote}>
    💡 This is an <strong>optional, internship-style project</strong> that gives students
    a real taste of entrepreneurship and financial decision-making.
  </p>
</div>

      {/* Soft CTA */}
      <div className={styles.cta}>
        <p>Get in touch with us to know more about this course and how it can benefit your child.</p>
        <a className={styles.ctaBtn} href="https://wa.me/918904749795">Know More</a>
      </div>
    </div>
  );
}
