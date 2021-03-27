import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../assets/styles/dashboard.scss";
import { fetchImagesAction } from "../../services/dashboard/actions";
import { connect } from "react-redux";
import Image from "components/Imageb";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isBottom) {
      dispatch(fetchImagesAction({ limit, offset }));
      setIsBottom(!isBottom);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBottom]);

  const onScrollEvent = useCallback((e) => {
    const el = e.target.documentElement;
    if (el && el.scrollHeight && el.scrollTop) {
      const bottom = el.scrollHeight - el.scrollTop === el.clientHeight;
      if (bottom) setIsBottom(true);
    }
  }, []);

  return <Image imageList={imageList} onScrollEvent={onScrollEvent} />;
};

const mapStateToProps = (state: any) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps)(Index);
