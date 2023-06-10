import { PropsWithChildren } from "react";
import { mainFont } from "~/app/fonts";
import "~/styles/index.scss";

export const metadata = {
  title: "Next Template",
  description: "Next Template",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
