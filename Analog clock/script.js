const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");

setInterval(() => {
  const date = new Date();
  const hrs = date.getHours() * 30;
  const min =
    date.getMinutes() * 6 +
    date.getSeconds() * 0.1 +
    date.getMilliseconds() * (0.1 / 1000);
  const sec = date.getSeconds() * 6 + date.getMilliseconds() * 0.006;

  hr.style.transform = `rotate(${hrs + min / 12}deg)`;
  mn.style.transform = `rotate(${min}deg)`;
  sc.style.transform = `rotate(${sec}deg)`;
}, 1000 / 60);
