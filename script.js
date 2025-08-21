function typeWriter(elementId, text, speed) {
  const element = document.getElementById(elementId);
  if (!element) return; // nếu không tìm thấy thì bỏ qua

  element.textContent = ""; // reset ban đầu
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML = text
        .substring(0, i + 1)
        .replace("Giang.Kma", "<span>Giang.Kma</span>")
        .replace("Me", "<span>Me</span>");
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

window.onload = function () {
  // gọi thử cho cả 2, nhưng chỉ cái nào tồn tại trong trang hiện tại thì chạy
  typeWriter("typing1", "Hi, It's Giang.Kma", 120);
  typeWriter("typing2", "About Me", 120);
};

window.onload = typeEffect;
// Animation với GSAP
gsap.from(".btn", {
  x: window.innerWidth, // bắt đầu từ ngoài bên phải
  duration: 1,
  ease: "back.out(1.7)", // có hiệu ứng nảy nhẹ
  stagger: 0.2, // lần lượt từng nút
});
// const text1 = "About Me";
// const typingElement = document.getElementById("typing1");
// typingElement.textContent = ""; // reset ban đầu

// let j = 0;

// function typeEffect() {
//   if (j < text1.length) {
//     typingElement.innerHTML = text1
//       .substring(0, j + 1)
//       .replace("Me", "<span>Me</span>");
//     j++;
//     setTimeout(typeEffect, 120); // tốc độ gõ (ms)
//   }
// }
// Hiện tại chưa cần JS, nhưng bạn có thể thêm hiệu ứng
// Ví dụ: thay đổi tốc độ xoay khi hover vào bánh răng

document.querySelectorAll(".gear").forEach((gear) => {
  gear.addEventListener("mouseenter", () => {
    gear.style.animationDuration = "2s"; // xoay nhanh hơn khi hover
  });
  gear.addEventListener("mouseleave", () => {
    gear.style.animationDuration = "6s"; // trở về bình thường
  });
});

// window.onload = typeEffect;
