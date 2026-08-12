import { activities } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

export default function Activities() {
  return (
    <section className="section" id="beyond">
      <div className="wrap">
        <SectionHeader label="Beyond Code" />

        <div className="act-groups">
          {activities.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.06} className="act-group">
              <h3 className="act-group-label mono">{group.group}</h3>
              <ul className="act-items">
                {group.items.map((item) => (
                  <li key={item.title} className="act-item">
                    <div className="act-item-head">
                      <span className="act-title">{item.title}</span>
                      <span className="act-meta mono">{item.meta}</span>
                    </div>
                    <p className="act-desc">{item.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
