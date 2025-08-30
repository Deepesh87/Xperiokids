import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./library.module.css";

// ---- Sample covers (replace with your assets or remote URLs) ----
import cover1 from "../../assets/wimpy_kid.webp";
import cover2 from "../../assets/TheaStilton.webp";

/* =========================
   Data
========================= */
const BOOKS = [
  {
    id: "b1",
    title: "Diary of a Wimpy Kid – The Complete Collection",
    author: "Jeff Kinney",
    gradeFrom: 4,
    gradeTo: 9,
    tags: ["inspiration", "values", "classics"],
    cover: cover1,
    blurb:
      "Laugh-out-loud adventures of Greg Heffley. This bestselling series captures the ups and downs of middle school life with humor, heart, and relatable lessons."
  },
  {
    id: "b8",
    title: "Thea Stilton Magical Adventures Collection",
    author: "Thea Stilton",
    gradeFrom: 4,
    gradeTo: 8,
    tags: ["values", "inspiration", "classics"],
    cover: cover2,
    blurb:
      "A delightful set of Thea Stilton stories — These magical adventures blend friendship, courage, and imagination to inspire young readers."
  },
  {
    id: "b9",
    title: "Fing",
    author: "David Walliams",
    gradeFrom: 3,
    gradeTo: 7,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/Fing.webp"),
    blurb:
      "Meet Myrtle Meek and her outlandish demand for a pet ‘Fing’. A wildly funny story about imagination, greed, and learning what truly matters."
  },
  {
    id: "b10",
    title: "Slime",
    author: "David Walliams",
    gradeFrom: 3,
    gradeTo: 7,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/Slime.webp"),
    blurb:
      "A mischievous tale of Ned, a boy who discovers a magical slime that helps him stand up to the meanest grown-ups on his island."
  },
  {
    id: "b11",
    title: "The Beast of Buckingham Palace",
    author: "David Walliams",
    gradeFrom: 4,
    gradeTo: 8,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/BeastBuckingham.webp"),
    blurb:
      "Set in a dark future, Prince Alfred must save his mother, the Queen, from terrifying beasts and uncover hidden secrets in Buckingham Palace."
  },
  {
    id: "b12",
    title: "Code Name Bananas",
    author: "David Walliams",
    gradeFrom: 4,
    gradeTo: 8,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/CodeNameBananas.webp"),
    blurb:
      "An epic WWII adventure where 11-year-old Eric and his gorilla friend, Gertrude, embark on a daring journey to protect freedom."
  },
  {
    id: "b13",
    title: "The World’s Worst Children – Complete Collection",
    author: "David Walliams",
    gradeFrom: 3,
    gradeTo: 8,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/WorstChildren.webp"),
    blurb:
      "From Dribbling Drew to Sofia Sofa, this hilarious collection of short stories spans three volumes — *The World’s Worst Children 1, 2, and 3*. Packed with outrageous characters, laugh-out-loud humor, and lessons tucked into every tale."
  },
  {
    id: "b14",
    title: "The Secret Seven – Complete Collection",
    author: "Enid Blyton",
    gradeFrom: 3,
    gradeTo: 8,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/SecretSeven.webp"),
    blurb:
      "Join Peter, Janet, Jack, Barbara, George, Pam, Colin, and Scamper the dog in this classic detective series. The Secret Seven solve mysteries, uncover clues, and celebrate teamwork and friendship across fifteen timeless adventures."
  },
  {
    id: "b15",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    gradeFrom: 6,
    gradeTo: 10,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/LittlePrince.webp"),
    blurb:
      "A timeless fable about a young prince who travels from planet to planet, discovering the nature of love, friendship, and what it means to see with the heart. A must-read classic that continues to inspire children and adults alike."
  },
  {
    id: "b16",
    title: "Stories for Boys Who Dare to be Different",
    author: "Ben Brooks",
    gradeFrom: 5,
    gradeTo: 10,
    tags: ["inspiration", "biography", "values"],
    cover: require("../../assets/BoysDareDifferent.webp"),
    blurb:
      "An empowering collection of true stories about boys and men who changed the world by being themselves — from artists and scientists to activists and everyday heroes. Inspires readers to embrace courage, kindness, and individuality."
  },
  {
    id: "b17",
    title: "Diary of a Wimpy Kid: The Getaway",
    author: "Jeff Kinney",
    gradeFrom: 4,
    gradeTo: 10,
    tags: ["values", "inspiration", "classics"],
    cover: require("../../assets/WimpyKid_Getaway.webp"),
    blurb:
      "Greg Heffley and his family take a holiday getaway to a tropical resort — but sun, sand, and relaxation quickly turn into chaos. A hilarious installment in the bestselling Wimpy Kid series."
  },
  {
    id: "b18",
    title: "Famous People’s Famous Speeches",
    author: "Various",
    gradeFrom: 6,
    gradeTo: 10,
    tags: ["public speaking", "inspiration", "values"],
    cover: require("../../assets/FamousSpeeches.webp"),
    blurb:
      "A powerful collection of landmark speeches by world leaders, thinkers, and changemakers. From Martin Luther King Jr. to M. K. Gandhi, these speeches showcase the art of words that shaped history and continue to inspire confident communication."
  },
  {
    id: "b19",
    title: "Unfinished",
    author: "Priyanka Chopra Jonas",
    gradeFrom: 10,
    gradeTo: null, // open-ended (10+)
    tags: ["biography", "inspiration", "values"],
    cover: require("../../assets/Unfinished.webp"),
    blurb:
      "The memoir of global icon Priyanka Chopra Jonas — tracing her journey from India to Hollywood, and the lessons of resilience, ambition, and identity she learned along the way. A candid, inspiring read for older teens."
  }
];

