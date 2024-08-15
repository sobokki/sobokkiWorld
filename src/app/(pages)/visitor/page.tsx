import dynamic from "next/dynamic";

const Visitor = dynamic(() => import("./visitor"), {
  suspense: true,
});

export default function Page() {
  return <Visitor />;
}
