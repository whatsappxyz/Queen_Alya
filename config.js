//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajlsczC1FuEGnm8cb2R";
global.website = process.env.GURL || "https://chat.whatsapp.com/GOyG2XOTpd04WQmef6nTBo";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/876447705855fc88d0b21.jpg";
global.devs = "916260273863";
global.sudo = process.env.SUDO || "916260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5zMnhqYmRJT2VhYUJNdmt6N2lKTGlrOVljbXdWampyS3NYSDBxWWhtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk51KzBWcndjcnh3dVF1ODM0aHJydnc3alJXNWRFM2dNYkNwZzlJWnExVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRDF5TmpDNmFxUGs1bmNRNUxRNCtJMTlIUjVqRE9QcExqS3Iyckp0aWtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTGJkYnNLZzE5Z0NRMjZsUkkyMVNSOVZpNVdSNnFmOGh2WHBUakJiWGpRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNORUFOckl6Wm9KOGZRamRjTTB4dXo1U1ZPODM3VHltMVZiZUhaYUkzR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRjVGM1R1dabkxrNmREOG8xR1BCbTkvMTU3WDVoMDJQU05aSFBMdm42M0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdjbzFYZjhHZTVvRWYvb01DMldWRUh2Ny9ialZxV2oreUJMVmx1SVIyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGNmcm1VNHhjbUNzMEVBTXMvS3ZVQ3NwSkcrNEQydTQ1MkhRYXIwTzBSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNuZUNaeWt0SXMxOVJqRnkxNXBUbUYrMHc5L1lmK0V0dEVHQWVBOG1oNHRkcVR5ODZaa05CZEtFaUhsQ1FlczBuODV2TkJVZm10ZEV5OHVpa09jWkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJqWTdmelNuTXg2Ry9IRzVkM2RzWnVmSS9WZmxPN1JucFpWSHcySlNEcjJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLc1pNN3BLbFJqR1hoSV9mM3AxX1p3IiwicGhvbmVJZCI6ImQ0MzdmNjNjLTYyNmEtNGUxMy1hZTEyLTRmNDAyYjQ3MTI1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiMjhWdzFMS2FLQVhxYTE5UksrQk5ZOTlTaDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjVNWmVqZkkrQW9MZ2xMZDZjdzNUdkF5aE93PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkzQU4yQUVXIiwibWUiOnsiaWQiOiI5MTYyNjAyNzM4NjM6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2as/Cdmqog8J2QkvCdmq7wnZCU8J2aqfCdmq7wnZqr8J2asyDwnZCK8J2QlPCdmrPwnZqr8J2aqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUtCNFBRREVQNkRvYlVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQVczQWJLOVhjNTV2UFYyL3VkdkRoMkwwWklJV3NFQktud0E4TEo4Sm4wUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOTRJMXJSdXpqWHRwb2hLQjNGQ3JTdHAya3NTUlB4ejgwd3V5eE1VRGVZd0VCWTB3cVZFQTRhWXV1YWczcWV2Qmp2Snh1cXlpMHpsUWplTVRxVWFmQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkhVTUxCc3hiK1hzRHJiWnF4NytNQTI0VFBjS1paWDdiYkM4ZExuTDAvTTVWYWlUMkZ6ajNOaGxmbmJHYzdoYStEQmFXR25lcGpWN1E3LzJGblFKYUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjYwMjczODYzOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFGdHdHeXZWM09lYnoxZHY3bmJ3NGRpOUdTQ0ZyQkFTcDhBUEN5ZkNaOUUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzMDI5ODcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWdnIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING-SHUBHAM™`",
  author: process.env.PACK_AUTHER || "KING_SHUBHAM",
  packname: process.env.PACK_NAM 57E || "A L Y A",
  botname: process.env.BOT_NAME || "KING_MR_SHUBHAM💕",
  ownername: process.env.OWNER_NAME || "MR_SHUBHAM🕊️🔊",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
