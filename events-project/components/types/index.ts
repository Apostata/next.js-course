import {
  MouseEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";

export type ReactChildren = boolean | ReactChild | ReactFragment | ReactPortal;
export type ReactChildrenNoFrag = boolean | ReactChild | ReactPortal;

export interface EventItemProps {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

export interface EventModel {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface ButtomProps {
  children: ReactChildren;
  link?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface LogisticsItemProps {
  children?: ReactChildren;
  icon?: React.ElementType;
}
