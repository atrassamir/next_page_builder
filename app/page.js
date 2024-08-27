"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {


  const [data,setData] = useState([])

  useEffect( () => {
  // const fetchRoutes = async () => {
  //   let config = {
  //     method: 'GET',
  //     url: 'http://172.26.5.40/v1/databases/66cc438c000cdf00dafb/collections/route/documents',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'X-Appwrite-Project': '66cc4210000161c00d85', 
  //         'X-Appwrite-Key': 'c6676e4b44295994573590a41291f59f54d656bacf05b0e7539aa519ba6902ed9650dcef0c9d76b41b6ab180bd6d4d9a9e9866905fa3b82b76b9b949ea660e37448ec73b493aea8a622875dbaefe6f3d4a4ff9c625944de4579cdd5300f679ef83d401710aa8340c85d403168a10445a4c8ffbd46960788d8da2a6663fd63e6b'
  //     }
  //     };

  //     await axios.request(config)
  //         .then((response) => {
  //             result = JSON.stringify(response.data)
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  // }

  //   fetchRoutes()


  }, [])



  return (
    <main>

    </main>
  );
}
