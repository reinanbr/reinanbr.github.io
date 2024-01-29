

export function getAllLibsInfo(){
fetch('https://reysofts.com.br/engine/libs/show_info_libs_access.php')
.then((res)=>{
    return res.json()
}).then((json)=>{
    // console.log(json)
    let info_libs = json.info_libs

    for(let lib of Object.values(info_libs)){
        console.log(lib)
        let imgLib = lib.info_work.logo ? `<img style="border-radius:20px" src="${lib.info_work.logo}" width="30px" height="30px">` : ''
        //console.log(countAccess)
        $("#contentLibs").append(`
        <div class="card screen_card  row-mt-4 mt-4"  style=" margin-left:10px; width: 20.5rem;">
      <h3 style="margin-bottom:10px;margin-left:10px">${imgLib}${lib.info_work.title}</h3>
      <p style="margin-bottom:0"><small><i>Biblioteca lançada no dia ${lib.info_work.date_published}<br><a href="${lib.info_work.link}">${lib.info_work.link}</a></i></small></p>
      <hr style="margin-bottom:0">
      <div class="row" style=" width: 20rem;text-align:center">

        <div class="card shadow-lg card col-sm mt-3 row-mt mb-2" style="margin-left:18px; width: 8rem;text-align:center">
          <h4 id="dreams_CountAccess">${lib.count_access}</h4>
          <h6>Acessos</h6>
        </div>
        <div class="card shadow-lg card  col-sm mt-3 row-mt mb-2" style="margin-left:18px; width: 8rem;text-align:center">
          <h4 id="dreams_CountAccessDay">${lib.access_by_day}</h4>
          <h6>Acessos/dia</h6>
        </div>
        <p><small><small><i>Contagem iniciada no dia ${lib.info_work.date_init_count}</i></small></small></p>
      </div>

    </div>`)
    }
})
}
//static/js/getAnalysis/libs/getLibsInfo.js