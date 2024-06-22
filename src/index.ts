import nodeCrypto from 'node:crypto';
import nodeFs from 'node:fs';
import nodePath from 'node:path';

function createFolderIfNotExists(folderPath: string) {
  if (!nodeFs.existsSync(folderPath)) {
    nodeFs.mkdirSync(folderPath);
  }
}

/**
 * Retorna a data e hora atual no formato 'YYYY-MM-DD_HHMMSSmmm'.
 * @returns {string} Data e hora formatadas.
 */
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

/**
 * Gera uma parte de um UUID (Identificador Único Universal).
 * @returns {string} Parte do UUID.
 */
function getPartOfUuid(): string {
  return nodeCrypto.randomUUID().split('-')[0];
}

/**
 * Gera um ID único combinando a data e hora atual com uma parte de um UUID.
 * @returns {string} ID único gerado.
 */
function getUniqueId(): string {
  return `${getDateTimeNow()}_${getPartOfUuid()}`;
}

const DEFAULT_WAIT_BASE = 1000;
/**
 * Pausa a execução por um período de tempo aleatório.
 * @param {number} baseMs - Tempo base em milissegundos.
 * @returns {Promise<void>} Promessa que resolve após a pausa.
 */
function pause(baseMs: number): Promise<void> {
  const ms = Math.ceil(Math.random() * DEFAULT_WAIT_BASE) + baseMs;
  return new Promise(resolve => setTimeout(resolve, ms));
}

const DEFAULT_LOG_PATH: string = nodePath.join(
  nodePath.resolve(process.cwd()),
  'logs'
);
/**
 * Escreve conteúdo em um arquivo de log.
 * @param {string} fileName - Nome base do arquivo de log.
 * @param {string} ext - Extensão do arquivo de log.
 * @param {string} [content=''] - Conteúdo a ser escrito no log.
 */
function writeToLog(fileName: string, ext: string, content: string = '') {
  //TODO: sanatize fileName to remove extensions and invalid characters
  const logFile = `${getDateTimeNow()}_${getPartOfUuid()}_${fileName}.${ext}`;
  const absoluteLogFilePath = nodePath.join(DEFAULT_LOG_PATH, logFile);
  createFolderIfNotExists(DEFAULT_LOG_PATH);
  nodeFs.appendFileSync(absoluteLogFilePath, `${content}\n`, {
    flag: 'a+',
    encoding: 'utf8'
  });
}

/**
 * Converte um objeto para uma string JSON de forma insegura (sem tratamento de exceções).
 * @param {unknown} obj - Objeto a ser convertido.
 * @returns {string} String JSON resultante.
 */
function unsafeStringfy(obj: unknown): string {
  return JSON.stringify(obj);
}


/**
 * Converte um objeto para uma string JSON com tratamento de exceções.
 * @param {unknown} obj - Objeto a ser convertido.
 * @returns {string | null} String JSON resultante ou null se ocorrer uma exceção.
 */
function safeStringfy(obj: unknown): string | null {
  try {
    return JSON.stringify(obj);
  } catch (_) {
    return null;
  }
}

/**
 * Retorna o tamanho de uma string em bytes.
 * @param {string} str - String cujo tamanho será calculado.
 * @returns {number} Tamanho da string em bytes.
 */
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
