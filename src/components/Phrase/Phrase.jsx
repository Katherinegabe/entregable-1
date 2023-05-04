import "./Phrase.css";

const Phrase = ({phrase}) => {
  return (
    <section className="phrase_container">
        <p>{phrase}</p>
    </section>
  );
};

export default Phrase;