import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBAr from './NavBar';

function Back() {
  return (
    <BackContext.Provider value={{}}>
        <NavBAr></NavBAr>
    
    </BackContext.Provider>
  );
}

export default Back;