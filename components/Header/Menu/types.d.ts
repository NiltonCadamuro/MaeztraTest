import { ImageProps } from "next/image";

export interface MenuProps {
  items: MenuItem[];
}

export interface MenuItem {
  title: string;
  url: string;
  icon?: ImageProps["src"];
  color?: string;
  bold?: boolean;
}
