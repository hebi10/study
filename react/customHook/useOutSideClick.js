import { useEffect } from "react";

/* 
ref로 지정한 요소의 밖을 클릭했을 때의 이벤트 매서드를 정의할 때 사용한다.

생성된 메뉴 밖을 클릭하면 자동으로 메뉴창이 닫히는 기능을 구현할 때 유용하다. 
*/

function useOutSideClick(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;
