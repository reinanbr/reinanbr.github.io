export function getInfoGit(){
    fetch('https://api.github.com/users/reinanbr')
    .then((res)=>{
        return res.json()
    }).then((json)=>{
        $("#repoOpenGit").text(json.public_repos)
        $("#followingGit").text(json.following)
        $("#followersGit").text(json.followers)
    })
    .catch((error)=>{
        console.error(error)
    })
}

export function getInfoPortfolio() {
    fetch("https://reysofts.com.br/engine/portfolio.php")
      .then((res) => {
        return res.json()
      }).then((json) => {
        $("#countProjects").text(json.projects)
        $("#countAllAccess").text(json.access)
        $("#countAccessByDay").text(json.access_by_day)
      })
  }

