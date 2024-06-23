import { forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => (
    <div ref={ref}>
      Hello from Child Component!
    </div>
  ));

  export default ChildComponent;