import {getAllLibsInfo} from './getAnalysis/libs/getLibsInfo.js';
import { getInfoSites } from './getAnalysis/site/getInfoSites.js';
import { getStatus } from './getAnalysis/site/getStatusSites.js';

//libs
setInterval(getAllLibsInfo,1000)


//sites
setInterval(getStatus,1000)
setInterval(getInfoSites,1000)