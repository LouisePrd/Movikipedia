import "../assets/styles/cardsList.css";

export default function Cards({ title, children }) {
    return (
      <div className="card">
        <h2 id="cardTitle">{title}</h2>
        <div className="cardContent">
          {children}
        </div>
      </div>
    );
  }
  