import './assets/style.css'
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
// import ListProduct from './components/ListProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return <>
    {/* <ListProduct /> */}
    <AddProduct />
    <UpdateProduct />
    <DeleteProduct />
  </>
}

export default App
