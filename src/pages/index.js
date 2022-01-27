import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="BUMP Routelist"
      />

      <section className="text-center">

        <h2 className="inline-block p-3 mb-4 text-2xl text-gray-100 font-bold bg-gray-700">
          Hey there! Welcome to BUMP&apos;s routelist!
        </h2>

        <p className="leading-loose">
          You can find our main website{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://bumpbouldering.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here 
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;