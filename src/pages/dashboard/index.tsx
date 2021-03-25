import { LIMIT_RECORDS } from "core/models/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../../assets/styles/dashboard.scss";
import { fetchImagesAction } from "../../services/dashboard/actions";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesAction({ limit: LIMIT_RECORDS }));
  }, []);
  return <div>DASHBOARD</div>;
};

export default Index;
