import logo from './logo.svg';
import './App.css';
import Gnb from './Gnb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
        <h1><a hef=""><img src={logo} className="App-logo" alt="logo" /></a></h1>
        <ul id="gnb">
        <Gnb gnblink='https://www.naver.com/' gnbtext="네이버" gnbtarget="_blank"></Gnb>
        <Gnb gnblink='https://www.daum.net/' gnbtext="다음" gnbtarget=""></Gnb>
                </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
