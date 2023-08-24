import './App.css';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { sliceStore } from './redux/sliceStore';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
function App() {
  return (
    <Provider store={sliceStore}>
      <Router />
    </Provider>
  );
}

export default App;