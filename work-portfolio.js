const workPlayer = document.querySelector('[data-work-player]');

if (workPlayer) {
  const playerTitle = workPlayer.querySelector('[data-work-player-title]');
  const playerDirector = workPlayer.querySelector('[data-work-player-director]');
  const playerMedia = workPlayer.querySelector('[data-work-player-media]');
  const closeButton = workPlayer.querySelector('[data-work-player-close]');
  let activeTrigger = null;

  const clearPlayer = () => {
    playerMedia.replaceChildren();
    document.body.style.overflow = '';
    activeTrigger?.focus();
    activeTrigger = null;
  };

  document.querySelectorAll('[data-work-project]').forEach((project) => {
    project.addEventListener('click', () => {
      activeTrigger = project;
      playerTitle.textContent = project.dataset.title;
      playerDirector.textContent = `Director: ${project.dataset.director}`;

      if (project.dataset.videoType === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.poster = project.dataset.videoPoster;

        const source = document.createElement('source');
        source.src = project.dataset.videoSrc;
        source.type = 'video/mp4';
        video.append(source);
        playerMedia.append(video);
      } else {
        const frame = document.createElement('iframe');
        frame.src = project.dataset.videoSrc;
        frame.title = `${project.dataset.title} video player`;
        frame.allow = 'autoplay; fullscreen';
        frame.allowFullscreen = true;
        playerMedia.append(frame);
      }

      document.body.style.overflow = 'hidden';
      workPlayer.showModal();
    });
  });

  closeButton.addEventListener('click', () => workPlayer.close());
  workPlayer.addEventListener('close', clearPlayer);
  workPlayer.addEventListener('cancel', () => {
    document.body.style.overflow = '';
  });
  workPlayer.addEventListener('click', (event) => {
    if (event.target === workPlayer) workPlayer.close();
  });
}
