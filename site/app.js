const root = document.getElementById('days');

CONTENT.forEach(day => {
  const row = document.createElement('section');
  row.className = 'day-row';

  const label = document.createElement('div');
  label.className = 'day-label';
  label.innerHTML = `<span class="day-num">Gün ${day.gun}</span><span class="day-cat">${day.kategori}</span><h2>${day.baslik}</h2>`;
  row.appendChild(label);

  const slidesWrap = document.createElement('div');
  slidesWrap.className = 'slides-scroll';

  day.postSlides.forEach((src, i) => {
    const fig = document.createElement('figure');
    fig.className = 'slide';
    fig.innerHTML = `<img src="${src}" alt="Gün ${day.gun} slide ${i + 1}" loading="lazy"><span class="slide-no">${i + 1}/5</span>`;
    slidesWrap.appendChild(fig);
  });

  const storyFig = document.createElement('figure');
  storyFig.className = 'slide story';
  storyFig.innerHTML = `<img src="${day.storyImage}" alt="Gün ${day.gun} hikaye" loading="lazy"><span class="slide-no">Hikaye</span>`;
  slidesWrap.appendChild(storyFig);

  row.appendChild(slidesWrap);

  const caption = document.createElement('p');
  caption.className = 'caption';
  caption.textContent = day.caption;
  row.appendChild(caption);

  root.appendChild(row);
});
