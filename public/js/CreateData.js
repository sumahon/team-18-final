//規則 https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=[playlist ID]&key=[apikey]
//https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=[playlist的id]&key=[API key]&maxResults=[maxresult]
//document.cookie=newCookie;

var request = new XMLHttpRequest();
var channelID;

//var targ = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id="+channelID+"&key=" +apikey ;

//console.log(targ);
//console.log(playlistWeb);

function getPlaylistID(channelName, channelID) {
    var apikey = "AIzaSyC6rSpeISjDmtZxKP3vJOoEXE0lXhVoh1M";
    var channelWeb = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=" + channelID + "&key=" + apikey
    $.ajax({
        url: channelWeb,
        dataType: 'json',
        success: function (data) {
            //result.html(data.results[0].email)
            console.log(channelID);
            console.log(data);

            console.log(Object.keys(data))
            console.log(Object.values(data))
            lista = Object.values(data)
            //取得影片ID
            console.log((lista[3][0].contentDetails.relatedPlaylists.uploads))
            playlist = (lista[3][0].contentDetails.relatedPlaylists.uploads)
            getVideo(channelName, playlist)
            console.log(`OK`)
            //              localStorage.setItem(`IDplaylist${i}`, playlist[i].contentDetails.videoId);

        }
    })
}

function getVideo(channelName, playlist) {

    var listOfVideoID = [], listOfVideoTitle = [], listOfVideoCover = []
    console.log(playlist)
    //    var playlist = "UU5CwaMl1eIgY8h02uZw7u8A";
    var apikey = "AIzaSyC6rSpeISjDmtZxKP3vJOoEXE0lXhVoh1M";

    var playlistWeb = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=" + playlist + "&key=" + apikey + "&maxResults=" + maxresult;
    console.log(playlistWeb)
    // alert("[JavaScript-基本類]按鈕的使用onClick-點擊按鈕時呼叫函數" + "<br>")
    console.log("tested")
    //    getPlaylistfunction(playlistWeb)

    $.ajax({
        url: playlistWeb,
        dataType: 'json',
        success: function (data) {
            //result.html(data.results[0].email)
            console.log("yeah");
            console.log(data);
            //console.log(typeof(data));
            //JJ=JSON.stringify(data);
            //console.log(JJ)
            console.log(Object.keys(data))
            console.log(Object.values(data))
            playlist = Object.values(data)[3]
            //取得影片ID
            for (i = 0; i < maxresult; i++) {
                //  console.log(Object.keys(data)[3])

                //  console.log(Object.values(lista))
                console.log((playlist[i].id))
                console.log((playlist[i].contentDetails.videoId))
                console.log((playlist[i].snippet.thumbnails.medium.url))

                console.log(`第${i}次進行`)
                listOfVideoID.push(playlist[i].contentDetails.videoId)
                listOfVideoCover.push(playlist[i].snippet.thumbnails.medium.url)
                listOfVideoTitle.push(playlist[i].snippet.title)


                //    localStorage.setItem(`IDplaylist${i}`, playlist[i].contentDetails.videoId);
            }
            console.log(channelName)
            console.log(listOfVideoID)
            console.log(listOfVideoCover)
            console.log(listOfVideoTitle)
            setVideoContent(channelName, listOfVideoTitle, listOfVideoID, listOfVideoCover, maxresult)
            //取得影片縮圖
            /*  for (i = 0; i < 3; i++) {
                  //  console.log(Object.keys(data)[3])
  
                  //  console.log(Object.values(lista))
                  console.log((playlist[i].snippet.thumbnails.medium.url))
                  console.log(`第${i}次進行`)
              //    listOfVideoCover.push(playlist[i].snippet.thumbnails.medium.url)
              //    localStorage.setItem(`videoImgID${i}`, playlist[i].snippet.thumbnails.medium.url);
              }
              */
        }
    })
};





