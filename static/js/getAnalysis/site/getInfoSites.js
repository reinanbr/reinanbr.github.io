export function getInfoSites() {

    fetch('https://reysofts.com.br/apis/engine.php')
        .then((res) => {
            return res.json()
        })
        .then((json)=>{
       
            for(let site in json){
                let access = json[site].access
                $(`#${site}_access`).text(`${access.count_access}`)
                $(`#${site}_accessPerDay`).text(`${access.count_access_per_day}`)
            }
        })
        .catch((e) => {
           console.log('error: ', e)
        
        })
}