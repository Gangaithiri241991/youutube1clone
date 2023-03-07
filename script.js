const VideoCardContainer=document.querySelector(".video-container")
let api_key="AIzaSyCY0dDMxOa_HX3oYLXtMkjdSifJIeDB0Zk";
let video_http=" https://www.googleapis.com/youtube/v3/videos?";
let channel_http="https://www.googleapis.com/youtube/v3/channels?";
fetch(video_http + new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart:'mostPopular',
    maxResults:50,
    regionCode:'IN',
}))
.then(res => res.json())
.then(data => {
    //console.log(data);
    data.items.forEach(item=>{
        getChannelIcon(item);
    })
})
.catch(error=> console.log(error));
const getChannelIcon=(video_data)=>{
fetch(channel_http + new URLSearchParams({
     key:api_key,
     part:'snippet',
     id:video_data.snippet.channelId
}))
.then(res=>res.json())
.then(data=>{
    video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
    //console.log(video_data);
    makeVideoCard(video_data);
})
}
const makeVideoCard=(data)=>{
     VideoCardContainer.innerHTML +=`
     
     <div class="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
     
       <img src="${data.snippet.thumbnails.high.url}" class="thumbnails"></a>
       <div class="content">
         <img src="${data.channelThumbnail}"class="channel-icon" alt="">
         <div class="info">
      <h4 class="title">${data.snippet.title}</h4>
      <p class="channel-name"${data.snippet.channelTitle}></p>
      
      
      </div>
         </div>
       </div> `
}
const searchInput=document.querySelector('.search-bar');
const searchbtn=document.querySelector('.search-btn');
let searchLink="https://www.youtube.com/results?search_query=";
searchbtn.addEventListener('click',() => {
    if(searchInput.Value.length){
        location.href=searchLink + searchInput.value;
    }
})
/*<div class="video">
       <img src="./thum1.jpg" class="thumbnails">
       <div class="content">
        <img src="./user2.jpg"class="channelicon">
        <div class="info">
            <h4 class="title">youtube clone|create working youtube</h4>
            <p  class="channel-name">modern web</p>
        </div>

       </div>
        </div>*/