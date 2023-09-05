import { useRef } from 'react';

import SomeComponent from './SomeComponent';

const HookUseImprerativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>useImprerativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};

export default HookUseImprerativeHandle;