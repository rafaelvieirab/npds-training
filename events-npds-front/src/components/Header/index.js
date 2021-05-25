import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import './index.css';
import arrowLeftIcon from "../../images/arrow-left.png";
import addIcon from "../../images/add.png";

const Header = ({ title, link }) => {
  const history = useHistory();

  return (
    <header>
      <button className="btnGoBack" type="button" onClick={history.goBack}>
        <img src={arrowLeftIcon} alt="Voltar para página anteior" />
      </button>

      <h2 className="title">{title}</h2>

      {link
        ? (
          <Link to={link}>
            <img src={addIcon} alt="Criar novo" title="Adicionar nova programção" />
          </Link>
        )
        : <span />
      }

    </header>
  );
}

export default Header;