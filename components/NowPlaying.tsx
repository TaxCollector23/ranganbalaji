"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

export default function NowPlaying() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const attemptPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;

    void audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    attemptPlayback();

    const unlockPlayback = () => attemptPlayback();
    const passiveOnce = { once: true, passive: true } as const;

    document.addEventListener("pointerdown", unlockPlayback, { once: true });
    document.addEventListener("pointermove", unlockPlayback, passiveOnce);
    document.addEventListener("touchstart", unlockPlayback, passiveOnce);
    document.addEventListener("keydown", unlockPlayback, { once: true });

    return () => {
      document.removeEventListener("pointerdown", unlockPlayback);
      document.removeEventListener("pointermove", unlockPlayback);
      document.removeEventListener("touchstart", unlockPlayback);
      document.removeEventListener("keydown", unlockPlayback);
    };
  }, [attemptPlayback]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play().then(() => setPlaying(true));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        autoPlay
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration);
          attemptPlayback();
        }}
        onLoadedData={attemptPlayback}
        onCanPlay={attemptPlayback}
        onCanPlayThrough={attemptPlayback}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="now-playing" aria-label="Music player">
        <button
          type="button"
          className="np-toggle"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <span className="np-album" aria-hidden="true">
            <img src="/music-icon.png" alt="" />
          </span>
        </button>
        <span className="np-info">
          <span className="np-title">
            <span className="np-eq" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="np-title-text">Now playing</span>
          </span>
          <span className="np-artist">boa - duvet (instrumental)</span>
          <span className="np-controls">
            <span className="np-time" aria-live="off">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </span>
        </span>
      </div>
    </>
  );
}
