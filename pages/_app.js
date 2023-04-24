import "../styles/globals.scss";
import Layout from "../components/layout/layout";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
