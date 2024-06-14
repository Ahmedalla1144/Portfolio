"use client";
import Projects from "@/components/Projects/Projects";
import { Layout } from "@/layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function getAllProjects() {
      try {
        const res = await axios.get("http://localhost:8000/api/projects");
        if (res.data) {
          setProjects(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getAllProjects();
  }, []);
  return (
    <div>
      <Layout>
        <Projects projects={projects} />
      </Layout>
    </div>
  );
}
