const V2Footer = () => (
  <footer className="border-t border-v2-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-v2-heading text-lg font-black tracking-tighter text-v2-accent">R.N.D</span>
      <p className="text-v2-muted text-xs tracking-wider">© {new Date().getFullYear()} Raj Narayan Deo. All rights reserved.</p>
    </div>
  </footer>
);

export default V2Footer;
