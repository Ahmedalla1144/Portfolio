"use client";
import Projects from "@/components/Projects/Projects";
import { Layout } from "@/layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  return (
    <div>
      <Layout>
        <Projects />
      </Layout>
    </div>
  );
}
