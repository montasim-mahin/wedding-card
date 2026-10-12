// Wedding Countdown and Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Petals Effect
  initPetals();

  // 2. Initialize Countdown Timer
  initCountdown();

  // 3. Initialize Share & Copy Handlers
  initShareHandlers();

  // 4. Background Music (Soft Romantic Melody Generator via Web Audio API)
  initMusicPlayer();
});

/* ==========================================
   Petals Falling Animation
   ========================================== */
function initPetals() {
  const container = document.getElementById('petals-container');
  if (!container) return;

  const petalColors = [
    'rgba(142, 195, 238, 0.75)',
    'rgba(182, 219, 248, 0.8)',
    'rgba(110, 174, 224, 0.65)',
    'rgba(230, 243, 255, 0.85)',
    'rgba(255, 255, 255, 0.8)'
  ];

  const createPetal = () => {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 12 + 10; // 10px to 22px
    const left = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 6 + 7; // 7s to 13s
    const delay = Math.random() * 3;
    const bg = petalColors[Math.floor(Math.random() * petalColors.length)];

    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${left}%`;
    petal.style.background = `radial-gradient(ellipse at center, ${bg} 0%, rgba(255,255,255,0.1) 85%)`;
    petal.style.animationDuration = `${duration}s, ${duration / 2.5}s`;
    petal.style.animationDelay = `${delay}s, 0s`;

    container.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, (duration + delay) * 1000);
  };

  // Generate initial petals
  for (let i = 0; i < 15; i++) {
    setTimeout(createPetal, Math.random() * 3000);
  }

  // Continue generating petals at intervals
  setInterval(createPetal, 900);
}

/* ==========================================
   Countdown Timer (Target: 11 December 2026, 12:00 PM)
   ========================================== */
function initCountdown() {
  // Target: December 11, 2026 at 12:00:00 PM (Bangladesh Time +06:00)
  const targetDate = new Date('2026-12-11T12:00:00+06:00').getTime();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function update() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      if (daysEl) daysEl.innerText = '00';
      if (hoursEl) hoursEl.innerText = '00';
      if (minutesEl) minutesEl.innerText = '00';
      if (secondsEl) secondsEl.innerText = '00';
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================
   Multi-App Share & Toast Functionality
   (WhatsApp, Messenger, Imo, and Native Sheet)
   ========================================== */
function initShareHandlers() {
  const whatsappBtn = document.getElementById('btn-whatsapp');
  const messengerBtn = document.getElementById('btn-messenger');
  const shareAllBtn = document.getElementById('btn-share-all');
  const copyBtn = document.getElementById('btn-copy');
  const toast = document.getElementById('toast');

  const showToast = (message) => {
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  const getShareData = () => {
    const currentUrl = window.location.href;
    const title = 'The Wedding of Joy & Rimi';
    const text = `You are cordially invited to celebrate the wedding ceremony of Joy & Rimi on Friday, 11 December 2026 at 12:00 PM at Shanai Community Center, Wari, Dhaka.\n\nView Invitation Details:\n${currentUrl}`;
    return { title, text, currentUrl };
  };

  // 1. WhatsApp Share
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { text } = getShareData();
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // 2. Messenger / Facebook Share
  if (messengerBtn) {
    messengerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { currentUrl } = getShareData();
      if (navigator.share) {
        navigator.share({
          title: 'The Wedding of Joy & Rimi',
          text: `You are cordially invited to celebrate the wedding ceremony of Joy & Rimi on Friday, 11 December 2026 at 12:00 PM at Shanai Community Center, Wari, Dhaka.`,
          url: currentUrl
        }).catch(() => {});
      } else {
        const messengerUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(messengerUrl, '_blank', 'width=600,height=450');
      }
    });
  }

  // 3. Imo & All Other Apps (Native Mobile Share Sheet)
  if (shareAllBtn) {
    shareAllBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const { title, text, currentUrl } = getShareData();
      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: text,
            url: currentUrl
          });
        } catch (err) {
          // User closed share dialog, no error needed
        }
      } else {
        // Fallback for desktops: copy link directly and show toast
        fallbackCopy(currentUrl);
        showToast('Link copied! You can now paste and send it on Imo or any app.');
      }
    });
  }

  // 4. Copy Link Button
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { currentUrl } = getShareData();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentUrl)
          .then(() => showToast('Invitation link copied to clipboard!'))
          .catch(() => fallbackCopy(currentUrl));
      } else {
        fallbackCopy(currentUrl);
      }
    });
  }

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Invitation link copied to clipboard!');
    } catch (err) {
      showToast('Could not copy link');
    }
    document.body.removeChild(tempInput);
  }
}

/* ==========================================
   Soft Ambient Wedding Melody (Web Audio API)
   ========================================== */
function initMusicPlayer() {
  const musicBtn = document.getElementById('music-toggle');
  if (!musicBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let timeoutId = null;

  // Gentle acoustic bell/piano harmony frequencies (C major / G / Am / F peaceful progression)
  const notes = [
    // G3, B3, D4, G4, A4, B4, D5, E5, G5
    196.00, 246.94, 293.66, 392.00, 440.00, 493.88, 587.33, 659.25, 783.99
  ];

  // Sequence of sweet, gentle wedding arpeggios
  const melodyPattern = [
    { note: 293.66, duration: 1.2 }, // D4
    { note: 392.00, duration: 1.2 }, // G4
    { note: 440.00, duration: 1.2 }, // A4
    { note: 493.88, duration: 1.8 }, // B4
    { note: 440.00, duration: 1.0 }, // A4
    { note: 392.00, duration: 1.4 }, // G4
    { note: 329.63, duration: 1.4 }, // E4
    { note: 293.66, duration: 2.2 }, // D4
    { note: 246.94, duration: 1.2 }, // B3
    { note: 293.66, duration: 1.2 }, // D4
    { note: 392.00, duration: 2.5 }  // G4
  ];

  let currentStep = 0;

  function playTone(freq, duration) {
    if (!audioCtx || !isPlaying) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Soft warm sine + subtle overtone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Gentle bell envelope
      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn(e);
    }
  }

  function loopMelody() {
    if (!isPlaying) return;
    const step = melodyPattern[currentStep];
    playTone(step.note, step.duration);

    currentStep = (currentStep + 1) % melodyPattern.length;
    timeoutId = setTimeout(loopMelody, step.duration * 750);
  }

  musicBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isPlaying) {
      isPlaying = true;
      musicBtn.classList.add('playing');
      musicBtn.setAttribute('title', 'Pause Music');
      currentStep = 0;
      loopMelody();
    } else {
      isPlaying = false;
      musicBtn.classList.remove('playing');
      musicBtn.setAttribute('title', 'Play Music');
      if (timeoutId) clearTimeout(timeoutId);
    }
  });
}
