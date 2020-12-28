import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const PostPage = () => {
  const router = useRouter();
  const slug = Array.from(router.query.slug || "");

  return (
    <Layout
      title={`${
        slug ? slug.join(", ") : "Posts"
      } | Next.js + TypeScript Example`}
    >
      {slug ? (
        <ul>
          {slug.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>nothing.</p>
      )}
    </Layout>
  );
};

export default PostPage;
