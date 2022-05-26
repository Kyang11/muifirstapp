
import './App.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import Book from './components/Book';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import Rating from './components/Rating';
import Removebtn from './components/Removebtn';
function App() {
  return (
      <NavBar>
        <Book></Book>
        <RegisterForm></RegisterForm>
        <LoginForm></LoginForm>
        <Rating></Rating>
        <Removebtn></Removebtn>
      </NavBar>
  );
}

export default App;
