/* eslint-disable react/react-in-jsx-scope */
import { useHistory } from 'react-router-dom';

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Retour à l'accueil
    </button>
  );
}

export default HomeButton;
