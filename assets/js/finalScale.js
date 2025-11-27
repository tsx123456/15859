function scaleUI() {
  const ui = document.getElementById("ui-root");
  if (!ui) return;

  const designWidth = 1366;  // 设计稿宽度
  const designHeight = 768; // 设计稿高度

  // 屏幕尺寸
  let sw = window.innerWidth;
  let sh = window.innerHeight;

  // 横屏竖屏都要兼容等比缩放
  let scale = 1;
  if (sw > sh  || !isMobile()) {
    scale = Math.min(sw / designWidth * 2.5, sh / designHeight  * 2.5);
  } else {
    scale = Math.min(sw / designHeight  * 2.5, sh / designWidth  * 2.5);
  }

  // 缩放 + 居中
  ui.style.transform = `translate(-50%, -50%) scale(${scale})`;

}

// 页面一加载马上执行一次
window.addEventListener("DOMContentLoaded", scaleUI);

window.addEventListener("resize", scaleUI);
scaleUI();

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
