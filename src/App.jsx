import * as React from "react";
import { BrowserRouter, useRoutes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "./client.js";
import styles from "./App.module.css";

import ShowCreators from "./pages/ShowCreators.jsx";
import AddCreator from "./pages/AddCreator.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

export default function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        console.log("Creators:", data);
        setCreators(data);
      }
    }
    fetchData();
  }, []);

  let router = useRoutes([
    {
      path: "/",
      element: <ShowCreators data={creators} />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
    {
      path: "/edit/:name",
      element: <EditCreator data={creators} />,
    },
    {
      path: "/view/:name",
      element: <ViewCreator data={creators} />,
    },
  ]);

  return (
    <div className={styles.page}>
      <header>
        <h1>Creatorverse</h1>
        <nav className={styles.nav}>
          <button>
            <a href={`/add`}>Add a creator</a>
          </button>
          <button>
            <a href={`/`}>Show all creators</a>
          </button>
        </nav>
      </header>
      <main>{router}</main>
    </div>
  );
}
