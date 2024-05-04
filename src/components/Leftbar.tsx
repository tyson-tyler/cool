"use client";
import { CurrentUserContext } from "@/context/CurrentUserContext";
import { Channel } from "@prisma/client";
import { Brush, CirclePlus, Eye, Home } from "lucide-react";
import Link from "next/link";

import React, { useContext } from "react";

import { HiMiniUserGroup } from "react-icons/hi2";
import { PiArrowElbowLeftUpLight } from "react-icons/pi";

import Avatar, { AvatarSize } from "./Avatar";
import MenuItems from "./MenuItems";
import { TiMediaFastForwardOutline } from "react-icons/ti";
import { MdAccountCircle, MdWifiChannel } from "react-icons/md";
import { CreateChannelModalContext } from "@/context/CreateChannelModelContext";
import { useRouter } from "next/navigation";
import { CurrentChannelContext } from "@/context/CreateChannelContext";
import SignInButton from "./UserOptions/SignInButton";

const items = [
  {
    logo: <Home />,
    text: "Home",
    url: "/",
  },
  {
    logo: <Eye />,
    text: "Popular",
    url: "/creator",
  },

  {
    logo: <HiMiniUserGroup />,
    text: "Communties",
    url: "https://inter-taupe.vercel.app",
  },
  {
    logo: <TiMediaFastForwardOutline />,
    text: "About",
    url: "/about",
  },
];
interface SideBarProps {
  subscribedChannels: Channel[];
}

const LeftBar: React.FC<SideBarProps> = ({ subscribedChannels }) => {
  const currentUser = useContext(CurrentUserContext);
  const createChannelModal = useContext(CreateChannelModalContext);
  const router = useRouter();

  const currentChannel = useContext(CurrentChannelContext);

  return (
    <div className="relative sm:flex sm:flex-col sm:items-center lg:flex lg:items-start mr-[28px] max-md:hidden mt-10 ml-[28px]">
      {currentUser ? (
        <div>
          {items.map((item, index) => (
            <Link
              href={item.url}
              className="flex items-center gap-x-3 text-2xl opacity-80 hover:scale-105 transform transition gap-6"
              key={index}
              prefetch={true}
            >
              <div className="flex items-center gap-x-3 text-2xl my-5 opacity-80 hover:opacity-100 gap-6">
                {item.logo}
              </div>
              <span className="leading-none text-base flex gap-5 items-center p-4 rounded-md justify-start md:hidden lg:flex font-semibold transition-all">
                {" "}
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          <span className="lg:text-md md:hidden font-bold usespan mb-2">
            Please Sign In
          </span>
          <SignInButton />
        </div>
      )}

      {/* {currentChannel ? <div>
        
      </div> : null} */}
      <div
        onClick={() => {
          if (!currentChannel) {
            createChannelModal?.onOpen();
          } else {
            router.push(`/channel/${currentChannel.id}`);
          }
        }}
        className="flex flex-row  cursor-pointer items-center gap-x-3 text-2xl opacity-80 hover:scale-105 transform transition gap-6"
      >
        <div className="flex items-center gap-x-3 text-2xl my-5 opacity-80 hover:opacity-100 gap-6">
          <MdAccountCircle className="w-7 h-7" />
        </div>
        <div className="leading-none text-base flex gap-5 items-center p-4 rounded-md justify-start md:hidden lg:flex font-semibold transition-all">
          Channel
        </div>
      </div>
      <div
        onClick={() => {
          if (!currentChannel) {
            createChannelModal?.onOpen();
          } else {
            router.push(`/studio`);
          }
        }}
        className="flex flex-row  cursor-pointer items-center gap-x-3 text-2xl opacity-80 hover:scale-105 transform transition gap-6"
      >
        <div className="flex items-center gap-x-3 text-2xl my-5 opacity-80 hover:opacity-100 gap-6">
          <Brush className="w-7 h-7" />
        </div>
        <div className="leading-none text-base flex gap-5 items-center p-4 rounded-md justify-start md:hidden lg:flex font-semibold transition-all">
          Studio
        </div>
      </div>
      <div
        onClick={() => {
          if (!currentChannel) createChannelModal?.onOpen();
          else router.push("/studio/upload");
        }}
        className="flex flex-row  cursor-pointer items-center gap-x-3 text-2xl opacity-80 hover:scale-105 transform transition gap-6"
      >
        <div className="flex items-center gap-x-3 text-2xl my-5 opacity-80 hover:opacity-100 gap-6">
          <CirclePlus className="w-7 h-7" />
        </div>
        <div className="leading-none text-base flex gap-5 items-center p-4 rounded-md justify-start md:hidden lg:flex font-semibold transition-all">
          Upload
        </div>
      </div>
      {currentUser ? (
        <div className="pt-3">
          {subscribedChannels.map((subscribedChannels) => {
            return (
              <MenuItems
                channel={subscribedChannels}
                key={subscribedChannels.id}
                label={subscribedChannels.name}
                logo={
                  <Avatar
                    imageSrc={subscribedChannels.imageSrc}
                    size={AvatarSize.extra}
                  />
                }
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default LeftBar;
