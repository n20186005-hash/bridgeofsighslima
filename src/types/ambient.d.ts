// Declaración mínima del módulo core "https" para el frontmatter de Astro.
// Astro (compilación/check) ya lo resuelve con @types/node; esta declaración
// garantiza que el lenguaje del editor (lenguaje de Astro) también lo entienda
// sin depender de su resolución de "types".
declare module 'https' {
  export interface RequestOptions {
    headers?: Record<string, string | undefined>;
  }
  export interface IncomingMessageLike {
    statusCode?: number;
    setEncoding(encoding: string): void;
    on(event: string, listener: (chunk: any) => void): this;
    resume(): void;
  }
  export interface ClientRequestLike {
    on(event: string, listener: () => void): this;
    setTimeout(ms: number, listener: () => void): this;
    destroy(error?: Error): void;
  }
  export function get(
    url: string,
    options: RequestOptions,
    callback: (res: IncomingMessageLike) => void
  ): ClientRequestLike;
}
