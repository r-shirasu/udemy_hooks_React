import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <h4>イベント作成ホーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
