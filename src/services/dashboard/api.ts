import { produce } from "immer";
import { stringify } from "qs";
import axios from "services/base/axios";
import { FetchImagesParams } from "./types";

class DashboardServices {
  public fetchImages = (params: FetchImagesParams) =>
    axios.get(`v1/gifs/trending?${stringify(params)}`);
}

export default new DashboardServices();
