fetch('games.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('games-container');
    data.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" />
        <h3>${game.title}</h3>
        <p><strong>Platforms:</strong> ${game.platforms.join(', ')}</p>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <a href="${game.url}" target="_blank">Play Now</a>
      `;
      container.appendChild(card);
    });
  });
