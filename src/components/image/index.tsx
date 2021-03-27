import React from "react";
import ImageInfor from "./ImageInfor";
import UserInfo from "./UserInfor";
import { imagesDataProps } from "../../services/dashboard/types";

interface imageProps {
  imageList: imagesDataProps[];
  onScrollEvent: (e) => void;
}

const Index = ({ imageList, onScrollEvent }: imageProps) => {
  return (
    <div className={"image-swapper"} onScroll={onScrollEvent}>
      {imageList.map((image) => (
        <>
          <div className={"item"} key={image.id}>
            <ImageInfor
              className={"details"}
              url={image.url}
              title={image.title}
            />
            <UserInfo
              avatarUrl={image.avatarUrl}
              userName={image.userName}
              profileUrl={image.profileUrl}
              className="avartar-info"
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default React.memo(Index);
