

export function getAllLibsInfo(){
fetch('https://reysofts.com.br/apis/engine/libs/read_analisys_lib.php')
.then((res)=>{
    return res.json()
}).then((json)=>{
    // console.log(json)
    for(let lib in json){
        // console.log(json[lib])
        let countAccess = json[lib].count_access
        let countAccessPerDay = json[lib].count_access_per_day
        // console.log(countAccess)
        $(`#${lib}_CountAccess`).text(countAccess)
        $(`#${lib}_CountAccessDay`).text(countAccessPerDay)
    }
})
}
//static/js/getAnalysis/libs/getLibsInfo.js