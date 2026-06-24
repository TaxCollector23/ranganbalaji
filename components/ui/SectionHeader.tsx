import Reveal from "./Reveal";

export default function SectionHeader({ label }: { label: string }) {
  return (
    <Reveal className="sec-head">
      <span className="sec-label">{label}</span>
      <div className="sec-line" />
    </Reveal>
  );
}
