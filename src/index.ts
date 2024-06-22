import nodeCrypto from 'node:crypto';
import nodeFs from 'node:fs';
import nodePath from 'node:path';

function getDateTimeNow(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
  return `${year}-${month}-${day}_${hours}${minutes}${seconds}${milliseconds}`;
}

function getPartOfUuid() {
  return nodeCrypto.randomUUID().split('-')[0];
}

function getUniqueId(): string {
  return `${getDateTimeNow()}_${getPartOfUuid()}`;
}

const DEFAULT_WAIT_BASE = 1000;
function pause(baseMs: number) {
  const ms = Math.ceil(Math.random() * DEFAULT_WAIT_BASE) + baseMs;
  return new Promise(resolve => setTimeout(resolve, ms));
}

const DEFAULT_LOG_PATH: string = nodePath.join(
  nodePath.resolve(process.cwd()),
  'logs'
);
function writeToLog(fileName: string, ext: string, content = '') {
  // - [ ] sanatize fileName
  const logFile = `${getDateTimeNow()}_${getPartOfUuid()}_${fileName}.${ext}`;
  const absoluteLogFilePath = nodePath.join(DEFAULT_LOG_PATH, logFile);

  nodeFs.appendFileSync(absoluteLogFilePath, `${content}\n`, {
    flag: 'a+',
    encoding: 'utf8'
  });
}

function unsafeStringfy(obj: unknown) {
  return JSON.stringify(obj);
}

function safeStringfy(obj: unknown) {
  try {
    return JSON.stringify(obj);
  } catch (_) {
    return null;
  }
}

function getSizeOfString(str: string): number {
  return new Blob([str]).size;
}

export {
  getDateTimeNow,
  getPartOfUuid,
  getSizeOfString,
  getUniqueId,
  pause,
  safeStringfy,
  unsafeStringfy,
  writeToLog
};
