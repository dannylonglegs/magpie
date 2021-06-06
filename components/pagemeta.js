import Head from "next/head";
import { useRouter } from "next/router";

const { PUBLIC_URL: publicUrl } = process.env;

const PageMeta = ({
  title = "Magpie English",
  description = "Our mission is to give you the attention that you need in order to discover the language within you.",
  //   image = "socialpreview-01.png",
}) => {
  const router = useRouter();
  const canonicalUrl = `https://novosgrowthpartners.com${router.pathname}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content={`${publicUrl}/previews/${image}`} /> */}
      {/* <meta property="og:image:width" content="1200" /> */}
      {/* <meta property="og:image:height" content="630" /> */}
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default PageMeta;
