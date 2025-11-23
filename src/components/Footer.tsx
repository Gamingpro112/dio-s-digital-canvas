const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-base text-muted-foreground">
          © {new Date().getFullYear()} Dio Syahputra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
