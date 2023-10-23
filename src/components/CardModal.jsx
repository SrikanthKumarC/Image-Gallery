import Avatar from "@mui/material/Avatar";
import Popover from "./Popover";
import { X, Heart } from "lucide-react";
import { RiTriangleFill } from "react-icons/ri";
import { BsThreeDotsVertical, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { Dialog } from "@radix-ui/react-dialog";
function CardModal({
  imageProps,
  likes,
  user,
  authorLink,
  downloadLink,
  tags
}) {
  const profilePicture = user.profile_image.small;
  const instagram = user.instagram_username;
  const twitter = user.twitter_username;

  return (
    <div className="bg-white dark:bg-gray-950 dark:border dark:border-slate-700 dark:text-white rounded-lg relative">
      <img
        {...imageProps}
        className="block rounded-lg rounded-b-none max-h-[75vh] max-w-full "
      />
      <div className="flex p-4 justify-between self-center items-center">
        <div className="flex gap-2 self-center">
          <Avatar
            alt="Remy Sharp"
            className="self-center"
            sx={{ width: 46, height: 46 }}
            src={profilePicture}
          />
          <div className="ml-2">
            <p className="text-xl font-bold">{user.name}</p>
            <p className="text-gray-500">
              <a href={authorLink}>@{user.username}</a>
            </p>
          </div>
        </div>
        <div className="absolute flex justify-center items-center top-6 cursor-pointer left-6 hover:bg-opacity-90 bg-opacity-40 bg-white w-10 h-10 rounded-full">
          <div className="">
            <Popover>
              <Popover.Trigger>
                <Heart
                  className="inline-block text-center self-center items-center"
                  size={24}
                  strokeWidth={2}
                />
              </Popover.Trigger>
              <Popover.Content className="rounded relative text-white p-5 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] ">
                <div className="bg-white relative rounded-sm mt-6 ml-1 px-2 py-2">
                  <RiTriangleFill className="absolute text-white -top-3 right-10" />
                  <p>Likes: {likes}</p>
                </div>
              </Popover.Content>
            </Popover>
          </div>
        </div>
        {/* dialog menu */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 ">
            <a href={downloadLink} target="_blank">
              <button className="border-2 p-2 px-4 rounded-lg outline-yellow-500 font-bold bg-slate-800 dark:bg-white text-white dark:text-dark">
                Download
              </button>
            </a>
          </div>
          <Popover>
            <Popover.Anchor />
            <Popover.Trigger>
              <BsThreeDotsVertical
                className="self-center mr-2 cursor-pointer items-center"
                size={30}
              />
            </Popover.Trigger>
            <Popover.Content className="z-50 shadow-sm bg-white border ">
              <div className=" absolute bottom-9 -left-14 mt-2 p-4 bg-black text-white rounded-lg">
                <RiTriangleFill className="text-black left-20 -bottom-3 absolute rotate-180" />
                {instagram && (
                  <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                  >
                    <div className="flex items-center">
                      <BsInstagram />
                      <p className="ml-2">@{instagram}</p>
                    </div>
                  </a>
                )}
                {twitter && (
                  <a href={`https://twitter.com/${twitter}`} target="_blank">
                    <div className="flex mt-2 items-center">
                      <RiTwitterXFill />
                      <p className="ml-2">@{twitter}</p>
                    </div>
                  </a>
                )}
              </div>
            </Popover.Content>
          </Popover>
        </div>
      </div>
      <Dialog.Close asChild>
        <div className="absolute font-bold  -top-4 cursor-pointer rounded-full  p-2 -right-4 bg-white bg-opacity-80 text-black">
          <X size={20} strokeWidth={2} />
        </div>
      </Dialog.Close>
      <div className="flex items-center gap-2 px-4 py-4 bg-gray-300 rounded-b-lg">
        Tags:{" "}
        {tags.map((tag) => {
          return (
            <div
              key={tag}
              className="bg-white rounded-lg px-2 py-1 dark:bg-gray-950 dark:text-white border-gray-300"
            >
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardModal;
