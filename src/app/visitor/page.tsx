
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "./loading";

const Visitor = dynamic(() => import("./visitor"), {
  suspense: true,
});

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Visitor  />
    </Suspense>
  );
}