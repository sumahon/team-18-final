function updateChannelID(channelName, channelID) {
    console.log(channelName,channelID)
    previewChannel(channelID)
    getPlaylistID(channelName,channelID)
    localStorage.setItem(channelName, channelID)
    console.log("已加入新的頻道")
//    listOfVideoID.push("testother")
    console.log(listOfVideoID)
}

function deleteChannelID(channelName){

    localStorage.removeItem(channelName)
    console.log("已刪除舊有頻道")
}
