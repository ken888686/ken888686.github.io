export default function Footer() {
  return (
    <footer className="container items-center justify-between py-10 mx-auto footer">
      <div className="flex-col items-center justify-between">
        <i className="text-5xl text-primary bi bi-braces-asterisk" />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="flex items-center gap-5">
        <a href="https://www.linkedin.com/in/yungchuntu/" target="_blank" rel="noreferrer">
          <i className="text-3xl bi bi-linkedin" />
        </a>
        <a href="https://github.com/ken888686" target="_blank" rel="noreferrer">
          <i className="text-3xl bi bi-github" />
        </a>
        <a href="https://www.instagram.com/aarontu.8293/" target="_blank" rel="noreferrer">
          <i className="text-3xl bi bi-instagram" />
        </a>
      </div>
    </footer>
  );
}
