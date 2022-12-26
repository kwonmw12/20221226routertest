import { Routes, Link, Route } from 'react-router-dom';
import Notice from './Notice';
import Gallery from './Gallery';
import Nopage from './Nopage';


function App() {
  return (
    <div className="App">
      <h2>주소창을 확인하고 노출되는 컴포넌트 : 외관상 웹사이트랑 동일해보임</h2>
      <ul>
        <li>
          <Link to="/board/">공지사항</Link>
        </li>
        <li>
          <Link to="/gallery/">사진첩</Link>
        </li>
        <li>
          <Link to="/intranet/">인트라넷</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/board/' element={<Notice />}></Route>
        <Route path='/gallery/' element={<Gallery />}></Route>
        <Route path='*' element={<Nopage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
