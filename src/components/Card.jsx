import Avatar from "@mui/material/Avatar";
import Dialog from "./Dialog";
function Card({ image }) {
  const profilePicture = image.user.profile_image.small;
  const imageProps = {
    src: image.urls.regular,
    alt: image.alt_description,
    width: "100%",
    height: "100%",
  };
  const imageHighRes = image.urls.full;
  const likes = image.likes;
  const { username, name } = image.user;
  const authorLink = image.user.links.html;
  return (
    <Dialog>
      <Dialog.Trigger className="mt-4">
        <div className="bg-white border border-gray-300">
          <img {...imageProps} />
          <div className="flex p-4 justify-between">
            <div className="flex gap-2 self-center">
              <Avatar
                alt="Remy Sharp"
                className="self-center"
                sx={{ width: 46, height: 46 }}
                src={profilePicture}
              />
              <div className="">
                <p className="text-xl">{name}</p>
                <p className="text-gray-600">
                  <a href={authorLink}>@{username}</a>
                </p>
              </div>
            </div>
            Likes: {likes}
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Content>
        <div className=" border-2 border-red-600">
          <img {...imageProps} src={imageHighRes} className="block w-full max-h-[90vh]" />
          <p>This is dialog content</p>
        </div>
      </Dialog.Content>
    </Dialog>
  );
}

export default Card;
