export type DialogProps = {
  dialogTitle: string;
  children: JSX.Element | undefined;
  onDialogClose: () => void;
};
