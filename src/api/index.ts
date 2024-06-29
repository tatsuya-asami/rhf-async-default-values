import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export const useFetchUser = () => {
  return useSWR(API_PATH, fetcher, { suspense: false });
};

export const useFetchUserWithSuspense = () => {
  return useSWR(API_PATH, fetcher, { suspense: true });
};

export const useFetchUserByMutation = () => {
  return useSWRMutation(API_PATH, fetcher);
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const API_PATH = "https://example.com/user";
