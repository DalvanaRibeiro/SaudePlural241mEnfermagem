// Essa função é exclusiva da web, pois a renderização nativa não oferece suporte atualmente à renderização no servidor (ou em tempo de compilação).
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  return client;
}
