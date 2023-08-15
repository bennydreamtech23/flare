import Style from "../styles/BlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
const BlogPost = ({ post }) => {
  return (
    <div className={Style.blogContainer} key={post.id}>
      <div className={Style.imgContainer}>
        <Image
          src={post.coverPhoto.url}
          alt="featured text"
          fill
          className={Style.img}
        />
      </div>
      <div className={Style.details}>
        <Link href={post.slug}>
          <h2>{post.title}</h2>
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: post.description.html }}
          className={Style.content}
        />
        <Link href={post.slug}>
          <button className={Style.readButton}>Read More</button>{" "}
        </Link>
        <div className={Style.authorBox}>
          <div className={Style.avatarImg}>
            <Image
              src={post.author.avatar.url}
              alt="featured text"
              fill
              className={Style.img}
            />
          </div>
          <div className={Style.authorDetails}>
            <p>{post.author.name}</p>
            <span>{post.datePublished}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
