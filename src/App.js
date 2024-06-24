import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Notfound from "./pages/Notfound";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Registration2 from "./pages/Registration2";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import PersonalData from "./pages/PersonalData";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Shipping from "./pages/Shipping";
import Contacts from "./pages/Contacts";
import SubCatalog from "./pages/SubCatalog";
import Admin from "./pages/Admin";
import Delete_product from "./pages/Delete_product";
import Create_product from "./pages/Create_product";
import Change_product from "./pages/Change_product";
import Delete_news from "./pages/Delete_news";
import Create_news from "./pages/Create_news";
import Change_news from "./pages/Change_news";
import User_messages from "./pages/User_messages";
import RichTextEditor from "./components/RichTextEditor";
import PrivateRoute from "./utils/PrivateRoute"
import axios from "axios";
import Security from "./pages/Security";
import AdminRoute from "./utils/AdminRoute";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="registration2" element={<Registration2/>}/>
          <Route path="*" element={<Notfound/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="favorites" element={<Favorites/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="catalog/:category" element={<SubCatalog/>}/>
          <Route path="catalog/:category/:id" element={<Product/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="profile" element={<PersonalData/>}/>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="orders" element={<Orders/>}/>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="security" element={<Security/>}/>
          </Route>

          

          <Route path="about" element={<About/>}/>
          <Route path="shipping" element={<Shipping/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="not-found" element={<Notfound/>}/>

          <Route element={<AdminRoute/>}>
            <Route path="admin-panel" element={<Admin/>}/>
          </Route>
          <Route path="delete_product" element={<Delete_product/>}/>
          <Route path="create_product" element={<Create_product/>}/>
          <Route path="change_product" element={<Change_product/>}/>
          <Route path="delete_news" element={<Delete_news/>}/>
          <Route path="create_news" element={<Create_news/>}/>
          <Route path="change_news" element={<Change_news/>}/>
          <Route path="feedback" element={<User_messages/>}/>
          
          <Route path="editor" element={<RichTextEditor/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;