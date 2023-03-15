<<<<<<< HEAD
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
=======
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Header></Header>
>>>>>>> Header terminado
  );
}

export default App;
