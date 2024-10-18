export type TItemProps = {
  label: string;
};

export type TOptionProps = {
  label: string;
  items: string[];
};

export type TGroupProps = {
  title: string;
  options: TOptionProps[];
};
