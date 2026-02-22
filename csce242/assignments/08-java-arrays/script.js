// associative arrays
const happy = {
    "Happy by Pharrell Williams":"ZbZSe6N_BXs",
    "Don't Stop Me Now by Queen":"HgzGwKwLmgM",
    "Can't Stop the Feeling by Justin Timberlake":"ru0K8uYEZWw",
    "Don't Worry Be Happy by Bobby McFerrin":"d-diB65scQU",
    "I'm Walking on Sunshine":"iPUmE-tne5U"
};

const sad = {
    "Happier Than Ever by Billie Eilish":"5GJWxDKyk3A",
    "Someone You Loved by Lewis Capaldi":"zABLecsR5UE",
    "Someone Like You by Adele":"hLQl3WQQoQ0",
    "Fix You by Coldplay":"k4V3Mo61fJM",
    "Hurt by Johnny Cash":"8AHCfZTRGiI"
};

const moodSelect = document.getElementById("mood");
const songList = document.getElementById("songs");
const video = document.getElementById("video");
const videoBox = document.getElementById("videoBox");

const showSongs = (songs) => {
    songList.innerHTML="";
    videoBox.classList.add("hidden");

    const keys = Object.keys(songs);

    for(let i=0;i<keys.length;i++){
        const title = keys[i];

        const li=document.createElement("li");
        const link=document.createElement("a");

        link.textContent=title;
        link.href="#";

        link.onclick = (e)=>{
            e.preventDefault();
            video.src=`https://www.youtube.com/embed/${songs[title]}`;
            videoBox.classList.remove("hidden");
        };

        li.appendChild(link);
        songList.appendChild(li);
    }
};

moodSelect.onchange = ()=>{
    if(moodSelect.value==="happy") showSongs(happy);
    else if(moodSelect.value==="sad") showSongs(sad);
    else{
        songList.innerHTML="";
        videoBox.classList.add("hidden");
    }
};