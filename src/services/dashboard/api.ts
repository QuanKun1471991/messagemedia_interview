import { stringify } from "qs";
import axios from "core/contants/axios";
import { FetchImagesParams } from "./types";
import { Image } from "../../core/models/image";

class DashboardServices {
  public fetchImages = async (params: FetchImagesParams) => {
    const response = await axios.get(`v1/gifs/trending?${stringify(params)}`);
    const data = response.data.data.map((record) => new Image(record));
    const pagination = response.data && response.data.pagination;
    const result = {
      data,
      pagination: {
        total: pagination.total_count,
        limit: pagination.count,
        offset: pagination.offset,
      },
    };
    return result;
  };
}

export default new DashboardServices();
