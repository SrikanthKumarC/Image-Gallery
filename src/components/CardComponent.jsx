import React, { useEffect } from "react";

import { X, Heart } from "lucide-react";
import { RiTriangleFill } from "react-icons/ri";
import { BsThreeDotsVertical, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

import * as Dialog from "@radix-ui/react-dialog";
import Avatar from "@mui/material/Avatar";
import Popover from "./Popover";
import Card from "./Card";

const CardComponent = ({ image }) => {
  const profilePicture = image.user.profile_image.small;
  const instagram = image.user.instagram_username;
  const twitter = image.user.twitter_username;
  const imageProps = {
    src: image.urls.regular,
    alt: image.alt_description,
    width: "100%",
    height: "100%",
  };
  const downloadLink = image.links.download;
  const likes = image.likes;
  const user = image.user;
  const authorLink = image.user.links.html;
  const containerRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const tags = image.tags.map((tag) => tag.title);

  useEffect(() => {
    const closeDialog = (e) => {
      if (e.target === containerRef.current) {
        setOpen(false);
      }
    };
    document.addEventListener("click", closeDialog);
    return () => {
      document.removeEventListener("click", closeDialog);
    };
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="mt-6">
        <Card
          imageProps={imageProps}
          user={user}
          profilePicture={profilePicture}
          likes={likes}
          authorLink={authorLink}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-70	 fixed inset-0" />
        <Dialog.Content
          ref={containerRef}
          className="fixed flex justify-center items-center w-[80vw] h-[80vh] max-w-[80vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="bg-white dark:bg-gray-950 dark:border dark:border-slate-700 dark:text-white rounded-lg relative">
            <img
              {...imageProps}
              className="block rounded-lg rounded-b-none max-h-[72vh] max-w-full "
            />
            <div className="flex p-4 gap-4 justify-between self-center items-center">
              <div className="flex gap-2 self-center">
                <Avatar
                  alt="Remy Sharp"
                  className="self-center"
                  sx={{ width: 46, height: 46 }}
                  src={profilePicture}
                />
                <div className="ml-2">
                  <p className="font-bold">{user.name}</p>
                  <p className="text-gray-500">
                    <a href={authorLink}>@{user.username}</a>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <Popover>
                    <Popover.Trigger className="absolute flex justify-center items-center top-6 cursor-pointer left-6 hover:bg-opacity-90 bg-opacity-40 bg-white w-10 h-10 rounded-full">
                      <Heart
                        className="inline-block dark:text-black text-center self-center items-center"
                        size={24}
                        strokeWidth={2}
                      />
                    </Popover.Trigger>
                    <Popover.Content className="rounded relative text-white p-5 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] ">
                      <div className="bg-white relative rounded-sm mt-3 ml-1 px-2 py-2">
                        <RiTriangleFill className="absolute  text-white  -top-3 right-10" />
                        <p>Likes: {likes}</p>
                      </div>
                    </Popover.Content>
                  </Popover>
                </div>
              </div>
              {/* dialog menu */}
              <div className="flex items-center">
                <div className="flex items-end">
                  <a
                    href={downloadLink}
                    target="_blank"
                    download={downloadLink}
                  >
                    <button className="border-2 p-2 px-2  rounded-lg outline-yellow-500 font-bold bg-slate-800 dark:bg-black text-white dark:text-dark">
                      Download
                    </button>
                  </a>
                </div>
                <Popover>
                  <Popover.Anchor></Popover.Anchor>
                  <Popover.Trigger>
                    <BsThreeDotsVertical
                      className="self-center w-fit cursor-pointer items-center"
                      size={30}
                    />
                  </Popover.Trigger>

                  <Popover.Content className="shadow-sm border ">
                    <div className=" bottom-9 relative top-4 left-2 border-2 mt-2 p-4 bg-black text-white rounded-lg">
                      <RiTriangleFill className="text-black -top-3 left-1/2  absolute" />
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
                        <a
                          href={`https://twitter.com/${twitter}`}
                          target="_blank"
                        >
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
            <div className="flex items-center dark:bg-slate-700 gap-2 px-4 py-4 bg-gray-300 rounded-b-lg">
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default CardComponent;
