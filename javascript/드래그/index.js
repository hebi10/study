const dragBox = document.querySelector(".drag-box");
const bgBar = document.querySelector(".bg-bar");
const dragBar = document.querySelector(".drag-bar");

const targetDragBox = dragBox.getBoundingClientRect();
const targetBgBar = bgBar.getBoundingClientRect();
const targetDragBar = dragBar.getBoundingClientRect();

const maxDrag = targetBgBar.width - targetDragBar.width;

bgBar.addEventListener("click", (e) => {
  // %로 마우스 클릭 위치 계산
  const width = targetBgBar.width;
  const mouseX = e.clientX - targetBgBar.left;
  const mouseClick = (mouseX / width) * 100;
  console.log();

  if (0 < mouseClick < 100) {
    dragBar.style.left = `${mouseClick}%`;
  } else {
    return;
  }
});
