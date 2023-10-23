import Avatar from "@mui/material/Avatar";

function Card({ imageProps, profilePicture, likes, user, authorLink }) {
  const { username, name } = user;

  return (
    <div className="bg-white border dark:border-none rounded-lg dark:bg-gray-950 dark:text-white border-gray-300">
      <img {...imageProps} className="rounded-t-lg" />
      <div className="flex p-4 justify-between">
        <div className="flex gap-2 self-center">
          <Avatar
            alt="Remy Sharp"
            className="self-center"
            sx={{ width: 36, height: 36 }}
            src={profilePicture}
          />
          <div className="flex flex-col items-start">
            <p className="text-xl text-left md:text-lg">{name}</p>
            <p className="text-gray-600 md:text-sm">
              <a href={authorLink}>@{username}</a>
            </p>
          </div>
        </div>
        Likes: {likes}
      </div>
    </div>
  );
}

export default Card;
