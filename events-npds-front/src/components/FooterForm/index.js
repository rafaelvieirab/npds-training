import { useHistory } from "react-router";

import './index.css';

const FooterForm = ({areFieldsValid}) => {
  const history = useHistory();

  return (
    <footer>
      <button type="button" onClick={history.goBack}>Cancelar</button>
      <button type="submit" disabled={() => !(areFieldsValid())}>Salvar</button>
    </footer>
  );
}

export default FooterForm;