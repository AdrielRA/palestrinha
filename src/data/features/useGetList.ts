import { IUseGetList } from "../features/useGetList.types";

export function useGetList(): IUseGetList<number> {
  const items = [...Array(70000)].map(() =>
    Math.floor(Math.random() * 1000000)
  );

  return { items };
}
