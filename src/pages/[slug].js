import Style from "../styles/SinglePost.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BsTiktok, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { GraphQLClient, gql } from "graphql-request";

const url = `${process.env.ENDPOINT}`;

// instantiating a graphql client...
const graphConnect = new GraphQLClient(url);

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;
export async function getStaticPaths() {
  const { posts } = await graphConnect.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  // making request to hygraph for posts
  const data = await graphConnect.request(query, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={Style.container}>
      <div className={Style.imgContainer}>
        <div
          className={Style.coverImage}
          style={{ backgroundImage: `url(${post.coverPhoto.url})` }}
        ></div>
      </div>
      <div className={Style.contentContainer}>
        <div className={Style.contentHeader}>
          <h2 className={Style.title}>{post.title}</h2>
          <div className={Style.authorInfo}>
            <img
              className={Style.avatar}
              src={post.author.avatar.url}
              alt="Author Avatar"
            />
            <div className={Style.authorDetails}>
              <h6 className={Style.authorName}>{post.author.name}</h6>
              <p className={Style.publishedDate}>{post.datePublished}</p>
            </div>
          </div>
        </div>
        <div
          className={Style.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
        <footer className={Style.footer}>
          <h3>share this article</h3>
          <div className={Style.iconGroup}>
            <a>
              <BsInstagram />
            </a>
            <a>
              <BsTiktok />
            </a>
            <a>
              <BsTwitter />
            </a>
            <a>
              <BsYoutube />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
