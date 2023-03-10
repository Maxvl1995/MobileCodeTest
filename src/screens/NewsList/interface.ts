export interface IPropsScreenName {}

export interface IFlatListData {
  title: string;
  description: string;
  link: string;
  published: string;
  created: string;
  category: string[];
  enclosures: string[];
  media: Record<string, unknown>;
}

export interface IPagination {
  page: number;
  limit: number;
  total?: number;
  totalPage?: number;
}

export interface IItemProps {
  item: IFlatListData;
}
