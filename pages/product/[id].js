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
    fallback: 'blocking'
  }
}

export default function Page({ id }) {
  return <>
    <Head>
      <title>Product Id: {id}</title>
      <meta name="description" content={`${id} - Here is a precise description of my awesome ecommerce.`} />
    </Head>
    <div>
      Product ID, {id}
    </div>
  </>
}