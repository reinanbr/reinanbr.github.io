export function getInfoSites() {

    fetch('https://reysofts.com.br/engine/sites/show_info_sites_access.php')
        .then((res) => {
            return res.json()
        })
        .then((json)=>{
           // console.log(json)
           console.log(json)

            for(let siteName in json.info_sites){
                console.log(siteName)
                let siteInfo = json.info_sites[siteName]
                console.log(siteInfo)

                $("#contentSites").append(`<div class="card screen_card" " style=" margin-left:10px; width: 20.5rem;">
                <h3 style="margin-bottom:0;margin-left:10px"><img style='border-radius:20px'
                    src='${siteInfo.info_work.logo}' width='30px' height='30px'>${siteInfo.info_work.title}</h3>
                <p style="margin-bottom:0"><small><i>Site publicado no dia ${siteInfo.info_work.date_published}</i></small> <small><span
                      style="color:grey"> status:<span id="cardapio_statusCode"></span><img id="cardapio_statusImg" width="25px"
                        src="assets/img/offline.gif" /><br /><span id="cardapio_statusPing"></span></small>
                  <br /><small><i><a href="${siteInfo.info_work.link}">${siteInfo.info_work.link}</a></i></small>
                </p>
                <hr />
                <div class="row" style=" width: 20rem;text-align:center">
        
                  <div class='card shadow-lg card col-sm mt-3 row-mt mb-2'
                    style="margin-left:18px; width: 8rem;text-align:center">
                    <h4 id="cardapioif_access">${siteInfo.access.count_access}</h4>
                    <h6>Acessos</h6>
        
                  </div>
                  <div class='card shadow-lg card  col-sm mt-3 row-mt mb-2'
                    style="margin-left:18px; width: 8rem;text-align:center">
                    <h4 id="cardapioif_accessPerDay">${siteInfo.access.access_by_day}</h4>
                    <h6>Acessos/dia</h6>
                  </div>
        
                </div>
                <div class="row" style=" width: 20rem;text-align:center">
        
                  <div class='card shadow-lg card col-sm row-mt mt-3 mb-2'
                    style="margin-left:18px; width: 8rem;text-align:center">
                    <h4>${siteInfo.devices.len_devices}</h4>
                    <h6>Dispostivos</h6>
                  </div>
                  <div class='card shadow-lg card  col-sm  row-mt mt-3 mb-2'
                    style="margin-left:18px; width: 8rem;text-align:center">
                    <h4>${siteInfo.access.days_count}</h4>
                    <h6>Dias Online</h6>
                  </div>
                  <p><small><small><i>Contagem iniciada no dia 20 Out 2023</i></small></small>
                    <br><small><small><i><a href='/calendar.html?cardapioif'>Ver Calendário de Acessos</a></i></small></small>
                  </p>
        
                </div>
              </div>`)
            }
        })
        .catch((e) => {
           console.log('error: ', e)
        })
}