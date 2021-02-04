import { v4 } from "uuid";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      id: v4()
    },
    revalidate: 100 // 100ms
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export default function Page({ id }) {
  return <>
    <Head>
      <title>{id}</title>
      <meta name="description" content={`${id} - Here is a precise description of my awesome webpage.`} />
    </Head>
    <div>
      Product ID, {id}
    </div>
  </>
}