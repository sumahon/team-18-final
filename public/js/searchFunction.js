function previewChannel(channelID) {
    $("prev").empty()
    var apikey = "AIzaSyC6rSpeISjDmtZxKP3vJOoEXE0lXhVoh1M";
    var channelWeb = "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=" + channelID + "&key=" + apikey
    $.ajax({
        url: channelWeb,
        dataType: 'json',
        success: function (data) {
            //result.html(data.results[0].email)
            console.log(channelWeb);
            console.log(data);
            console.log(Object.keys(data))
            console.log(Object.values(data))
            listdata = Object.values(data)
            console.log(listdata)
            //取得頻道名字
            
            VdTitle=(listdata[3][0].snippet.localized.title)
            console.log(VdTitle)
            VdCover=(listdata[3][0].snippet.thumbnails.medium.url)
        //    playlist = (listdata[3][0].contentDetails.relatedPlaylists.uploads)
            console.log(VdCover)
            console.log(`preview`)
            $("prev").append(`<div><img src=${VdCover} width=100 height=100></img>${VdTitle}</div>`)
        }
    })
}

function searchChannel(searchName) {
    $("search").empty()
    var apikey = "AIzaSyC6rSpeISjDmtZxKP3vJOoEXE0lXhVoh1M";
    var searchWeb = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&key=" + apikey + "&maxResults="+maxresult +"&q=" +searchName
    $.ajax({
        url: searchWeb,
        dataType: 'json',
        success: function (data) {
            //result.html(data.results[0].email)
            console.log(searchWeb);
            console.log(data);
            console.log(Object.keys(data))
            console.log(Object.values(data))
            listdata = Object.values(data)
            console.log(listdata)
            //取得頻道名字
            
            //VdTitle=(listdata[3][0].snippet.localized.title)
            for (i =0;i<maxresult;i++){
                ChName=(listdata[5][i].snippet.channelTitle)
                ChCover=(listdata[5][i].snippet.thumbnails.medium.url)
                ChID=(listdata[5][i].id.channelId)
                $("search").append(`<tr><td><img src=${ChCover} width=100 height=100></img>${ChName}</td><td>channelID：${ChID}</td></tr>`)
    /*        console.log(VdTitle)
            VdCover=(listdata[3][0].snippet.thumbnails.medium.url)
        //    playlist = (listdata[3][0].contentDetails.relatedPlaylists.uploads)
            console.log(VdCover)
            console.log(`preview`)
            $("prev").append(`<div><img src=${VdCover} width=100 height=100></img>${VdTitle}</div>`)
            */
        }
    }
    })
}