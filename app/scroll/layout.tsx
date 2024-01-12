import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll Animation",
};

export default function ScrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
