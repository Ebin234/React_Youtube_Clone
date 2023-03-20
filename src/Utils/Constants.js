import { AiFillHome, AiOutlineBulb, AiOutlineClockCircle, AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineLocalMovies, MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { VscHistory } from "react-icons/vsc";
import { BiLike } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { GiDress } from "react-icons/gi";
import { HiOutlineFire, HiSignal } from "react-icons/hi2";

export const SideBarItems = {
    Top: [
        { icon: <AiFillHome size={21} />, name: "Home" },
        { icon: <SiYoutubemusic size={21} />, name: "Shorts" },
        { icon: <HiOutlineFire size={21} />, name: "Trending" },
        { icon: <IoMusicalNoteOutline size={21} />, name: "Music" },
        { icon: <MdOutlineLocalMovies size={21} />, name: "Movies" },
        { icon: <HiSignal size={21} />, name: "Live" },
        { icon: <SiYoutubegaming size={21} />, name: "Gaming" },
        { icon: <BsNewspaper size={21} />, name: "News" },
        { icon: <CiTrophy size={23} />, name: "Sports" },
        { icon: <AiOutlineBulb size={21} />, name: "Learning" },
        { icon: <GiDress size={21} />, name: "Fasion & beauty" }
    ],
    Middle: [
        { icon: <MdOutlineSubscriptions size={21} />, name: "Subscriptions" },
        { icon: <MdVideoLibrary size={21} />, name: "Library" },
        { icon: <VscHistory size={21} />, name: "History" },
        { icon: <AiOutlinePlaySquare size={21} />, name: "Your Videos" },
        { icon: <AiOutlineClockCircle size={21} />, name: "Watch Later" },
        { icon: <BiLike size={21} />, name: "Liked Videos" }
    ],
}

export const TopMenuList = [
    "All",
    "Music",
    "Gaming",
    "React",
    "Comedy",
    "Hollywood",
    "Trailers",
    "T-Series",
    "Bollywood Music",
    "Mobile Phones",
    "Cricket",
    "HTML5"
]

export const CommentsData = [
    {
        name: "Ebin Yesudas",
        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
        replies: [
            {
                name: "Ebin Yesudas",
                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                replies: [
                    {
                        name: "Ebin Yesudas",
                        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                        replies: []
                    },
                ]
            },
            {
                name: "Ebin Yesudas",
                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                replies: []
            },
        ]
    },
    {
        name: "Ebin Yesudas",
        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
        replies: [
            {
                name: "Ebin Yesudas",
                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                replies: []
            },
        ]
    },
    {
        name: "Ebin Yesudas",
        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
        replies: []
    },
    {
        name: "Ebin Yesudas",
        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
        replies: [
            {
                name: "Ebin Yesudas",
                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                replies: [
                    {
                        name: "Ebin Yesudas",
                        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                        replies: []
                    },
                ]
            },
            {
                name: "Ebin Yesudas",
                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                replies: [
                    {
                        name: "Ebin Yesudas",
                        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                        replies: [
                            {
                                name: "Ebin Yesudas",
                                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                                replies: []
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Ebin Yesudas",
        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
        replies: [
            {
                name: "Ebin Yesudas",
                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                replies: []
            },
        ]
    },
    {
        name: "Ebin Yesudas",
        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
        replies: [
            {
                name: "Ebin Yesudas",
                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                replies: [
                    {
                        name: "Ebin Yesudas",
                        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                        replies: [
                            {
                                name: "Ebin Yesudas",
                                text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                                replies: [
                                    {
                                        name: "Ebin Yesudas",
                                        text: "sdnvhbdvij ejfbefjfjf fbshbajif",
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
]

export const YOUTUBE_API_BASEURL = "https://youtube-v3-alternative.p.rapidapi.com/";
export const SEARCH_SUGGESTIONS_API_BASEURL = "https://youtube138.p.rapidapi.com/";

var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

export function generateNames() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
};

export function generateMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
