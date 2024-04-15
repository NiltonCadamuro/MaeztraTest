import { Titillium_Web, Montserrat, Open_Sans, Lato } from "next/font/google";

export const titilliumWeb = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const montserrat = Montserrat({ subsets: ["latin"] });
export const openSans = Open_Sans({ subsets: ["latin"] });
export const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});
