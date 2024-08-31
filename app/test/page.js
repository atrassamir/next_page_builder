"use client";

import { useEffect, useState } from "react";

const API_KEY =
  "c6676e4b44295994573590a41291f59f54d656bacf05b0e7539aa519ba6902ed9650dcef0c9d76b41b6ab180bd6d4d9a9e9866905fa3b82b76b9b949ea660e37448ec73b493aea8a622875dbaefe6f3d4a4ff9c625944de4579cdd5300f679ef83d401710aa8340c85d403168a10445a4c8ffbd46960788d8da2a6663fd63e6b";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch(
          "http://172.26.5.40/v1/databases/66cc438c000cdf00dafb/collections/route/documents",
          {
            headers: {
              "Content-Type": "application/json",
              "X-Appwrite-Project": "66cc4210000161c00d85",
              "X-Appwrite-Key": API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        const paths = data.documents.map((item) => ({
          params: { id: item.$id.toString() },
        }));
        console.log(paths);
        return paths;
      } catch (error) {
        console.error("Failed to fetch data: ", error);
        return [];
      }
    };
    fetchRoutes();
  }, []);

  return <main>hey</main>;
}