// Text-only list to avoid images
const REMAINING_BOOKS = [
  { title: "The Secret", author: "Rhonda Byrne", gradeFrom: 8, gradeTo: null, tags: ["inspiration","values"] },
  { title: "Space Oddity", author: "Ross Welford", gradeFrom: 5, gradeTo: 8, tags: ["science","inspiration"] },
  { title: "Puzzles to Puzzle You", author: "Shakuntala Devi", gradeFrom: 6, gradeTo: 10, tags: ["STEM","values"] },
  { title: "Princess Mirror-Belle", author: "Julia Donaldson", gradeFrom: 3, gradeTo: 6, tags: ["values","inspiration"] },
  { title: "100 Maths Puzzles with Answers", author: "Gikso", gradeFrom: 5, gradeTo: 9, tags: ["STEM","values"] },
  { title: "Dictionary of Common Errors", author: "Longman", gradeFrom: 9, gradeTo: null, tags: ["public speaking","classics"] },
  { title: "Selected Short Stories", author: "Rabindranath Tagore", gradeFrom: 9, gradeTo: null, tags: ["classics","values","inspiration"] },
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", gradeFrom: 10, gradeTo: null, tags: ["biography","inspiration","values"] },
  { title: "The Psychology of Money", author: "Morgan Housel", gradeFrom: 9, gradeTo: null, tags: ["inspiration","values"] },
  { title: "Impatient Optimist: Bill Gates in His Own Words", author: "Bill Gates (Biography)", gradeFrom: 9, gradeTo: null, tags: ["biography","inspiration"] },
  { title: "The Bedside Book of Humorous Literary Quotations", author: "Fred Metcalf (Ed.)", gradeFrom: 9, gradeTo: null, tags: ["classics","inspiration"] },
  { title: "House Arrest", author: "K.A. Holt (likely)", gradeFrom: 6, gradeTo: 9, tags: ["values","inspiration"] },
  { title: "The Hardy Boys", author: "Franklin W. Dixon", gradeFrom: 4, gradeTo: 9, tags: ["classics","values","inspiration"] },
  { title: "Tuesdays with Morrie", author: "Mitch Albom", gradeFrom: 9, gradeTo: null, tags: ["biography","inspiration","values"] },
  { title: "Charlie and the Chocolate Factory", author: "Roald Dahl", gradeFrom: 3, gradeTo: 7, tags: ["classics","values","inspiration"] },
  { title: "The Road Less Traveled", author: "M. Scott Peck", gradeFrom: 10, gradeTo: null, tags: ["inspiration","values"] },
  { title: "The Mouse That Roared", author: "Ramanathan & Gupta", gradeFrom: 9, gradeTo: null, tags: ["classics","values"] },
  { title: "The Aristocats", author: "Disney", gradeFrom: 3, gradeTo: 6, tags: ["values","inspiration"] },
  { title: "365 Science Experiments", author: "Alka Publications", gradeFrom: 3, gradeTo: 8, tags: ["science","STEM","inspiration"] },
  { title: "Classic Starts – Gulliver’s Travels", author: "Classic Starts Series", gradeFrom: 5, gradeTo: 8, tags: ["classics","inspiration"] },
  { title: "Classic Starts – The Prince and the Pauper", author: "Classic Starts Series", gradeFrom: 5, gradeTo: 8, tags: ["classics","inspiration"] },
  { title: "Classic Starts – The Treasure Seekers", author: "Classic Starts Series", gradeFrom: 5, gradeTo: 8, tags: ["classics","inspiration"] },
  { title: "Classic Starts – Oliver Twist", author: "Classic Starts Series", gradeFrom: 5, gradeTo: 8, tags: ["classics","inspiration"] },
  { title: "Thea Stilton – Satellite Meltdown", author: "Thea Stilton", gradeFrom: 4, gradeTo: 8, tags: ["values","inspiration"] },
  { title: "Thea Stilton – The Cloud Castle", author: "Thea Stilton", gradeFrom: 4, gradeTo: 8, tags: ["values","inspiration"] },
  { title: "Transformers", author: "Hasbro / Novelization", gradeFrom: 4, gradeTo: 8, tags: ["values","inspiration"] },
  { title: "Encyclopedia of Earth", author: "Reference", gradeFrom: 5, gradeTo: 10, tags: ["science","inspiration"] },
  // Family/Adult items (optional to show)
  { title: "Good Moms Have Scary Thoughts", author: "Karen Kleiman / Karen Kishan (likely)", gradeFrom: null, gradeTo: null, tags: ["parents","wellbeing"] },
  { title: "Traveler’s Guide: New Testament", author: "American Bible Society", gradeFrom: null, gradeTo: null, tags: ["family","reference"] },
];

