import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from 'react-icons/io5';

export const App: React.FC = () => {
  const music = {
    title: 'Acorda Devinho',
    band: 'Banda Rocketseat'
  };

  return (
    <div className="flex bg-[#0F0D13] h-screen justify-center items-center">
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-7 bg-[#2A2141] p-10 rounded-lg">
          <img src="assets/music-image.png" alt="Imagem da música" className="w-[14rem] h-[14rem] object-cover" />
          <div className="flex flex-col">
            <b className="text-3xl text-gray-100">{music.title}</b>
            <span className="text-2xl text-gray-400">{music.band}</span>
          </div>
          <MusicController />
          <ProgressBar />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-between bg-[#2A2141] p-7 gap-7 rounded-lg">
            <div className="flex flex-row gap-7">
              <img src="assets/music-image.png" alt="Imagem da música" className="w-[6rem] h-[6rem] object-cover" />
              <div className="flex flex-col">
                <b className="text-3xl text-gray-100">{music.title}</b>
                <span className="text-2xl text-gray-400">{music.band}</span>
              </div>
            </div>
            <MusicController className="justify-evenly" />
            <ProgressBar />
          </div>

          <div className="flex flex-col justify-between bg-[#2A2141] p-7 gap-7 rounded-lg">
            <div className="flex flex-row gap-7">
              <img src="assets/music-image.png" alt="Imagem da música" className="w-[6rem] h-[6rem] object-cover" />
              <div className="flex flex-col">
                <b className="text-3xl text-gray-100">{music.title}</b>
                <span className="text-2xl text-gray-400">{music.band}</span>
              </div>
            </div>
            <MusicController className="justify-evenly" />
          </div>
        </div>
      </div>
    </div>
  );
};

type MusicControllerProps = {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
};
const MusicController: React.FC<MusicControllerProps> = ({ className }) => {
  return (
    <div className={`flex flex-row justify-between ${className}`}>
      <IoPlaySkipBack color="#F3F4F6" size={35} className="cursor-pointer" />
      <IoPlay color="#F3F4F6" size={35} className="cursor-pointer" />
      <IoPlaySkipForward color="#F3F4F6" size={35} className="cursor-pointer" />
    </div>
  );
};

type ProgressBarProps = {
  percentage?: number;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
};
const ProgressBar: React.FC<ProgressBarProps> = ({ percentage = 90, className }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${className}`}>
        <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: `${percentage}%` }} />
      </div>
      <div className="flex flex-row justify-between text-gray-400">
        <span>03:20</span>
        <span>00:12</span>
      </div>
    </div>
  );
};
