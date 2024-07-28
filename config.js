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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUl1RG8rektoV2VXc1hqUkZJL295VHBjTTZNTGVNOUZKZ3NoeVA5RFFYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjZTb3BpSmZVbjdBbU5Hc3RQSXpRaG8zbjAyVE54R3Nub2hTM3NxV0pUbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SlBKZ0dQUkRnblRhVW1GZ1VDSXRiUThZc3ZFTWRlSnp4NGdNNVJkWWtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5N1RGZTBFNEVuRis5Y0JnRk9temV2KzNsZUZxMDBudmE3MEFWd2kyWUZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFZnczN25hOE1TR0RxSEZsa205U1ZNQVJ3T3V0clhPcDA5NlBCVVV1Vmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRtakxneWhFT0R4d2lGd3lLT0pWQjA3STNENEViOEp4by9zZHJBNnRLaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tJR1RrL200TVRJQ2ZlY1FmM3kvWVpERFAzNGx5YzZuR0dLSGFCZjBYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamIxclJLMEh3d0tPZVlRUjlxUEpQL0pMaXVadU5OcTNoSld3bGRUTy9Bcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRKMDlUcDdranVvNm1BVDFPQjBqZTZ3VkZNaXBOaEdYUTdkSGk5TVdBYWRDRHIrby95OW1RUU5EY3AwNjdtajZPTW5adFUveFgvZVZKd2RzK0tadGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IjRSRXZGTlhZTjZ3Y0J1YmtmRTlaNy9ISTN6YzZjQTVXSkpCN29Zd0w0Kzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRQd2VCZXpOU3MtejRkTlAzbHBlU1EiLCJwaG9uZUlkIjoiNjI0NzM4N2EtZGY1OS00ZDY0LThiNTEtYWJjMjkwZWM2ZTdiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVZdEc5cUcvZmJjQXFoOW1BdUczSDI3c1hRTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySHZhMjFIVndGcisvZmRZdVpXYWdMZjJkREE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEpNWFpWNDQiLCJtZSI6eyJpZCI6IjkxNjI2MDI3Mzg2MzoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqz8J2aqiDwnZCS8J2arvCdkJTwnZqp8J2arvCdmqvwnZqzIPCdkIrwnZCU8J2as/CdmqvwnZqqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJS0I0UFFERUsyaG1yVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBVzNBYks5WGM1NXZQVjIvdWR2RGgyTDBaSUlXc0VCS253QThMSjhKbjBRPSIsImFjY291bnRTaWduYXR1cmUiOiJjNGN5VEQ3clNuVTBlY3pvWDgrOFlSOHVuR3BicEdnTFFPV1d0QVdyMkY4YzFRY25raEYrYWpuQURvUTJ5azd1MWU1WDJuRGdxT1dUSDBPZ2R2R0JDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib2Exc1JETjRUTWR3K3VmdCsxWTlpOGQ1eG9zdkhpeEh1ZG9VT29wL1AzdDdQMkxhSUNrdU9mcU5VVThoL0pzc1hoa000SXg5WElGUmVXNmcwR1R2amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyNjAyNzM4NjM6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUZ0d0d5dlYzT2ViejFkdjduYnc0ZGk5R1NDRnJCQVNwOEFQQ3lmQ1o5RSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjE5MjA1OH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
