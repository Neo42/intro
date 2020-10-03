// [].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) })
let indicator = document.querySelector('.indicator');

// 顶部导航和侧导航交互标记
document.querySelectorAll('.nav-link.link').forEach((li, ind) =>
 li.addEventListener('mouseover', () => indicator.className = `hover-${ind + 1}`));
document.querySelectorAll('.side-nav-link a').forEach((a, ind) =>
 a.addEventListener('click', () => indicator.className = `hover-${ind + 1}`))

 // 窗口滚动标记
document.querySelectorAll('.screen').forEach(
 (screen, index) => {
  window.addEventListener(
   'scroll', function () {
    if (index === 0) { return }
    if (window.scrollY >= 640 * (index + 1) - window.innerHeight) {
     screen.classList.add('animated');
     console.log(screen.className);
     // 触发后立即移除监听
     window.removeEventListener('scroll', arguments.callee)
    }
   }
  )
 }
)

// 回到顶部
document.querySelector('.continue button').addEventListener('click', () => {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
})