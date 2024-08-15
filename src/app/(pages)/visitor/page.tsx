import dynamic from "next/dynamic";

const Visitor = dynamic(() => import("../../components/visitorPage/visitor"), {
  suspense: true,
});

export default function Page() {
  return <Visitor />;
}
