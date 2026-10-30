const intro = document.getElementById('intro');
const gift = document.getElementById('gift');
const openGift = document.getElementById('openGift');
const video = document.getElementById('birthdayVideo');
const afterMessage = document.getElementById('afterMessage');

openGift.addEventListener('click', () => {
  intro.style.display = 'none';
  gift.classList.add('show');
  gift.setAttribute('aria-hidden', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => video.play().catch(() => {}), 450);
});

video.addEventListener('ended', () => {
  afterMessage.classList.add('show');
});

function createHeart() {
  if (document.hidden) return;
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > .35 ? '♥' : '♡';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${12 + Math.random() * 16}px`;
  heart.style.animationDuration = `${7 + Math.random() * 6}s`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 13500);
}
setInterval(createHeart, 1100);
