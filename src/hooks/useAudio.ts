import { useEffect, useRef, useState } from "react";
import type { MusicData } from "~/types";
import { playlist as defaultPlaylist } from "~/configs/music";

export interface HTMLAudioState {
  volume: number;
  playing: boolean;
  currentTrackIndex: number;
  currentTrack: MusicData;
  playlist: MusicData[];
  currentTime: number;
  duration: number;
  progress: number;
}

export interface HTMLAudioProps {
  src?: string;
  autoReplay?: boolean;
  playlist?: MusicData[];
  defaultTrackIndex?: number;
  autoPlay?: boolean;
}

export interface HTMLAudioControls {
  play: () => Promise<void> | void;
  pause: () => Promise<void> | void;
  toggle: () => Promise<void> | void;
  next: () => void;
  prev: () => void;
  selectTrack: (index: number) => void;
  volume: (value: number) => void;
  seek: (percent: number) => void;
}

export function useAudio(props: HTMLAudioProps = {}) {
  const songs = props.playlist || defaultPlaylist;
  const initialIndex = props.defaultTrackIndex ?? 0;
  const initialSong = songs[initialIndex] || songs[0];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current) {
    audioRef.current = new Audio(props.src || initialSong.audio);
    audioRef.current.preload = "auto";
  }

  const [state, setState] = useState<HTMLAudioState>({
    volume: 1,
    playing: false,
    currentTrackIndex: initialIndex,
    currentTrack: initialSong,
    playlist: songs,
    currentTime: 0,
    duration: 0,
    progress: 0
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const playAudio = (): Promise<void> | void => {
    const el = audioRef.current;
    if (el) {
      const promise = el.play();
      if (promise !== undefined) {
        return promise
          .then(() => {
            setState((prev) => ({ ...prev, playing: true }));
          })
          .catch((err) => {
            console.warn("Audio autoplay blocked, waiting for user gesture", err);
          });
      }
    }
  };

  const pauseAudio = (): Promise<void> | void => {
    const el = audioRef.current;
    if (el) {
      el.pause();
      setState((prev) => ({ ...prev, playing: false }));
    }
  };

  const toggleAudio = (): Promise<void> | void => {
    const el = audioRef.current;
    if (el) {
      if (el.paused) {
        return playAudio();
      } else {
        return pauseAudio();
      }
    }
  };

  const changeTrack = (newIndex: number, shouldPlay: boolean = true) => {
    const el = audioRef.current;
    const songsList = stateRef.current.playlist;
    const safeIndex = (newIndex + songsList.length) % songsList.length;
    const targetSong = songsList[safeIndex];

    if (el && targetSong) {
      el.src = targetSong.audio;
      el.currentTime = 0;
      setState((prev) => ({
        ...prev,
        currentTrackIndex: safeIndex,
        currentTrack: targetSong,
        currentTime: 0,
        progress: 0
      }));

      if (shouldPlay) {
        el.play()
          .then(() => {
            setState((prev) => ({ ...prev, playing: true }));
          })
          .catch((err) => {
            console.warn("Playback error on song switch:", err);
          });
      }
    }
  };

  const nextTrack = () => {
    changeTrack(stateRef.current.currentTrackIndex + 1, true);
  };

  const prevTrack = () => {
    const el = audioRef.current;
    if (el && el.currentTime > 3) {
      el.currentTime = 0;
      return;
    }
    changeTrack(stateRef.current.currentTrackIndex - 1, true);
  };

  const selectTrack = (index: number) => {
    changeTrack(index, true);
  };

  const setAudioVolume = (value: number): void => {
    const el = audioRef.current;
    if (el) {
      const clamped = Math.min(1, Math.max(0, value));
      el.volume = clamped;
      setState((prev) => ({ ...prev, volume: clamped }));
    }
  };

  const seekAudio = (percent: number): void => {
    const el = audioRef.current;
    if (el && el.duration) {
      const targetTime = (percent / 100) * el.duration;
      el.currentTime = targetTime;
      setState((prev) => ({
        ...prev,
        currentTime: targetTime,
        progress: percent
      }));
    }
  };

  const controls: HTMLAudioControls = {
    play: playAudio,
    pause: pauseAudio,
    toggle: toggleAudio,
    next: nextTrack,
    prev: prevTrack,
    selectTrack,
    volume: setAudioVolume,
    seek: seekAudio
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onPlay = () => setState((prev) => ({ ...prev, playing: true }));
    const onPause = () => setState((prev) => ({ ...prev, playing: false }));
    const onTimeUpdate = () => {
      const currentTime = el.currentTime || 0;
      const duration = el.duration || 0;
      const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
      setState((prev) => ({
        ...prev,
        currentTime,
        duration,
        progress
      }));
    };
    const onLoadedMetadata = () => {
      setState((prev) => ({
        ...prev,
        duration: el.duration || 0
      }));
    };
    const onEnded = () => {
      nextTrack();
    };

    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("loadedmetadata", onLoadedMetadata);
    el.addEventListener("ended", onEnded);

    // Initial autoplay attempt on mount
    const initialPlayPromise = el.play();
    if (initialPlayPromise !== undefined) {
      initialPlayPromise
        .then(() => {
          setState((prev) => ({ ...prev, playing: true }));
        })
        .catch(() => {
          // Autoplay policy prevented playback before interaction:
          // Listen for the very first interaction anywhere to seamlessly start audio
          const unlockAudio = () => {
            el.play()
              .then(() => {
                setState((prev) => ({ ...prev, playing: true }));
              })
              .catch(() => {});
            cleanupInteractionListeners();
          };

          const cleanupInteractionListeners = () => {
            window.removeEventListener("pointerdown", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
            window.removeEventListener("keydown", unlockAudio);
            window.removeEventListener("click", unlockAudio);
          };

          window.addEventListener("pointerdown", unlockAudio, { once: true });
          window.addEventListener("touchstart", unlockAudio, { once: true });
          window.addEventListener("keydown", unlockAudio, { once: true });
          window.addEventListener("click", unlockAudio, { once: true });
        });
    }

    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("loadedmetadata", onLoadedMetadata);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  return [audioRef.current, state, controls, audioRef] as const;
}
