import { AiFillHome } from 'react-icons/ai'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { SiYoutubemusic, SiYoutubegaming } from 'react-icons/si'
import { MdVideoLibrary, MdOutlineLocalMovies } from 'react-icons/md'
import { VscHistory } from 'react-icons/vsc'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { AiOutlineClockCircle, AiOutlineBulb } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { BsNewspaper } from 'react-icons/bs'
import { HiOutlineFire } from 'react-icons/hi'
import { IoMusicalNoteOutline } from 'react-icons/io5'
import { CiTrophy } from 'react-icons/ci'
import { GiDress } from 'react-icons/gi'
import { HiSignal } from 'react-icons/hi2'

export const SideBarItems = {
  Top: [
    { icon: <AiFillHome size={21} />, name: 'Home' },
    { icon: <SiYoutubemusic size={21} />, name: 'Shorts' },
    { icon: <MdOutlineSubscriptions size={21} />, name: 'Subscriptions' },
  ],
  Middle: [
    { icon: <MdVideoLibrary size={21} />, name: 'Library' },
    { icon: <VscHistory size={21} />, name: 'History' },
    { icon: <AiOutlinePlaySquare size={21} />, name: 'Your videos' },
    { icon: <AiOutlineClockCircle size={21} />, name: 'Watch later' },
    { icon: <BiLike size={21} />, name: 'Liked videos' },
  ],
  Bottom: [
    { icon: <HiOutlineFire size={21} />, name: 'Trending' },
    { icon: <IoMusicalNoteOutline size={21} />, name: 'Music' },
    { icon: <MdOutlineLocalMovies size={21} />, name: 'Movies' },
    { icon: <HiSignal size={21} />, name: 'Live' },
    { icon: <SiYoutubegaming size={21} />, name: 'Gaming' },
    { icon: <BsNewspaper size={21} />, name: 'News' },
    { icon: <CiTrophy size={23} />, name: 'Sports' },
    { icon: <AiOutlineBulb size={21} />, name: 'Learning' },
    { icon: <GiDress size={21} />, name: 'Fasion & beauty' },
  ],
}

export const CategoryItems = [
  'All',
  'Next JS',
  'BlackPink',
  'Jennie',
  'Music',
  'Justin Beiber',
  'Anime',
  'Naruto',
  'Pc Games',
  'Genshin Impact',
  'Call of Duty Warzone',
  'Mobile',
  'Samsung',
  'One UI',
  'Stock Android'
]


export const videos = [
  {
    url:"https://firebasestorage.googleapis.com/v0/b/clone-c6054.appspot.com/o/Naruto%20Ep%20Episode%201%20-%20Chia-Anime.mp4?alt=media&token=e9dd3547-0182-407c-8ad5-77d58e9f80bd",

    thum:"https://i.ytimg.com/vi/DttTRPKdq-0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEFKxFCfGKJjXCzaHxrtacgs7pMA",

    logo:"https://yt3.ggpht.com/oV1Y-fHP3Dz9VubrGBFGzX2MnyF6Ftnx7a1ijqnAp78BspH-jsvVPHmY1wL9kVPzYGALiKG6LfQ=s88-c-k-c0x00ffffff-no-rj",
    
    tittle:"name of the video"

  }

]