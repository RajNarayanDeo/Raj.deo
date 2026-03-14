const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-lg font-bold italic">RND.</span>
      <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} Raj Narayan Deo. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
