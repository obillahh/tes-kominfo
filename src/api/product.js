import axios from "axios";
import { ENDPOINT_API_GET_LIST_PRODUCT } from "../constants/api";

export const API_GET_PRODUCT_LIST = () => {
  return axios
    .get(ENDPOINT_API_GET_LIST_PRODUCT)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching product list:", error);
      throw error;
    });
};
