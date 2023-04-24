import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Heading from "../../components/heading/heading";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Heading text="First Post" />
      <Image src="/images/profile.jpg" alt="img" height={144} width={144} />
      <h2>
        <Link href="/">
          <Heading tag="h2" text="Back to home" />
        </Link>
      </h2>
    </>
  );
}
