import Head from "next/head";
import Link from "next/link";

const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default FirstPost;
