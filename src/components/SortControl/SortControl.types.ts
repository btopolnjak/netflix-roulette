export type SortControlProps = {
  onSortChange: (condition: string) => void;
  currentSort: { label: string; query: string };
};
