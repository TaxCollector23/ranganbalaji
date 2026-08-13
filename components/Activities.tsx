import { likes } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

export default function Activities() {
  return (
    <section className="section" id="beyond">
      <div className="wrap">
        <SectionHeader label="Things I Like To Do" />

        <div className="likes-groups">
          {likes.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.06} className="likes-group">
              <h3 className="likes-label mono">{group.group}</h3>
              <ul className="likes-items">
                {group.items.map((item) => (
                  <li key={item} className="likes-chip">
                    {item}
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
