import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import s from "../css/main.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container">
      <h1 className="hero__title" style={{ marginTop: "30px" }}>
        {siteConfig.title}
      </h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
      <div>
        <div className={s.container}>
          <Link to="/docs/intro" className={s.box}>
            <p>Go To website Documentation</p>
          </Link>
          <Link to="/docs/fields" className={s.box}>
            <p>Go To API Documentation</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
