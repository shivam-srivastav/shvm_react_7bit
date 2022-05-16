import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import ViewUsers from './Components/Dashboard/ViewUsers/ViewUsers';
import { connect } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';

function App({status}) {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace/>}/>
          <Route path='/login' element={status?<Navigate to="/dashboard" replace/>:<Login/>} />
          <Route path='/dashboard' element={status?<Dashboard />:<Navigate to="/login" replace/>}>
          </Route>
          <Route path='/userPage' element={<ViewUsers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => ({
  status: state.user.status,
})
const mapDispatchToProps = (dispatch) => ({
  
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
