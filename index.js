const leftPane = document.querySelector(".left");
const middlePane = document.querySelector(".middle");
const rightPane = document.querySelector(".right");
const gutterOne = document.querySelector(".gutter-one");
const gutterTwo = document.querySelector(".gutter-two");

function resizer(e) {

  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  let prevX = e.x;
  const leftPanel = leftPane.getBoundingClientRect();


  function mousemove(e) {
    // const middlePanWidth = middlePane.clientWidth;
    // const rightPanWidth = rightPane.clientWidth;
    // const middleRightTotalWidth = middlePanWidth + rightPanWidth;
    // const middleRightUnusedSpace = middlePanWidth + RIGHT_PAN_MIN_WIDTH;
    // const spaceForLeftPane = middleRightTotalWidth - middleRightUnusedSpace;
    //
    // console.log("middlePanWidth", middlePanWidth);
    // console.log("rightPanWidth", rightPanWidth);
    //
    // if(middleRightTotalWidth > spaceForLeftPane) {
    //   console.log("HIT")
    //   let newX = prevX - e.x;
    //   leftPane.style.width = leftPanel.width - newX + "px";
    // }

    let newX = prevX - e.x;
    leftPane.style.width = leftPanel.width - newX + "px";
  }

  function mouseup() {
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);

  }
}

function resizerTwo(e) {

  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  let prevX = e.x;
  const middlePanel = middlePane.getBoundingClientRect();


  function mousemove(e) {
    let newX = prevX - e.x;
    middlePane.style.width = middlePanel.width - newX + "px";
  }

  function mouseup() {
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);

  }
}


gutterOne.addEventListener('mousedown', resizer);
gutterTwo.addEventListener('mousedown', resizerTwo);