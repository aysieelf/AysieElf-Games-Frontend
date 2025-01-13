function Footer() {
  return (
    <footer className="py-8 px-8">
      <div className="cozy-container flex justify-center gap-8">
        <a href="https://github.com/aysieelf"
           className="font-display text-cozy-text-soft hover:text-cozy-leaf-dark
                    transition-all duration-300 hover-lift">
          GitHub
        </a>
        <a href="https://linkedin.com/in/aysieelf"
           className="font-display text-cozy-text-soft hover:text-cozy-leaf-dark
                    transition-all duration-300 hover-lift">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;