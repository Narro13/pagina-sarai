/* ==========================================================
   ❤️ EDITA ESTE ARCHIVO PARA PERSONALIZAR LA PÁGINA
   No necesitas modificar index.html ni style.css para cambios
   normales de texto, fechas, recuerdos o fotos.
   ========================================================== */

const SITE = {
  couple: "Saraí & Miguel",
  heroText: "Una pequeña parte de nuestra historia, de todo lo que hemos vivido y de todo lo que todavía nos falta vivir juntos.",
  startDate: "04 de febrero de 2024",
  introText: "Nuestra historia comenzó el 04 de febrero de 2024. Desde aquel día hemos ido construyendo algo que vale la pena guardar: conversaciones, risas, momentos difíciles, reconciliaciones, pequeños detalles y recuerdos que poco a poco se convirtieron en parte de nosotros.",
  quote: "No quiero guardar solamente fotografías de nosotros; quiero guardar la historia que hay detrás de cada una.",
  song: {
    name: "Me Voy Enamorando",
    artist: "Chino & Nacho",
    // Puedes reemplazar este enlace por el video exacto que prefieras.
    url: "https://www.youtube.com/results?search_query=Chino+Nacho+Me+Voy+Enamorando"
  },
  letter: {
    date: "Para Saraí ❤️",
    title: "Gracias por ser parte de mi historia",
    paragraphs: [
      "Quiero que esta página sea mucho más que una colección de fotos. Quiero que sea un pequeño lugar al que podamos volver cada vez que queramos recordar todo lo que hemos vivido.",
      "Desde aquel 04 de febrero de 2024 han pasado muchas cosas. Hemos tenido días bonitos, momentos difíciles, risas, conversaciones largas y también momentos en los que tuvimos que aprender a entendernos mejor. Y precisamente por eso nuestra historia tiene valor: porque es nuestra, porque la hemos construido nosotros.",
      "Gracias por cada momento, por cada abrazo, por cada conversación y por todas esas pequeñas cosas que quizá en el momento parecen sencillas, pero que con el tiempo terminan siendo los recuerdos que más queremos conservar.",
      "Quiero seguir llenando esta página contigo. Que cada nueva foto, cada nueva fecha y cada nuevo recuerdo represente un capítulo más de nosotros. ❤️"
    ],
    signature: "Con todo mi amor, Miguel"
  },

  // ========================================================
  // AGREGA NUEVOS RECUERDOS AQUÍ
  // Copia un bloque y cambia fecha, título y texto.
  // ========================================================
  timeline: [
    {
      date: "04/02/2024",
      title: "El comienzo ❤️",
      text: "El día en que comenzó nuestra historia. Un día que, sin saberlo, se convertiría en una de las fechas más importantes para nosotros."
    },
    {
      date: "04/03/2024",
      title: "Un mes juntos",
      text: "Nuestro primer mes y el inicio de muchos recuerdos que todavía seguimos construyendo."
    },
    {
      date: "04/02/2025",
      title: "Un año de nosotros",
      text: "Un año lleno de aprendizajes, momentos especiales y razones para seguir eligiéndonos."
    },
    {
      date: "04/02/2026",
      title: "Dos años ❤️",
      text: "Dos años de una historia que continúa creciendo y sumando nuevos capítulos."
    },
    {
      date: "PRÓXIMO RECUERDO",
      title: "Aquí irá nuestra próxima historia ✨",
      text: "Puedes reemplazar este recuerdo por cualquier nueva experiencia que quieras guardar."
    }
  ],

  // ========================================================
  // AGREGA TUS FOTOS AQUÍ
  // 1. Sube la imagen a la carpeta /fotos.
  // 2. Escribe su nombre exactamente igual aquí.
  // ========================================================
  photos: [
    // { file: "fotos/foto1.jpg", caption: "Nuestro primer recuerdo" },
    // { file: "fotos/foto2.jpg", caption: "Un día especial" },
    // { file: "fotos/foto3.jpg", caption: "Nosotros ❤️" }
  ]
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

setText("coupleTitle", SITE.couple);
setText("heroText", SITE.heroText);
setText("startDate", SITE.startDate);
setText("sinceDate", SITE.startDate);
setText("introText", SITE.introText);
setText("quote", SITE.quote);
setText("songName", SITE.song.name);
setText("songArtist", SITE.song.artist);
setText("letterDate", SITE.letter.date);
setText("letterTitle", SITE.letter.title);
setText("signature", SITE.letter.signature);
setText("footerName", SITE.couple.split(" & ")[0]);

document.getElementById("songLink").href = SITE.song.url;

document.title = `Para ${SITE.couple.split(" & ")[0]} ❤️`;

const timelineList = document.getElementById("timelineList");
SITE.timeline.forEach(item => {
  const article = document.createElement("article");
  article.className = "timeline-item";
  article.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-date">${item.date}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>`;
  timelineList.appendChild(article);
});

const gallery = document.getElementById("gallery");
if (SITE.photos.length === 0) {
  gallery.innerHTML = `
    <div class="photo-card placeholder">
      <div>📸<br><br><b>Tu primera foto irá aquí</b><br>Sube una imagen a la carpeta <b>fotos</b> y agrégala en <b>script.js</b>.</div>
    </div>
    <div class="photo-card placeholder">
      <div>💕<br><br><b>Este espacio está reservado para otro recuerdo.</b></div>
    </div>
    <div class="photo-card placeholder">
      <div>✨<br><br><b>La galería crecerá contigo.</b></div>
    </div>`;
} else {
  SITE.photos.forEach(photo => {
    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `<img src="${photo.file}" alt="${photo.caption || 'Recuerdo'}" loading="lazy"><div class="photo-caption">${photo.caption || "Un recuerdo ❤️"}</div>`;
    gallery.appendChild(card);
  });
}

const letterBody = document.getElementById("letterBody");
SITE.letter.paragraphs.forEach(paragraph => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  letterBody.appendChild(p);
});

// Corazones decorativos suaves.
function createHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = "♥";
  h.style.left = `${Math.random() * 100}%`;
  h.style.fontSize = `${10 + Math.random() * 16}px`;
  h.style.animationDuration = `${6 + Math.random() * 6}s`;
  document.querySelector(".hearts").appendChild(h);
  setTimeout(() => h.remove(), 13000);
}
setInterval(createHeart, 900);
