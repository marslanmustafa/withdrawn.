// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Login, SearchPage, PropertiesPage, Wishlist } from './pages/index';
import { BottomNavbar } from "./components";
function App() {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/search"
            element={
              <Layout>
                <SearchPage />
              </Layout>
            }
          />
          <Route
            path="/propertyList"
            element={
              <Layout>
                <PropertiesPage />
              </Layout>
            }
          />
                    <Route
            path="/wishlist"
            element={
              <Layout>
                <Wishlist />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BottomNavbar />
    </>
  );
}

export default App;
