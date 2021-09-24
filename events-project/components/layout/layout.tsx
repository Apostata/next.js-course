import { ReactChildrenNoFrag } from "../types";
import Header from "./main-header";
export default function Layout({
  children,
}: {
  children: ReactChildrenNoFrag;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
