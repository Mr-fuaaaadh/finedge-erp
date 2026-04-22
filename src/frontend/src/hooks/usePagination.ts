import { useMemo, useState } from "react";

interface PaginationOptions {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

export function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: PaginationOptions) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const { startIndex, endIndex } = useMemo(
    () => ({
      startIndex: (safePage - 1) * itemsPerPage,
      endIndex: Math.min(safePage * itemsPerPage, totalItems),
    }),
    [safePage, itemsPerPage, totalItems],
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const nextPage = () => goToPage(safePage + 1);
  const prevPage = () => goToPage(safePage - 1);
  const canGoNext = safePage < totalPages;
  const canGoPrev = safePage > 1;

  return {
    currentPage: safePage,
    totalPages,
    startIndex,
    endIndex,
    goToPage,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    itemsPerPage,
  };
}
