import React from "react";
import Twitter from "../../public/assets/social_twitter.png";
import Google from "../../public/assets/social_google.png";
import Instagram from "../../public/assets/social_instagram.png";
import Pinterest from "../../public/assets/social_pinterest.png";
import Facebook from "../../public/assets/social_facebook.png";
import Discord from "../../public/assets/social_discord.png";
import Image from "next/image";

type Props = {
    isDark? : boolean;
};

const SocialLinks = ({isDark = false}: Props) => {
  return <div className="flex justify-between items-center gap-7">
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
            className={`${isDark? "brightness-0": ""} hover:opacity-50`}
            alt="twitter"
            src={Twitter}
            width={20}
            height={20}
        />
    </a>
  </div>;
};

export default SocialLinks;
