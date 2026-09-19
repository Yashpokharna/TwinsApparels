const WORDS = ["Cut", "Stitch", "Finish"];

/**
 * The entry curtain.
 *
 * Deliberately has no state, no timers and no "use client" of its own: it
 * renders into the server HTML so it covers the page from the first paint.
 * The previous version mounted from a `useEffect`, which meant the content
 * flashed first and the curtain dropped over it afterwards.
 *
 * All motion is in globals.css under "Entry animation".
 */
export default function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__inner">
        <span className="intro__label">Twins Apparels</span>

        <div className="intro__words">
          {WORDS.map((word, i) => (
            <span key={word} className="intro__word" style={{ "--i": i }}>
              {word}
            </span>
          ))}
        </div>

        <div className="intro__bar">
          <i />
        </div>
      </div>
    </div>
  );
}
