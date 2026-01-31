const valentineData = {
    reasons: [
        "Your beautiful smile", "The comfort in your eyes", "The way my heart beats faster everytime I see you",
        "Your sweet scent", "Your cute nose", "Your soft hair", "The resilience you have when going through tough times",
        "The way you always make me feel comforted", "Your cute giggle when I crack jokes", "The way you call me bear",
        "The way you call me baby", "The way you call me bubba", "How we always end the day saying I love you",
        "Your willingness to accept me for all my faults", "Your kindness to all those around you",
        "The way you always think about others first rather than yourself", "The way you care for your family even when times are tough",
        "Your intelligence and how you excel at everything you put your mind to", "Your independence",
        "The soft way you speak to me when we are alone", "The kisses you give me", "The way you held my arm on our long car ride",
        "The way you squish my face", "The way you look at me with so much love in your eyes",
        "The way you feed me Taco Bell when we were watching Rotten Mango", "The cute little emotes you do",
        "The way you include my family into your thoughts and prayers", "When you send me pictures of the things you do to include me in it",
        "The way you make everything you wear look so good", "When you call me in the morning to spend time before you go to work",
        "Your comforting presence", "The way you make ordinary moments feel so special", "The way you choose me even on hard days",
        "The way you choose me for comfort when you feel down", "The warmth you give when you hold me",
        "The way you fit perfectly in my arms", "The way you naturally glow", "Your cute cheeks when you pout",
        "How cute you look when you put on glasses", "How beautiful you are inside and out at all times",
        "The way you have this cute smirk when you say something funny", "The way you light up the room wherever you go",
        "How sweet you are to my family", "How you can joke around with my friends", "When you value the advice you give",
        "How you say you don’t deserve me but you truly deserve me and more", "The way you bring up my confidence",
        "The way you make me feel special", "How you make me feel whole", "The joy you bring into my life just by being yourself",
        "The cute calls for help when we play Roblox", "The way you treat your family so well", "The care you have for my family",
        "The cute tongue emote you do", "The way you sing when we went on our drive", "The way you look at me when you sing love songs",
        "The motivation you give me to be a better person", "The way you reassure me when my thoughts are all over the place",
        "How you show me love even in the little ways", "How even when you're silent on TikTok time I feel comfort with your presence"
    ],
    memories: [
        { image: "assets/ft_pic.jpg", caption: "My favorite FaceTime picture", rotation: -3 },
        { image: "assets/us_pic.jpg", caption: "My favorite picture of us", rotation: 4 },
        { image: "assets/you_pic.jpg", caption: "My favorite pic of you", rotation: -2 }
    ]
};

function handleYes() {
    document.getElementById('question').innerText = "Yay! I Love You So Much Bubba! 😘";
    document.getElementById('main-gif').src = "assets/love%20you.gif";
    document.querySelector('.buttons').style.display = 'none';
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ff4081', '#ffc5d3', '#ffffff'] });
}

function moveButton() {
    const noBtn = document.getElementById('noButton');
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    noBtn.style.left = `${Math.random() * maxX}px`;
    noBtn.style.top = `${Math.random() * maxY}px`;
}

function toggleMusic() {
    const song = document.getElementById('loveSong');
    const btn = document.getElementById('playBtn');
    const visualizer = document.getElementById('visualizer');
    if (song.paused) { song.play(); btn.innerText = "⏸ Pause Our Song"; visualizer.classList.remove('hidden'); }
    else { song.pause(); btn.innerText = "🎵 Play Our Song"; visualizer.classList.add('hidden'); }
}

function revealCoupon() {
    const box = document.getElementById('coupon-box');
    if (box.classList.contains('revealed-ticket')) return;
    box.classList.add('revealed-ticket');
    box.innerHTML = `<div style="font-size: 0.8rem;">ADMIT ONE</div><div style="font-size: 1.2rem;">🎟️ DATE NIGHT VOUCHER</div><hr style="border: 1px dashed #ff4081;"><p>Taco Bell & Rotten Mango Marathon</p><div style="font-size: 0.7rem;">VALID FOREVER ❤️</div>`;
    confetti({ particleCount: 50, spread: 360, origin: { y: 0.8 }, colors: ['#ff4081', '#ffffff'] });
}

function toggleCowBubble() {
    const bubble = document.getElementById('cow-bubble');
    bubble.classList.toggle('show-bubble');
    if (bubble.classList.contains('show-bubble')) setTimeout(() => bubble.classList.remove('show-bubble'), 3000);
}

let reasonIndex = 0;
function addLove() {
    const display = document.getElementById('reason-display');
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerText = valentineData.reasons[reasonIndex % valentineData.reasons.length];
        display.style.opacity = 1;
        reasonIndex++;
    }, 200);
}

window.onload = () => {
    const row = document.querySelector('.photo-row');
    valentineData.memories.forEach(m => {
        const pol = document.createElement('div');
        pol.className = 'polaroid';
        pol.style.transform = `rotate(${m.rotation}deg)`;
        pol.innerHTML = `<img src="${m.image}" alt="memory"><p>${m.caption}</p>`;
        row.appendChild(pol);
    });
};

setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);