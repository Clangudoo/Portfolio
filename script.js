// Animated Intro Text
const introTexts = [
  "Hi, I'm Clarence Caluag",
  "A Passionate Computer Science Student",
];
let introIndex = 0, charIndex = 0, isDeleting = false;
const introEl = document.getElementById('intro-text');

function typeIntro() {
  const current = introTexts[introIndex];
  if (isDeleting) {
    charIndex--;
    introEl.textContent = current.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      introIndex = (introIndex + 1) % introTexts.length;
      setTimeout(typeIntro, 600);
    } else {
      setTimeout(typeIntro, 40);
    }
  } else {
    charIndex++;
    introEl.textContent = current.substring(0, charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeIntro, 1200);
    } else {
      setTimeout(typeIntro, 80);
    }
  }
}
typeIntro();

// Project data for carousel
const projects = [
  {
    title: "SipAI Game",
    desc: "Digital Filipino street game Sipa with AI opponent. Made with Godot, GDScript, and Q-learning (2025).",
    type: "video",
    src: "vid/Projects/SipAIGame_vid.mp4",
    github: "https://github.com/jehya/SipAI"
  },
  {
    title: "Furpaws App",
    desc: "Mobile app to post lost, found, or adoptable pets. Built with Firebase, Android Studio, and Java (2025).",
    type: "video",
    src: "vid/Projects/Furpaws_vid.mp4"
  },
  {
    title: "LRT-RS",
    desc: "Web app to track LRT trains, stations, and destinations. Built with HTML, CSS, and JavaScript (2025).",
    type: "video",
    src: "vid/Projects/LRTRS_vid.mp4",
    github: "https://github.com/avetillo/LRTRS"
  },
  {
    title: "Planado PH",
    desc: "Reproductive health management website with tracking tools. Built with PHP, CSS, HTML, JS, and MySQL (2025).",
    type: "video",
    src: "vid/Projects/PlanadoPH_vid.mp4",
    github: "https://github.com/yana16-afk/Planado-PH"
  },
  {
    title: "A* vs D* Algorithm",
    desc: "Simulation comparing A* and D*-Lite for dynamic obstacles in a grid terrain generated with Perlin noise. The dynamic obstacle uses LCG. Made with Python.",
    type: "video",
    src: "vid/Projects/pathfinding_vid.mp4",
    github: "https://github.com/jehya/EA-SACTDE-ATBPPA-Tool"
  },
  {
    title: "ND Calculator",
    desc: "Nutrition and dietetics calculator website. Built with HTML, CSS, and JS (2024).",
    type: "video",
    src: "vid/Projects/NDCalculator_vid.mp4",
    github: "https://clangudoo.github.io/NDCalculator/"
  }
];

const carouselTrack = document.getElementById('carouselTrack');
let focusIndex = 0;

function renderCarousel() {
  carouselTrack.innerHTML = '';
  const total = projects.length;
  // Infinite loop indices
  const leftIdx = (focusIndex - 1 + total) % total;
  const centerIdx = focusIndex;
  const rightIdx = (focusIndex + 1) % total;
  const visible = [leftIdx, centerIdx, rightIdx];
  visible.forEach((idx, i) => {
    const project = projects[idx];
    let cardClass = 'project-card';
    if (i === 1) cardClass += ' focus';
    else cardClass += ' blur';
    const card = document.createElement('div');
    card.className = cardClass;
    card.onclick = () => {
      if (i === 0) slideTo(-1);
      if (i === 2) slideTo(1);
    };
    // Media
    const media = document.createElement('div');
    media.className = 'project-media';
    if (project.type === 'image') {
      const img = document.createElement('img');
      img.src = project.src;
      img.alt = project.title;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      media.appendChild(img);
    } else if (project.type === 'video') {
      const video = document.createElement('video');
      video.src = project.src;
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'contain';
      video.loop = true;
      video.muted = true;
      if (i === 1) video.play();
      else { video.pause(); video.currentTime = 0; }
      media.appendChild(video);
    }
    card.appendChild(media);
    // Title
    const title = document.createElement('div');
    title.className = 'project-title';
    title.textContent = project.title;
    card.appendChild(title);
    // Description
    const desc = document.createElement('div');
    desc.className = 'project-desc';
    desc.textContent = project.desc;
    card.appendChild(desc);
    // Github button with logo and hover text
    if (project.github) {
      const githubBtn = document.createElement('a');
      githubBtn.className = 'github-btn';
      githubBtn.href = project.github;
      githubBtn.target = '_blank';
      githubBtn.rel = 'noopener';
      // Logo
      const githubLogo = document.createElement('img');
      githubLogo.src = 'https://cdn-icons-png.flaticon.com/256/25/25231.png';
      githubLogo.alt = 'GitHub';
      githubLogo.className = 'github-logo';
      githubBtn.appendChild(githubLogo);
      // Hover text
      const githubText = document.createElement('span');
      githubText.className = 'github-btn-text';
      githubText.textContent = 'Go to Github Repository';
      githubBtn.appendChild(githubText);
      card.appendChild(githubBtn);
    }
    carouselTrack.appendChild(card);
  });
}

function slideTo(offset) {
  const total = projects.length;
  focusIndex = (focusIndex + offset + total) % total;
  renderCarousel();
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
if (prevBtn && nextBtn) {
  prevBtn.onclick = () => {
    slideTo(-1);
  };
  nextBtn.onclick = () => {
    slideTo(1);
  };
}

// Smooth scroll for sticky section buttons (if not already handled by browser)
document.querySelectorAll('.sticky-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const targetId = btn.textContent.trim().toLowerCase();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-triggered fade-slide-up animation
function onScrollFadeIn() {
  document.querySelectorAll('.fade-slide-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('DOMContentLoaded', onScrollFadeIn);

// Message Modal logic
const openMsgBtn = document.getElementById('openMessageModal');
const closeMsgBtn = document.getElementById('closeMessageModal');
const msgModal = document.getElementById('messageModal');
const msgForm = document.getElementById('messageForm');

if (openMsgBtn && closeMsgBtn && msgModal && msgForm) {
  openMsgBtn.onclick = () => { msgModal.style.display = 'flex'; };
  closeMsgBtn.onclick = () => { msgModal.style.display = 'none'; };
  window.addEventListener('keydown', e => { if (e.key === 'Escape') msgModal.style.display = 'none'; });
  msgModal.addEventListener('click', e => { if (e.target === msgModal) msgModal.style.display = 'none'; });
  msgForm.onsubmit = function(e) {
    e.preventDefault();
    const from = document.getElementById('fromEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const mailto = `mailto:clarencecaluag@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + from + '\n\n' + message)}`;
    window.open(mailto, '_blank');
    msgModal.style.display = 'none';
    msgForm.reset();
  };
}

// Initial render of carousel after DOM is ready
window.addEventListener('DOMContentLoaded', renderCarousel);

// Hamburger menu for mobile nav
window.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburgerBtn && navLinks) {
    // Show hamburger only on mobile
    function handleResize() {
      if (window.innerWidth <= 700) {
        hamburgerBtn.style.display = 'block';
        navLinks.classList.remove('open');
      } else {
        hamburgerBtn.style.display = 'none';
        navLinks.classList.remove('open');
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    hamburgerBtn.addEventListener('click', function(e) {
      navLinks.classList.toggle('open');
    });
    // Optional: close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 700) navLinks.classList.remove('open');
      });
    });
  }
}); 