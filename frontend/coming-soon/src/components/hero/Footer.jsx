function Footer() {
  return (
    <footer className="py-6 px-8 bg-cozy-cream">
      <div className="flex justify-center space-x-8">
        <a href="https://github.com/aysieelf"
           className="font-pixel text-sm text-cozy-dark hover:text-cozy-dusty transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/aysieelf"
           className="font-pixel text-sm text-cozy-dark hover:text-cozy-dusty transition-colors">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;