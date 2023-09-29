const Footer = () => {
  return (
    <footer className="Footer">
      <div style={{ left: "0" }}>
        <a>Email: vitaliy.one.gm@gmail.com</a> <br />
        <p>
          GitHub:
          <a
            href="https://github.com/VitaliyOne/marvel-heroes-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/VitaliyOne/marvel-heroes-list
          </a>
        </p>
      </div>
      <div style={{ marginTop: "10px" }}>
        <p>
          Original API:
          <a
            href="https://developer.marvel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://developer.marvel.com/
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
