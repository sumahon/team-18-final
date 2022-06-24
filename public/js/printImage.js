//const { data } = require("jquery")

function printIMG(channelName) {
    
    console.log(channelName)
    $("p").append("<table>")
    $("p").append("<tbody>")
    $("p").append("<tr>")
    $("p").append(`<th rowspan='5' class="printTable">${channelName}</th>`)
    
    $("p").append(`<td><${channelName}></td>`)
    for (j = 0; j < maxresult; j++) {
        $(`${channelName}`).append("<td>")
        console.log(channelName)
        data = VideoContent[channelName]
        //    data = localStorage.getItem(`videoImgID${i}`)
        console.log(data)
        console.log(data[j])
        //    console.log(localStorage.getItem(`IDplaylist${i}`))
        webside = "https://www.youtube.com/watch?v=" + data[j].ID
        //    localStorage.getItem(`IDplaylist${i}`)
        console.log(webside)
        $(`${channelName}`).append('<div><a href=' + webside + '><img src=' + data[j].cover + ' width=150 height=100></img>' + data[j].title + '</a></div>')
        $(`${channelName}`).append("</td>")
        //$("p").append('<a href=' + webside + '></a>')
        
    }
    $("p").append("</tr>")
    $("p").append("</tbody>")
    $("p").append("</table>")
    $("p").append('-----------------------其他頻道-------------------')


}