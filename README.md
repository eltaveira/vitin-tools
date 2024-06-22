# Vitin Tools

Este módulo fornece um conjunto de funções utilitárias para manipulação de datas, geração de IDs únicos, pausas assíncronas, escrita em logs e manipulação segura de strings JSON. Abaixo está uma descrição detalhada de cada função disponível.

## Funções

### `getDateTimeNow(): string`

Retorna a data e hora atuais no formato `YYYY-MM-DD_HHMMSSmmm`.

#### Exemplo de uso

```ts
const dateTimeNow = getDateTimeNow();
console.log(dateTimeNow); // Exemplo de saída: "2024-06-22_141530123"
```

### `getPartOfUUID(): string`

Gera uma parte do UUID (primeira parte antes do primeiro hífen).

#### Exemplo de uso

```ts
const uuidPart = getPartOfUUID();
console.log(uuidPart); // Exemplo de saída: "e4b0c"
```

### `getUniqueID(): string`

Gera um ID único combinando a data e hora atuais com uma parte do UUID.

#### Exemplo de uso

```ts
const uniqueID = getUniqueID();
console.log(uniqueID); // Exemplo de saída: "2024-06-22_141530123_e4b0c"
```

### `pause(baseMs: number): Promise<void>`

Retorna uma promessa que resolve após uma pausa assíncrona. A pausa é baseada em um valor aleatório acrescido do valor base fornecido.

#### Parâmetros

- `baseMs` (number): O valor base de milissegundos para a pausa.

#### Exemplo de uso

```ts
await pause(2000);
console.log('Pausa concluída');
```

### `writeToLog(fileName: string, content = '', ext: string): void`

Escreve o conteúdo fornecido em um arquivo de log. O nome do arquivo é gerado combinando a data e hora atuais, uma parte do UUID, e o nome do arquivo fornecido, com a extensão especificada.

#### Parâmetros

- `fileName` (string): O nome base do arquivo.
- `content` (string, opcional): O conteúdo a ser escrito no log. Padrão é uma string vazia.
- `ext` (string): A extensão do arquivo.

#### Exemplo de uso

```ts
writeToLog('app-log', 'Este é um log de exemplo', 'txt');
```

### `unsafeStringfy(obj: unknown): string`

Converte um objeto em uma string JSON sem tratamento de erros.

#### Parâmetros

- `obj` (unknown): O objeto a ser convertido em JSON.

#### Exemplo de uso

```ts
const jsonString = unsafeStringfy({ chave: 'valor' });
console.log(jsonString); // Exemplo de saída: '{"chave":"valor"}'
```

### `safeStringfy(obj: unknown): string | null`

Converte um objeto em uma string JSON com tratamento de erros. Retorna `null` em caso de erro.

#### Parâmetros

- `obj` (unknown): O objeto a ser convertido em JSON.

#### Exemplo de uso

```ts
const safeJsonString = safeStringfy({ chave: 'valor' });
console.log(safeJsonString); // Exemplo de saída: '{"chave":"valor"}'
```

### `getSizeOfString(str: string): number`

Retorna o tamanho, em bytes, de uma string.

#### Parâmetros

- `str` (string): A string para medir o tamanho.

#### Exemplo de uso

```ts
const size = getSizeOfString('Olá Mundo');
console.log(size); // Exemplo de saída: 9
```

## Configurações Padrão

### `DEFAULT_WAIT_BASE`

Constante usada na função `pause` como valor base de milissegundos.

### `DEFAULT_LOG_PATH`

Caminho padrão para armazenamento dos arquivos de log. É resolvido como `./logs` no diretório atual do processo.

## Exportações

As funções e constantes descritas acima são exportadas para uso em outros módulos:

```ts
import {
  getDateTimeNow,
  getPartOfUUID,
  getSizeOfString,
  getUniqueID,
  pause,
  safeStringfy,
  unsafeStringfy,
  writeToLog
} from 'vitin-tools';
```

## Instalação

Certifique-se de ter o Node.js instalado. Salve o código fornecido em um arquivo `.ts` e importe conforme necessário em seu projeto.

## Contribuições

Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

---

Este README fornece uma visão geral das funções utilitárias disponíveis no módulo. Cada função foi projetada para facilitar tarefas comuns no desenvolvimento com Node.js.