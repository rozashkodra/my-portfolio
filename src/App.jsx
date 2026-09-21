import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NutriAIDetails from './pages/NutriAIDetails';
import MathOlympiadDeatails from './pages/MathOlympiadDetails';
import SkincareDetails from './pages/SkincareDetails'; // 1. Import the new details page
import BudgetTransactionDetails from './pages/BudgetTransactionDetails';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/nutriai" element={<NutriAIDetails />} />
        <Route path="/projects/matholympiad" element={<MathOlympiadDeatails />} />
        <Route path="/projects/skincare" element={<SkincareDetails />} />
        <Route path="/projects/budgetTransacion" element={<BudgetTransactionDetails />} />
      </Routes>
    </Router>
  );
}