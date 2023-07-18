import Link from "next/link";

const PostCard = ({ data, ...rest }) => {
  const coverImageUrl = "http://localhost:1337/uploads/pexels_oleksandr_canary_islands_1172064_6f1e462cd0.jpg";

  return (
    <div {...rest} className="bg-slate-880 rounded-lg w-100 h-100 p-2">
      <div className="w-100 h-100 bg-blue-500 rounded-md ">
        <img className="w-30 h-30  rounded-md" src={coverImageUrl} alt="Post Cover" />
      </div>
      <h2 className="text-2xl font-bold">{data.attributes.title}</h2>
      <p className="text-gray-400">{data.attributes.short_description}</p>
      <div className="mt-5">
        <Link href={`/posts/${data.attributes.slug}`}>
          <button>Post link</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;