import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useGetList } from "../../../data";
import { Sort } from "../../../shared/utils";
import { IUseList } from "./List.types";

import { useWorker } from "@koale/useworker";

export function useList(): IUseList {
  const [sortWorker, { status: sortWorkerStatus, kill }] = useWorker(
    Sort.bubbleSort
  );

  const { addToast } = useToasts();
  const { items } = useGetList();

  const [sortedItems, setSortedItems] = useState(items);

  const [isSorting, setSorting] = useState(false);

  function handleSortClick(): void {
    setSorting(true);
    const result = Sort.bubbleSort(items);
    setSortedItems(result);
    setSorting(false);
    addToast("Finalizado: Ordenação: default", { appearance: "success" });
  }

  console.log({ sortWorkerStatus });

  const handleWorkerSortClick = () => {
    setSorting(true);
    sortWorker(items).then((result) => {
      setSortedItems(result);
      setSorting(false);
      addToast("Finalizado: Ordenação: useWorker", {
        appearance: "success",
      });

      kill();
    });
  };

  return {
    isSorting,
    handleSortClick,
    items: sortedItems,
    handleWorkerSortClick,
  };
}
