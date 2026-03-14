const items = [
  "Product Owner", "◆", "Scrum Master", "◆", "SAFe 6 PO/PM", "◆",
  "Healthcare Technology", "◆", "Agile Leadership", "◆", "EdTech Innovation", "◆",
  "Data Analytics", "◆", "SDLC Expert", "◆", "Cross-Functional Teams", "◆",
  "Strategic Planning", "◆", "PI Planning", "◆", "Customer-Centric Design", "◆",
];

const MarqueeBanner = () => (
  <div className="overflow-hidden border-y border-border py-4 bg-card/50">
    <div className="animate-marquee flex whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="font-mono text-xs text-muted-foreground tracking-wider mx-4">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeBanner;