const GRADE_BUCKETS = [
  { key: "2-5",  label: "Grade 2–5",  from: 2,  to: 5 },
  { key: "5-10", label: "Grade 5–10", from: 5,  to: 10 },
  { key: "10+",  label: "Grade 10+",  from: 10, to: null },
];

const TAGS = [
  "public speaking",
  "STEM",
  "robotics",
  "science",
  "biography",
  "picture books",
  "classics",
  "values",
  "inspiration"
];

/* =========================
   Helpers
========================= */
const overlaps = (fromA, toA, fromB, toB) => {
  const aFrom = Number.isFinite(fromA) ? fromA : -Infinity;
  const aTo   = Number.isFinite(toA)   ? toA   :  Infinity;
  const bFrom = Number.isFinite(fromB) ? fromB : -Infinity;
  const bTo   = Number.isFinite(toB)   ? toB   :  Infinity;
  return Math.max(aFrom, bFrom) <= Math.min(aTo, bTo);
};

const gradeLabel = (from, to) =>
  `G${from == null ? "" : from}${to == null ? "+" : `–${to}`}`;

/* =========================
   Card
========================= */
function BookCard({ book }) {
  return (
    <article className={styles.bookCard}>
      <div className={styles.coverWrap}>
        <img
          src={book.cover}
          alt={`${book.title} book cover`}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.gradeChip}>
          {gradeLabel(book.gradeFrom, book.gradeTo)}
        </span>
      </div>
      <div className={styles.bookBody}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <p className={styles.bookAuthor}>by {book.author}</p>
        <p className={styles.bookBlurb}>{book.blurb}</p>
        <div className={styles.tagRow}>
          {book.tags.map((t) => (
            <span className={styles.tag} key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* =========================
   Page
========================= */
export default function Library() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [activeGrade, setActiveGrade] = useState(null); // key from GRADE_BUCKETS
  const [tag, setTag] = useState("");

  // Image-card books (BOOKS)
  const filtered = useMemo(() => {
    return BOOKS.filter((b) => {
      const q = query.trim().toLowerCase();

      const textHit =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.blurb.toLowerCase().includes(q);

      const bucket = activeGrade
        ? GRADE_BUCKETS.find((g) => g.key === activeGrade)
        : null;

      const gradeHit =
        !bucket || overlaps(b.gradeFrom, b.gradeTo, bucket.from, bucket.to);

      const tagHit =
        !tag ||
        b.tags.some((t) => t.toLowerCase() === tag.toLowerCase());

      return textHit && gradeHit && tagHit;
    });
  }, [query, activeGrade, tag]);

  // Text-only books (REMAINING_BOOKS)
  const remainingFiltered = useMemo(() => {
    return REMAINING_BOOKS.filter((b) => {
      const q = query.trim().toLowerCase();

      const textHit =
        !q ||
        b.title.toLowerCase().includes(q) ||
        (b.author && b.author.toLowerCase().includes(q));

      const bucket = activeGrade
        ? GRADE_BUCKETS.find((g) => g.key === activeGrade)
        : null;

      const gradeHit =
        !bucket || overlaps(b.gradeFrom, b.gradeTo, bucket.from, bucket.to);

      const tagHit =
        !tag ||
        (b.tags && b.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));

      return textHit && gradeHit && tagHit;
    });
  }, [query, activeGrade, tag]);

  // Empty-state helpers
  const noResultsCoverOnly = filtered.length === 0 && remainingFiltered.length > 0;
  const noResultsAll = filtered.length === 0 && remainingFiltered.length === 0;

  return (
    <>
      <Helmet>
        <title>Children’s Library | Xperio Learning</title>
        <meta
          name="description"
          content="A cozy, growing library for young readers at Xperio Learning — picture books, STEM picks, classics, biographies, and public speaking reads."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/library" />
      </Helmet>

      <Nav />

      <main className={styles.page}>
        {/* ------------ Hero ------------- */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>📚 Xperio Children’s Library</h1>
            <p className={styles.subtitle}>
              A cozy corner for curious minds — handpicked reads to fuel{" "}
              <strong>confidence, creativity, and discovery</strong>.
            </p>
            <div className={styles.heroActions}>
              <button
                className={styles.ctaPrimary}
                onClick={() => {
                  const el = document.getElementById("browser");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Browse Books
              </button>
              <button
                className={styles.ctaGhost}
                onClick={() => navigate("/voicemasters")}
              >
                Back to Voicemasters
              </button>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.bookStack}>
              <span className={`${styles.book} ${styles.magenta}`}></span>
              <span className={`${styles.book} ${styles.orange}`}></span>
              <span className={`${styles.book} ${styles.teal}`}></span>
              <span className={`${styles.book} ${styles.blue}`}></span>
            </div>
            <div className={styles.sparkles}>
              <span>✦</span><span>✦</span><span>✦</span>
            </div>
          </div>
        </section>

        {/* ----------- Quote Strip ---------- */}
        <section className={styles.quoteStrip}>
          “A book is a dream you can hold in your hands.”
          <span className={styles.quoteAuthor}>— Neil Gaiman</span>
        </section>

        {/* ----------- Filters + Browser ---------- */}
        <section id="browser" className={styles.browser} aria-label="Library browser">
          <h2 className={styles.sectionTitle}>Find Your Next Read</h2>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.search}
              placeholder="Search by title, author, or idea…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search books"
            />

            <div className={styles.filterRow}>
              <div className={styles.gradeFilter}>
                {GRADE_BUCKETS.map((g) => (
                  <button
                    key={g.key}
                    className={`${styles.pill} ${activeGrade === g.key ? styles.pillActive : ""}`}
                    onClick={() => setActiveGrade((prev) => (prev === g.key ? null : g.key))}
                    aria-pressed={activeGrade === g.key}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              <div className={styles.tagFilter}>
                <select
                  className={styles.select}
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  aria-label="Filter by theme"
                >
                  <option value="">All themes</option>
                  {TAGS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Image-card grid */}
          <div className={styles.grid}>
            {filtered.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
            {noResultsCoverOnly && (
              <p className={styles.empty}>No image-card matches. Scroll down for more titles.</p>
            )}
          </div>

          {/* ----------- Text-only list (no images) ---------- */}
          <section className={styles.moreList} aria-label="More titles (text-only)">
            <h2 className={styles.sectionTitle}>More from our shelves</h2>
            <ul className={styles.list}>
              {remainingFiltered.map((b, i) => (
                <li key={`${b.title}-${i}`} className={styles.listItem}>
                  <div className={styles.listLineTop}>
                    <span className={styles.listTitle}>{b.title}</span>
                    {(b.gradeFrom != null || b.gradeTo != null) && (
                      <span className={styles.listChip}>
                        {gradeLabel(b.gradeFrom, b.gradeTo)}
                      </span>
                    )}
                  </div>
                  <div className={styles.listLineBottom}>
                    <span className={styles.listAuthor}>by {b.author}</span>
                    <span className={styles.listTags}>
                      {b.tags && b.tags.join(" • ")}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            {noResultsAll && (
              <p className={styles.empty}>No matches. Try a different grade or theme.</p>
            )}
          </section>
        </section>

        {/* ----------- Reading Nook / Rules ---------- */}
        <section className={styles.nook}>
          <div className={styles.nookCard}>
            <h3 className={styles.nookTitle}>☕ Reading Book Etiquette</h3>
            <ul className={styles.nookList}>
              <li>Handle books with care; return them to the labeled shelf.</li>
              <li>Keep voices soft — let readers immerse in their worlds.</li>
              <li>Food outside the library zone; capped water bottles are okay.</li>
            </ul>
          </div>
          <div className={styles.nookCard}>
            <h3 className={styles.nookTitle}>📦 Borrowing & Returns</h3>
            <ul className={styles.nookList}>
              <li>Borrow up to <strong>2 books</strong> for <strong>14 days</strong>.</li>
              <li>Late? Just let us know — we’re flexible with genuine needs.</li>
              <li>Lost or damaged? Kindly replace or speak to the team.</li>
            </ul>
          </div>
          <div className={styles.nookCard}>
            <h3 className={styles.nookTitle}>🎁 Donate a Book</h3>
            <p className={styles.nookText}>
              We love community picks! If you have age-appropriate children’s books in good
              condition, donate them to grow our shelves. We’ll add a small{" "}
              <em>“From the family of {`{Your Child’s Name}` }”</em> sticker inside.
            </p>
          </div>
        </section>

        {/* ----------- CTA stripe ---------- */}
        <section className={styles.ctaStripe} role="region" aria-label="Visit us">
          <div>
            <h3 className={styles.ctaTitle}>Visit the Library at Xperio Learning</h3>
            <p className={styles.ctaText}>
              Drop by on weekends before/after your Voicemasters class — or swing by any time we’re open.
            </p>
          </div>
          {/* <button className={styles.ctaPrimary} onClick={() => navigate("/contact")}>
              Get Directions
            </button> */}
        </section>
      </main>

      <Footer />
    </>
  );
}
