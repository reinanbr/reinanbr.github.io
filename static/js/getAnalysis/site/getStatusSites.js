export function getStatus() {
    let todayAfter = new Date()
    fetch('https://cardapioif.reysofts.com.br/ping.php')
        .then((res) => {
         //   console.log(res)
            let todayNow = new Date()
            let ping = todayNow.getMilliseconds() - todayAfter.getMilliseconds()
            let ok = res.ok ? 'ok' : 'error'
            let site_name = 'cardapio'
            $(`#${site_name}_statusCode`).text(`${res.status} ${ok}`)
            $(`#${site_name}_statusImg`).attr('src', 'assets/img/online2.gif')
            $(`#${site_name}_statusPing`).text(`ping: ${Math.abs(ping)}ms`)
        })
        .catch((e) => {
           // console.log('error: ', e)
            let ok = res.ok ? 'ok' : 'error'
            let site_name = 'cardapio'
            $(`#${site_name}_statusCode`).text(`${res.status} ${ok}`)
            $(`#${site_name}_statusImg`).attr('src', 'assets/img/offline.gif')
        })
}