import { calculateHue, setRotationSpeed } from "../tools/machine.js"

export function setInfo() {
  fetch('https://api-climate-py.vercel.app/system_info')
    .then((res) => {
      return res.json()
    }).then((json) => {

      $("#systemUname").text(json.uname)
      $("#systemLang").text(json.cpu.info.python_version)

      let diskFree = json.disk.disk_free.toFixed(2)
      let diskUsed = json.disk.disk_used.toFixed(2)
      let diskTotal = json.disk.disk_total.toFixed(2)
      let diskPercent = json.disk.disk_percent

      //let ramCache = json.memory.stats.cached.toFixed(2)
      let ramPercent = json.memory.stats.percent.toFixed(1)
      let ramTotal = json.memory.stats.total.toFixed(2)
      let ramUsage = json.memory.stats.usage.toFixed(2)
      //let ramFree = json.memory.stats.free.toFixed(2)


      //    console.log("is working")
      let freq = (json.cpu.stats.frequency.used).toFixed(2)
      let freqMax = json.cpu.stats.frequency.max
      let percent = json.cpu.stats.frequency.percent
      let infoCpu = `${json.cpu.info.brand_raw} ${json.cpu.info.count}x(${json.cpu.info.arch})`


      let percentCpu = json.cpu.stats.frequency.percent

      let temperatureCurrent = json.temperature.stats.cpu_temperature
      if (json.temperature.stat) {
        let temperatureMax = json.temperature.stats.cpu_temperature_max
        let temperatureCriticalPercent = (temperatureCurrent / temperatureMax) * 100
        $("#tempSensorCurrent").text(`${temperatureCurrent}ºC`)
        $("#tempSensorMax").text(`${temperatureMax}ºC`)
        $("#tempPercentCritical").text(`${temperatureCriticalPercent.toFixed(1)}%`)
        $("#tempSensorCurrentS").text(`${temperatureCurrent}ºC`)
        let colorBarTemp = document.getElementById("colorBarTemp")
        let hueTemp = calculateHue(temperatureCriticalPercent)
        colorBarTemp.style.backgroundColor = `hsl(${hueTemp},100%,50%)`
        colorBarTemp.style.width = (temperatureCriticalPercent - 10) + "%"
      }
      let speed = 1 - percentCpu / 100

      let colorBarRam = document.getElementById("colorBarRam");
      let hueRam = calculateHue(ramPercent);
      colorBarRam.style.backgroundColor = "hsl(" + hueRam + ", 100%, 50%)";
      colorBarRam.style.width = (ramPercent - 10) + "%";

      let colorBarDisk = document.getElementById("colorBarDisk");
      let hueDisk = calculateHue(diskPercent);
      colorBarDisk.style.backgroundColor = "hsl(" + hueDisk + ", 100%, 50%)";
      colorBarDisk.style.width = (diskPercent - 10) + "%";

      let colorBarCpu = document.getElementById("colorBarCpu");
      let hue = calculateHue(percentCpu);
      colorBarCpu.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
      colorBarCpu.style.width = (percentCpu - 10) + "%";



      setRotationSpeed(speed)

      $("#cpuFreq").text(`${freq}MHz`)
      $("#cpuFreqMax").text(`${freqMax}MHz`)
      $("#cpuPercent").text(`${percent}%`)
      $("#cpuPercentS").text(`${percent}%`)
      $("#infoCpu").text(infoCpu)
      /* 
              $("#tempSensorCurrent").text(`${temperatureCurrent}ºC`)
              $("#tempSensorMax").text(`${temperatureMax}ºC`)
              $("#tempPercentCritical").text(`${temperatureCriticalPercent.toFixed(1)}%`)
              $("#tempSensorCurrentS").text(`${temperatureCurrent}ºC`) */



      $("#ramPercent").text(`${ramPercent}%`)
      //$("#ramCache").text(`${ramCache}GB`)
      $("#ramTotal").text(`${ramTotal}GB`)
      $("#ramUsage").text(`${ramUsage}GB`)
      //$("#ramFree").text(`${ramFree}GB`)

      $("#diskUsed").text(`${diskUsed}GB`)
      $("#diskTotal").text(`${diskTotal}GB`)
      $("#diskPercent").text(`${diskPercent}%`)

    })
    .catch((error) => {
      console.log("error:", error)
    })
}





