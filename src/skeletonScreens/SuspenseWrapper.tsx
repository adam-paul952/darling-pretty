import React, { lazy, Suspense } from "react";

import Loading from "../components/Loading";

interface ISuspenseWrapperProps {
  path: string;
}

const SuspenseWrapper = (props: ISuspenseWrapperProps) => {
  const LazyComponent = lazy(() => import(`../${props.path}`));

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default SuspenseWrapper;
