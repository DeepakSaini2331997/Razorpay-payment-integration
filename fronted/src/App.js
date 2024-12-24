import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home"
import paymentSuccess from "./paymentSuccess";
import paymentFail from "./paymentFail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment-success" element={<paymentSuccess/>}/>
        <Route path="/payment-fail" element={<paymentFail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
