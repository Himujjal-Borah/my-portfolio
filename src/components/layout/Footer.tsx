export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-logo">HIMUJJAL BORAH</a>
          <p className="footer-text">SOFTWARE DEVELOPER</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copyright">&copy; {year} Himujjal Borah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
