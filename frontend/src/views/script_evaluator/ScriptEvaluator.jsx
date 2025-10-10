// File: src/pages/ScriptEvaluator.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./ScriptEvaluator.module.css";

/* Site chrome */
import Nav from "../../components/Navbar/Nav";

/* ===== Rate limit (client-side helper; server should still enforce) ===== */
const MAX_TRIES = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const LS_KEY = "xe_script_eval_attempts"; // stores an array of timestamps (ms)

/** Get recent attempts (within the rolling 1-hour window) */
function getAttempts() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    const cutoff = Date.now() - WINDOW_MS;
    return arr.filter((t) => t > cutoff);
  } catch {
    return [];
  }
}
/** Save attempts back to localStorage */
function setAttempts(arr) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
  } catch {}
}
/** Add an attempt (now) */
function addAttempt() {
  const arr = getAttempts();
  arr.push(Date.now());
  setAttempts(arr);
}
/** Next reset time (ms) = earliest timestamp + WINDOW_MS */
function nextResetTimeMs() {
  const arr = getAttempts();
  if (arr.length === 0) return 0;
  const earliest = Math.min(...arr);
  return earliest + WINDOW_MS;
}

export default function ScriptEvaluator() {
  const [script, setScript] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Rate limit UI state
  const [attempts, setAttemptsState] = useState(getAttempts());
  const remaining = Math.max(0, MAX_TRIES - attempts.length);
  const [now, setNow] = useState(Date.now());
  const resetAt = nextResetTimeMs();
  const cooldownMs = Math.max(0, resetAt - now);

  // Tick every 1s to update cooldown text
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  // Refresh attempts every few seconds in case another tab used the tool
  useEffect(() => {
    const check = () => setAttemptsState(getAttempts());
    const id = setInterval(check, 5000);
    return () => clearInterval(id);
  }, []);

  // Basic client-side stats
  const stats = useMemo(() => {
    const words = script.trim().split(/\s+/).filter(Boolean);
    return { wordCount: words.length, charCount: script.length };
  }, [script]);

  // Cooldown text
  const cooldownText = useMemo(() => {
    if (cooldownMs <= 0) return "";
    const s = Math.ceil(cooldownMs / 1000);
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}m ${r}s`;
  }, [cooldownMs]);

  const handleEvaluate = async () => {
    if (remaining <= 0) return; // client-side guard

    setLoading(true);
    setResult(null);
    setErrorMsg("");

    try {
      // Count attempt immediately (even if backend fails)
      addAttempt();
      setAttemptsState(getAttempts());

      const response = await fetch("http://localhost:5000/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ script }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Evaluation failed");
      }
      setResult(data);
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setScript("");
    setResult(null);
    setErrorMsg("");
  };

  // Score helpers
  const score = result?.score ?? 0;
  const scoreLabel =
    score >= 80 ? "Excellent" :
    score >= 60 ? "Good" :
    score >= 40 ? "Needs Work" :
    score > 0   ? "Low" : "—";

  return (
    <>
      <Helmet>
        <title>AI-Powered Script Personalization Evaluator | Xperio Learning</title>
        <meta
          name="description"
          content="AI-powered tool to evaluate how personalized your speech script is. Get a score, reason, and actionable tips to make it truly yours."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/script-evaluator" />
      </Helmet>

      <Nav />
      <a href="#main-content" className={styles.skipLink}>Skip to content</a>

      <main id="main-content" className={styles.page}>
        {/* Hero */}
        <header className={styles.hero}>
          <p className={styles.eyebrow}>
            VoiceMasters • Public Speaking
            <span className={styles.aiBadge}>AI-powered</span>
          </p>

          <h1 className={styles.title}>
            <span className={styles.aiAccent}>AI-Powered</span> Script Personalization Evaluator
          </h1>

          <blockquote className={styles.quote}>
            <span className={styles.quoteMark}>“</span>
            If someone else can deliver your script as-is, it isn’t personal yet. Make it yours.
            <span className={styles.quoteMark}>”</span>
          </blockquote>

          {/* ===== Usage policy & counter ===== */}
          <div className={styles.notice} role="note" aria-live="polite">
            <strong>Usage limit:</strong> You can evaluate <strong>{MAX_TRIES} scripts per hour</strong>.
            <br className={styles.hideOnWide} />
            <span className={styles.counter}>
              <span className={styles.dot} aria-hidden="true" /> Tries left: <b>{remaining}</b>
              {remaining === 0 && (
                <>
                  {" "}/ cooldown: <b>{cooldownText}</b>
                </>
              )}
            </span>
            <p className={styles.nudge}>
              Please use submissions wisely. Don’t re-submit after tiny edits—review thoughtfully,
              make meaningful improvements, and then evaluate. This helps you get better feedback
              and keeps the tool fair for everyone.
            </p>
          </div>

<div className={styles.thresholds} role="note" aria-label="Score guidance">
  <div className={styles.scaleNote}>Score is out of <b>10</b>.</div>
  <ul className={styles.scaleList}>
    <li>
      <span className={`${styles.pill} ${styles.bad}`}>Below 4</span>
      <span className={styles.lineText}>Needs a lot of improvement.</span>
    </li>
    <li>
      <span className={`${styles.pill} ${styles.ok}`}>4 to 6</span>
      <span className={styles.lineText}>Good start — refine further.</span>
    </li>
    <li>
      <span className={`${styles.pill} ${styles.good}`}>Above 6</span>
      <span className={styles.lineText}>Okay to submit for faculty review.</span>
    </li>
  </ul>
</div>
<p className={styles.sublead}>
  Paste your speech, click <strong>Evaluate</strong>, and get an AI-driven personalization score with quick fixes.
</p>

        </header>

        {/* Input Card */}
        <section className={styles.card}>
          <label htmlFor="script" className={styles.label}>
            Your Speech Script
          </label>

          <textarea
            id="script"
            className={styles.textarea}
            rows={12}
            placeholder="Paste your speech script here…"
            value={script}
            onChange={(e) => setScript(e.target.value)}
            aria-describedby="script-help stats"
          />

          <div id="script-help" className={styles.help}>
            Tip: Speeches should be deeply personal and flow from genuine feeling, & ‘only-you’ experiences.
          </div>

          <div id="stats" className={styles.stats}>
            <span>{stats.wordCount} words</span>
            <span>{stats.charCount} characters</span>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.primaryBtn}
              onClick={handleEvaluate}
              disabled={!script.trim() || loading || remaining <= 0}
              title={remaining <= 0 ? "Limit reached. Please wait for the cooldown." : undefined}
            >
              {loading ? "Evaluating…" : "Evaluate"}
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={handleClear}
              disabled={!script && !result && !errorMsg}
              type="button"
            >
              Clear
            </button>
          </div>

          {/* Progress bar while loading */}
          {loading && (
            <div className={styles.progressWrap} aria-live="polite">
              <div className={styles.progressBar} />
            </div>
          )}
        </section>

        {/* Results */}
        {(result || errorMsg) && (
          <section className={styles.resultSection} aria-live="polite">
            {errorMsg ? (
              <div className={`${styles.card} ${styles.errorCard}`}>
                <p className={styles.errorText}>⚠️ {errorMsg}</p>
              </div>
            ) : (
              <div className={`${styles.card} ${styles.resultCard}`}>
                <div className={styles.resultHeader}>
                  <div
                    className={styles.scoreRing}
                    style={{
                      background: `conic-gradient(var(--magenta) ${score}%, #eef2f7 ${score}% 100%)`,
                    }}
                    aria-label={`Personalization score ${score} out of 100`}
                    role="img"
                  >
                    <div className={styles.scoreInner}>
                      <div className={styles.scoreNumber}>{score}</div>
                      <div className={styles.scoreLabel}>{scoreLabel}</div>
                    </div>
                  </div>

                  <div className={styles.summary}>
                    <h2 className={styles.resultTitle}>Your Evaluation</h2>
                    <p className={styles.reason}><strong>Why:</strong> {result.reason}</p>
                    {result.examples?.length ? (
                      <div className={styles.examples}>
                        <strong>Personal markers found:</strong>
                        <ul>
                          {result.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>

                {Array.isArray(result.tips) && result.tips.length > 0 && (
                  <div className={styles.tipsWrap}>
                    <h3 className={styles.h3}>Quick Fixes</h3>
                    <ul className={styles.tips}>
                      {result.tips.map((tip, idx) => (
                        <li className={styles.tip} key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.hintBlock}>
                  <h4 className={styles.h4}>Try adding 2–3 of these:</h4>
                  <ul className={styles.hints}>
                    <li>Specific names (“Grandma Meera”, “Coach Arjun”)</li>
                    <li>Precise places & dates (“HSR Grounds, April 2024”)</li>
                    <li>One vivid moment (what you saw/heard/felt)</li>
                    <li>A choice you made and its outcome</li>
                    <li>A short dialogue line you actually said</li>
                  </ul>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Privacy note */}
        <p className={styles.privacyNote}>
          We don’t store your script. Content is processed only to compute your score.
        </p>
      </main>
    </>
  );
}
