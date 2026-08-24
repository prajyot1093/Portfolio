import React, { useRef, useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import type { MusicData } from "~/types";

interface SliderProps {
  icon: string;
  value: number;
  setValue: (value: number) => void;
}

const SliderComponent = ({ icon, value, setValue }: SliderProps) => (
  <div className="slider flex">
    <div className="size-7 flex-center bg-c-100" border="t l b c-300 rounded-l-full">
      <span className={icon} text="xs c-500" />
    </div>
    <Slider
      min={1}
      max={100}
      value={value}
      tooltip={false}
      orientation="horizontal"
      onChange={(v: number) => setValue(v)}
    />
  </div>
);

const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export interface CCMProps {
  toggleControlCenter: () => void;
  toggleAudio: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  selectTrack: (index: number) => void;
  currentTrack: MusicData;
  currentTrackIndex: number;
  playlist: MusicData[];
  playing: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  seekAudio: (percent: number) => void;
  setBrightness: (value: number) => void;
  setVolume: (value: number) => void;
  btnRef: React.RefObject<HTMLDivElement>;
}

export default function ControlCenterMenu({
  toggleControlCenter,
  toggleAudio,
  nextTrack,
  prevTrack,
  selectTrack,
  currentTrack,
  currentTrackIndex,
  playlist,
  playing,
  progress,
  currentTime,
  duration,
  seekAudio,
  setBrightness,
  setVolume,
  btnRef
}: CCMProps) {
  const controlCenterRef = useRef<HTMLDivElement>(null);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);

  const { dark, wifi, brightness, bluetooth, airdrop, fullscreen, volume } = useStore(
    (state) => ({
      dark: state.dark,
      wifi: state.wifi,
      brightness: state.brightness,
      bluetooth: state.bluetooth,
      airdrop: state.airdrop,
      fullscreen: state.fullscreen,
      volume: state.volume
    })
  );
  const { toggleWIFI, toggleBluetooth, toggleAirdrop, toggleDark, toggleFullScreen } =
    useStore((state) => ({
      toggleWIFI: state.toggleWIFI,
      toggleBluetooth: state.toggleBluetooth,
      toggleAirdrop: state.toggleAirdrop,
      toggleDark: state.toggleDark,
      toggleFullScreen: state.toggleFullScreen
    }));

  useClickOutside(controlCenterRef, toggleControlCenter, [btnRef]);

  const activeTrack = currentTrack || playlist?.[0] || {
    title: "Sunflower",
    artist: "Post Malone / Swae Lee",
    cover: "//p1.music.126.net/z0IO1vEsowL9mD_5yzUjeA==/109951163936068098.jpg",
    audio: "music/sunflower.mp3"
  };

  return (
    <div
      className="w-80 max-w-[95vw] shadow-menu p-2.5 text-c-black bg-c-100/80 backdrop-blur-2xl transition-all duration-200"
      pos="fixed top-9.5 right-0 sm:right-1.5"
      border="~ menu rounded-2xl"
      ref={controlCenterRef}
      style={{ zIndex: 100 }}
    >
      <div className="grid grid-cols-4 gap-2">
        {/* Network controls */}
        <div className="cc-grid row-span-2 col-span-2 p-2 flex flex-col justify-around">
          <div className="hstack space-x-2">
            <div className={`${wifi ? "cc-btn" : "cc-btn-active"}`} onClick={toggleWIFI}>
              <span className="i-material-symbols:wifi text-base" />
            </div>
            <div p="t-0.5">
              <div className="font-medium leading-4">Wi-Fi</div>
              <div className="cc-text">{wifi ? "Home" : "Off"}</div>
            </div>
          </div>
          <div className="hstack space-x-2">
            <div
              className={`${bluetooth ? "cc-btn" : "cc-btn-active"}`}
              onClick={toggleBluetooth}
            >
              <span className="i-charm:bluetooth text-base" />
            </div>
            <div p="t-0.5">
              <div className="font-medium leading-4">Bluetooth</div>
              <div className="cc-text">{bluetooth ? "On" : "Off"}</div>
            </div>
          </div>
          <div className="hstack space-x-2">
            <div
              className={`${airdrop ? "cc-btn" : "cc-btn-active"}`}
              onClick={toggleAirdrop}
            >
              <span className="i-material-symbols:rss-feed-rounded text-base" />
            </div>
            <div p="t-0.5">
              <div className="font-medium leading-4">AirDrop</div>
              <div className="cc-text">{airdrop ? "Contacts Only" : "Off"}</div>
            </div>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="cc-grid col-span-2 p-2 hstack space-x-3">
          <div className={`${dark ? "cc-btn" : "cc-btn-active"}`} onClick={toggleDark}>
            {dark ? (
              <span className="i-ion:moon text-base" />
            ) : (
              <span className="i-ion:sunny text-base" />
            )}
          </div>
          <div className="font-medium">{dark ? "Dark Mode" : "Light Mode"}</div>
        </div>

        {/* Keyboard Brightness */}
        <div className="cc-grid flex-center flex-col py-1.5">
          <span className="i-bi:brightness-alt-high text-xl" />
          <span text="xs center" font="leading-3.5" m="t-1">
            Brightness
          </span>
        </div>

        {/* Fullscreen Toggle */}
        <div
          className="cc-grid flex-center flex-col cursor-pointer hover:opacity-90 py-1.5"
          onClick={() => toggleFullScreen(!fullscreen)}
        >
          {fullscreen ? (
            <span className="i-bi:fullscreen-exit text-base" />
          ) : (
            <span className="i-bi:fullscreen text-base" />
          )}
          <span text="xs center" font="leading-3.5" m="t-1">
            {fullscreen ? "Exit Full" : "Fullscreen"}
          </span>
        </div>

        {/* Display Slider */}
        <div className="cc-grid col-span-4 px-2.5 py-2 space-y-1 flex flex-col justify-around">
          <span className="font-medium ml-0.5">Display</span>
          <SliderComponent icon="i-ion:sunny" value={brightness} setValue={setBrightness} />
        </div>

        {/* Sound Slider */}
        <div className="cc-grid col-span-4 px-2.5 py-2 space-y-1 flex flex-col justify-around">
          <span className="font-medium ml-0.5">Sound</span>
          <SliderComponent icon="i-ion:volume-high" value={volume} setValue={setVolume} />
        </div>

        {/* Interactive Music Player Card */}
        <div className="cc-grid col-span-4 p-2.5 flex flex-col space-y-2">
          {/* Main Track Details & Playback Controls */}
          <div className="hstack space-x-2.5">
            <div className="relative size-12 flex-shrink-0">
              <img
                className="size-12 rounded-lg object-cover shadow-sm"
                src={activeTrack.cover}
                alt={activeTrack.title}
              />
              {playing && (
                <div className="absolute inset-0 bg-black/20 rounded-lg flex-center">
                  <div className="flex items-end space-x-0.5 h-3">
                    <span className="w-0.5 bg-white rounded-full eq-bar-1" />
                    <span className="w-0.5 bg-white rounded-full eq-bar-2" />
                    <span className="w-0.5 bg-white rounded-full eq-bar-3" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">{activeTrack.title}</div>
              <div className="cc-text truncate">{activeTrack.artist}</div>
            </div>

            {/* Media Action Buttons */}
            <div className="hstack space-x-1.5 flex-shrink-0">
              <button
                type="button"
                className="size-7 flex-center rounded-full hover:bg-gray-400/20 active:scale-95 transition-all text-c-700"
                onClick={prevTrack}
                title="Previous track"
              >
                <span className="i-bi:skip-start-fill text-lg" />
              </button>

              <button
                type="button"
                className="size-8 flex-center rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white shadow-sm transition-all"
                onClick={toggleAudio}
                title={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <span className="i-bi:pause-fill text-xl" />
                ) : (
                  <span className="i-bi:play-fill text-xl ml-0.5" />
                )}
              </button>

              <button
                type="button"
                className="size-7 flex-center rounded-full hover:bg-gray-400/20 active:scale-95 transition-all text-c-700"
                onClick={nextTrack}
                title="Next track"
              >
                <span className="i-bi:skip-end-fill text-lg" />
              </button>

              <button
                type="button"
                className={`size-7 flex-center rounded-full transition-all ${
                  showPlaylist
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-400/20 text-c-700"
                }`}
                onClick={() => setShowPlaylist(!showPlaylist)}
                title="Toggle playlist"
              >
                <span className="i-bi:music-note-list text-sm" />
              </button>
            </div>
          </div>

          {/* Scrubber / Progress Bar */}
          <div className="w-full flex items-center space-x-2 pt-0.5">
            <span className="text-[10px] text-c-500 font-mono w-6 text-right">
              {formatTime(currentTime)}
            </span>
            <div
              className="flex-1 h-1.5 bg-gray-400/30 dark:bg-gray-600/40 rounded-full overflow-hidden cursor-pointer relative group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                seekAudio(pct);
              }}
            >
              <div
                className="h-full bg-blue-500 rounded-full transition-all group-hover:bg-blue-400"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
            <span className="text-[10px] text-c-500 font-mono w-6">
              {formatTime(duration || (activeTrack.duration ? 0 : 0))}
            </span>
          </div>

          {/* Expandable Playlist Selector */}
          {showPlaylist && playlist && playlist.length > 0 && (
            <div className="mt-1 pt-2 border-t border-gray-400/20 flex flex-col space-y-1 max-h-48 overflow-y-auto">
              <div className="text-[11px] font-semibold text-c-500 px-1 uppercase tracking-wider">
                Playlist ({playlist.length} songs)
              </div>
              {playlist.map((track, idx) => {
                const isCurrent = currentTrackIndex === idx;
                return (
                  <div
                    key={track.id || track.audio || idx}
                    className={`hstack justify-between px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                      isCurrent
                        ? "bg-blue-500/15 text-blue-500 font-medium"
                        : "hover:bg-gray-400/15 text-c-700"
                    }`}
                    onClick={() => selectTrack(idx)}
                  >
                    <div className="hstack space-x-2 min-w-0 flex-1">
                      <img
                        className="size-7 rounded object-cover flex-shrink-0"
                        src={track.cover}
                        alt={track.title}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs truncate">{track.title}</div>
                        <div className="text-[10px] opacity-75 truncate">{track.artist}</div>
                      </div>
                    </div>

                    <div className="hstack space-x-1.5 flex-shrink-0 ml-2">
                      {isCurrent && playing ? (
                        <div className="flex items-end space-x-0.5 h-2.5">
                          <span className="w-0.5 bg-blue-500 rounded-full eq-bar-1" />
                          <span className="w-0.5 bg-blue-500 rounded-full eq-bar-2" />
                          <span className="w-0.5 bg-blue-500 rounded-full eq-bar-3" />
                        </div>
                      ) : (
                        <span className="text-[10px] opacity-60">
                          {track.duration || ""}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
