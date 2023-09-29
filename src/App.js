import Dashboard from "./component/orderPage/OrderPage";
import SupplierData from "./component/orderPage/SupplierData";
import ApproveOrder from "./component/orderPage/ApproveOrder";
import Navbar from "./component/orderPage/Navbar";
import "./App.css";
const style = {
  backgroundColor: "rgb(239, 239, 239)",
};
function App() {
  return (
    <>
      <Navbar />
      <div style={style}>
        <div className="shadow-md bg-white w-full pb-1">
          <ApproveOrder />
        </div>
        <div className="w-[85%] my-4 mx-auto flex flex-col">
          <SupplierData />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
