import React from "react";
import "./App.css";

const App = () => {
  const handleClick = (event, link) => {
    event.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <form>
      <h1>Circulares & Cambio de Dollar</h1>
      <div className="row">
        <div className="shops">
          <p>
            <a
              href="https://www.circulaires.com/Maxi/?region=Montreal"
              onClick={(event) =>
                handleClick(
                  event,
                  "https://www.circulaires.com/Maxi/?region=Montreal"
                )
              }
            >
              <img src="/maxi-cie.gif" alt="MAXI" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.circulaires.com/provigo/"
              onClick={(event) =>
                handleClick(event, "https://www.circulaires.com/provigo/")
              }
            >
              <img src="/provigo.gif" alt="PROVIGO" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.circulaires.com/supermarche-iga/"
              onClick={(event) =>
                handleClick(
                  event,
                  "https://www.circulaires.com/supermarche-iga/"
                )
              }
            >
              <img src="/iga.gif" alt="IGA" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.circulaires.com/walmart/"
              onClick={(event) =>
                handleClick(event, "https://www.circulaires.com/walmart/")
              }
            >
              <img src="/walmart.gif" alt="WALMART" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.circulaires.com/marche-adonis/"
              onClick={(event) =>
                handleClick(event, "https://www.circulaires.com/marche-adonis/")
              }
            >
              <img src="/marche-adonis.gif" alt="ADONIS" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.jeancoutu.com/circulaire-en-ligne/"
              onClick={(event) =>
                handleClick(
                  event,
                  "https://www.jeancoutu.com/circulaire-en-ligne/"
                )
              }
            >
              <img src="/jean-coutu.gif" alt="JEAN-COUTU" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.circulaires.com/pharmaprix/"
              onClick={(event) =>
                handleClick(event, "https://www.circulaires.com/pharmaprix/")
              }
            >
              <img src="/pharmaprix.gif" alt="PHARMAPRIX" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.superc.ca/circulaire"
              onClick={(event) =>
                handleClick(event, "https://www.superc.ca/circulaire")
              }
            >
              <img src="/superc.gif" alt="SUPER C" />
            </a>
          </p>
        </div>
        <div className="shops">
          <p>
            <a
              href="https://www.google.com/finance/quote/CAD-COP?hl=en"
              onClick={(event) =>
                handleClick(
                  event,
                  "https://www.google.com/finance/quote/CAD-COP?hl=en"
                )
              }
            >
              DOLLAR
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default App;
