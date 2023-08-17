import Style from "../styles/BlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
};
const BlogPost = ({ post }) => {
  const truncatedDescription = truncateDescription(post.description.html, 55);
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
          <div className={Style.authorBox}>
          <div className={Style.avatarImg}>
            <Image
              src={post.author.avatar.url}
              alt="featured text"
              fill
              className={Style.img}
            />
          </div>

          <p>{post.author.name}</p>
          <Moment format="Do MMMM YYYY" className={Style.date}>
            {post.datePublished}
          </Moment>
        </div>
      
<div
        className={Style.content}
        dangerouslySetInnerHTML={{ __html: truncatedDescription }}
      />
        <Link href={post.slug}>
          <button className={Style.readButton}>
            <span>Read More</span>          <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default BlogPost;
