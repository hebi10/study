import { useEffect, useRef } from "react";

/*
deps에 추가한 state가 변경될 때마다 callback이 실행된다. 단, 최초 마운트 시에는 실행되지 않는다.
useEffect와 동일하지만, 마운트 시에는 실행을 건너뛰고 싶을 때 유용하게 사용한다.
*/

function useUpdateEffect(callback, deps) {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) {
      callback();
    } else {
      ref.current = true;
    }
  }, [...deps]);
}

export default useUpdateEffect;
