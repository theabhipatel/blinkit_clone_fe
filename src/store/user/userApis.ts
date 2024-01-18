import { IAddress } from "../../interfaces";
import { axiosInstance } from "../../utils/axiosInstance";

export const getAddresses = async () => {
  const res = await axiosInstance.get(`user/addresses`);
  return res.data.addresses;
};

export const saveAddress = async (address: Omit<IAddress, "_id">) => {
  const res = await axiosInstance.post(`user/addresses`, { ...address });
  return res.data;
};

export const deleteAddress = async (id: string) => {
  const res = await axiosInstance.delete(`user/addresses/${id}`);
  return res.data;
};
