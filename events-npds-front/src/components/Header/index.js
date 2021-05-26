import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import './index.css';
import arrowLeftIcon from "../../images/arrow-left.svg";
import addIcon from "../../images/add.svg";

const Header = ({ title, link }) => {
  const history = useHistory();

  return (
    <header>
      <div className="header-content">
        <button className="btnGoBack" type="button" onClick={history.goBack} title="Voltar para página anteior" >
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
      </div>
    </header>
  );
}

export default Header;