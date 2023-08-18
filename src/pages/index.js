import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import Style from "../styles/Home.module.scss";
import BlogCard from "../Components/BlogPost";
import SubscribeForm from "../Components/Subscribe.js";
import { GraphQLClient, gql } from "graphql-request";
import { SEO } from "../Components/SEO/index";

const url = `${process.env.ENDPOINT}`;
const graphConnect = new GraphQLClient(url);

const query = gql`
  query GetPosts($limit: Int!, $offset: Int!) {
    posts(first: $limit, skip: $offset) {
      id
      title
      datePublished
      slug
      description {
        html
      }
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getServerSideProps({ query: { page = 1 } }) {
  const limit = 6; // Number of posts per page
  const offset = (page - 1) * limit;

  // Fetch data using the GraphQL query and variables
  const { posts } = await graphConnect.request(query, { limit, offset });

  return {
    props: {
      posts,
      page: Number(page), // Convert page to a number
    },
  };
}

function Homepage({ posts, page }) {
  return (
    <>
      <SEO title="Flare" description="unveling trending Products" />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VFSB9R5BHR" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VFSB9R5BHR');
        `}
      </Script>
      <main className={Style.container}>
        <div className={Style.header}>
          <h1>LATEST</h1>
        </div>
        <div className={Style.postcontainer}>
          {posts.map((post) => {
            return <BlogCard post={post} key={post.id} />;
          })}
        </div>
        <div className={Style.pagination}>
          {page > 1 && <Link href={`/?page=${page - 1}`}>Previous </Link>}
          <Link href={`/?page=${page + 1}`}>Next</Link>
        </div>

        <div className={Style.taglineBox}>
          <h1>ARCHIVES</h1>
          <div className={Style.tag}>
            <div className={Style.tagTitle}>
              <div></div>
              <strong>Home Essential</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Quick Cleanups</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Kitchen Needs</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Relief</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Instant Memories</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong> Accessories</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Technology</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Hygiene Tools</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Cooking</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Fashion</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Shopping</strong>
            </div>
            <div className={Style.tagTitle}>
              {" "}
              <div></div>
              <strong>Jewelleries</strong>
            </div>
          </div>
        </div>
      </main>
      <footer className={Style.footer}>
        <div className={Style.footerInnerContainer}>
          <p>
            Flare the very best in providing top-notch trending products.
            Through the online content we publish, we share our opinions and
            thoughts on the various products and its usefulness to you and me.
          </p>
          <p>Subscribe to our newsletters. We’ll keep you in the loop.</p>
          <SubscribeForm />
          <p className={Style.copyright}>Copyright &copy; flare 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
