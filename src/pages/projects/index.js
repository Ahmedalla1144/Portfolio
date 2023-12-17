import Projects from "@/components/Projects/Projects";
import { Layout } from "@/layout/Layout";
import { Section } from "@/styles/GlobalComponents";

export default function Project() {
  return (
    <div>
      <Layout>
        {/* <Section> */}
          <Projects />
        {/* </Section> */}
      </Layout>
    </div>
  );
}
