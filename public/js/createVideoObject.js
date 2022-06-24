
function setVideoContent(channelName, videoTitle, videoID, videoCover, maxlength) {
    VideoContent["name"] = channelName

    console.log(typeof (channelName))
    for (i = 0; i < maxlength; i++) {
        VideoContent[channelName] = [i]
    }
    for (i = 0; i < maxlength; i++) {
        console.log(videoTitle[i])
        VideoContent[channelName][i] = { "title": videoTitle[i], "ID": videoID[i], "cover": videoCover[i] }
    }

    console.log(videoTitle[1])
    console.log(VideoContent)
    console.log("產生OBJECT")

}