function Navigation(props) {
  const pages = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <header className="App-header">
      <h3 className="logo">IRJ</h3>
      <nav>
        {pages.map((page) => (
          <li key={page}>
            <a
              href={"#" + page}
              onClick={() => props.setCurrenPage(page)}
              className=".."
            >
              {page}
            </a>
          </li>
        ))}
      </nav>
    </header>
  );
}

export default Navigation;
