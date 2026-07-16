// NOTA: O estilo padrão do React Native não suporta renderização no servidor.
// Os estilos renderizados no servidor não devem mudar entre a primeira renderização do HTML
// e a primeira renderização no cliente. Tipicamente, desenvolvedores web usam media queries CSS
// para renderizar estilos diferentes no cliente e no servidor, estes não são diretamente suportados no React Native
// mas podem ser alcançados usando uma biblioteca de estilo como Nativewind.
export function useColorScheme() {
  return 'light';
}
