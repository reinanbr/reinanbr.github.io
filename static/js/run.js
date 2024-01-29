import { setInfo } from './getAnalysis/getInfoCpu.js';
import { getInfoGit, getInfoPortfolio } from './getAnalysis/gitInfo.js';
import {getAllLibsInfo} from './getAnalysis/libs/getLibsInfo.js';
import { getInfoSites } from './getAnalysis/site/getInfoSites.js';
import { getStatus } from './getAnalysis/site/getStatusSites.js';
import { saveMonitoring } from './getAnalysis/spartacusSecurity.js';

//libs
getAllLibsInfo()
setInterval(setInfo, 2900)
getInfoGit()
//sites
setInterval(getStatus,1200)
getInfoSites()
setInfo()
getInfoPortfolio()
/* saveMonitoring() */