import { story } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Story() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="story-head">
          <span className="sec-label">{story.label}</span>
          <div className="sec-line" />
        </Reveal>

        <Reveal>
          <h2 className="story-lead">{story.lead}</h2>
        </Reveal>

        <div className="story-body">
          {story.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.06 + i * 0.06}>
              <p className="story-p">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28}>
          <p className="story-now">
            <span className="story-now-dot" aria-hidden />
            {story.now}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
