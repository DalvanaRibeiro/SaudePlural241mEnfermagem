import React from 'react';

// "useEffect" não é invocado durante a renderização do servidor, o que significa que
// Podemos usar isso para determinar se estamos no servidor ou não.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  const [value, setValue] = React.useState<S | C>(server);
  React.useEffect(() => {
    setValue(client);
  }, [client]);

  return value;
}
