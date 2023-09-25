import { useState, useEffect } from "react";
import Affirmation from "./components/affirmation";
import Header from "./components/header";

function App() {
  const [affirmation, setAffirmation] = useState([]);
  const url =
    "https://corsproxy.io/?" +
    encodeURIComponent("https://www.affirmations.dev/");

  const generateAffirmation = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAffirmation([{ body: data.affirmation }]);
      });
  };

  useEffect(() => {
    generateAffirmation();
  }, []);

  return (
    <main>
      <Header />
      <div className="button-container">
        <button
          className="button-54"
          role="button"
          onClick={generateAffirmation}
        >
          NEED ANOTHER ONE!?
        </button>
      </div>
      <section className="posts-container">
        {affirmation.map((post) => (
          <Affirmation body={post.body} />
        ))}
      </section>
    </main>
  );
}

export default App;
