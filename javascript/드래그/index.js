const dragBox = document.querySelector(".drag-box");
const bgBar = document.querySelector(".bg-bar");
const dragBar = document.querySelector(".drag-bar");

const targetDragBox = dragBox.getBoundingClientRect();
const targetBgBar = bgBar.getBoundingClientRect();
const targetDragBar = dragBar.getBoundingClientRect();

const maxDrag = targetBgBar.width - targetDragBar.width;

let mouseEvent = (e) => {
  const width = targetBgBar.width;
  let mouseX = e.clientX - targetBgBar.left;

  let mouseClick = (mouseX / width) * 100;

  if (mouseClick < 100) {
    if (0 < mouseClick) {
      dragBar.style.left = `${mouseClick}%`;
    }
  }
};

bgBar.addEventListener("mousedown", (e) => {
  const width = targetBgBar.width;
  let mouseX = e.clientX - targetBgBar.left;

  let mouseClick = (mouseX / width) * 100;

  if (mouseClick < 100) {
    if (0 < mouseClick) {
      dragBar.style.left = `${mouseClick}%`;
    }
  }
  bgBar.addEventListener("mousemove", mouseEvent);
});
document.addEventListener("mouseup", () => {
  bgBar.removeEventListener("mousemove", mouseEvent);
  bgBar.removeEventListener("click", mouseEvent);
});
