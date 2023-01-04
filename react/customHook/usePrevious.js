import { useEffect, useRef } from "react";

/* 
가끔 이전 state의 값이 필요할 때가 있다.

예를 들어 useEffect는 deps에 명시한 값이 하나라도 변경되면 로직을 실행한다.

useEffect(() => {
    ...
    ...
}, [ one, two, three, four ]);
이때 특정 state가 바뀔때만 useEffect를 실행하고 싶다면, usePrevious를 사용하여 이전 값과 현재 값을 비교하는 조건문을 추가해주면 된다.

const prevOne = usePrevious(one);

useEffect(() => {
    if(prevOne !== one){
        ...
         ...
    }
}, [ one, two, three, four ]);
*/

function usePrevious(stateOrProp) {
  const previous = useRef(null);

  useEffect(() => {
    previous.current = stateOrProp;
  }, [stateOrProp]);

  return previous.current;
}

export default usePrevious;
