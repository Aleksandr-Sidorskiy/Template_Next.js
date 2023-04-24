import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.scss";

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}
export default function Home({ allPostData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <bt />
              {id}
              <bt />
              {date}
            </li>
          ))}
        </ul>
        <Link href="./posts/first-post">Next post</Link>
      </section>
    </>
  );
}
