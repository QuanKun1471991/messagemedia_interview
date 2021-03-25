import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../assets/styles/dashboard.scss";
import { fetchImagesAction } from "../../services/dashboard/actions";
import { connect } from "react-redux";
import { Image } from "antd";

const Index = ({ dashboard }) => {
  const dispatch = useDispatch();
  const {
    images: { data: imageList, limit, offset },
  } = dashboard;
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", onScrollEvent, { passive: true });
    dispatch(fetchImagesAction({ limit, offset }));
    return () => {
      document.removeEventListener("scroll", onScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (isBottom) {
      dispatch(fetchImagesAction({ limit, offset }));
      setIsBottom(!isBottom);
    }
  }, [isBottom]);

  const onScrollEvent = (e) => {
    const el = e.target.documentElement;
    const bottom = el.scrollHeight - el.scrollTop === el.clientHeight;
    if (bottom) {
      setIsBottom(true);
    }
  };

  return (
    <div className={"image-swapper"} onScroll={(e) => onScrollEvent(e)}>
      {imageList.map((image) => (
        <>
          <div className={"item"}>
            <Image src={image.url} alt={image.title} />
            <div className="avartar-info">
              <img src={image.avatarUrl} alt={image.userName}></img> &nbsp;
              <span>{image.userName}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps)(Index);
