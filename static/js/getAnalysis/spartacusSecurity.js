export const saveMonitoring = () => {
    fetch("https://ipapi.co/json/")
        .then((res) => {
            return res.json()
        }).then((json) => {
            let dt = new Date()
            let infoAccess = {
                site_name:"portifolio",
                ip: json.ip,
                user_agent: navigator.userAgent,
                site: window.location.href,
                city: json.city,
                state: json.region,
                country: json.country_name,
                org: json.org,
                time_unix:dt.valueOf()
            }
            let data = {
                infoAccess:infoAccess
            }
            //console.log(data)
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(data),
            };
            fetch(`https://reysofts.com.br/engine/sites/spartacus.php`, requestOptions)
                .then((res) => {
                    return res.json()
                })
                .then((json) => {
                }).catch((error) => {
                    console.error(error)
                })

        })
}

