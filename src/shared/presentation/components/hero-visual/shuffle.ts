// Utilidad de barajado para la rotación del editor live.
// Fisher-Yates con generador inyectable (testeable y determinista en tests).
export function shuffledIndices(
  count: number,
  rand: () => number = Math.random
): number[] {
  const order = Array.from({ length: count }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

// Baraja evitando que el primer elemento sea `exclude` (no repetir el
// fragmento anterior al rebarajar). Si count <= 1, devuelve [0].
export function shuffledExcludingFirst(
  count: number,
  exclude: number,
  rand: () => number = Math.random
): number[] {
  const order = shuffledIndices(count, rand);
  if (count > 1 && order[0] === exclude) {
    const swapWith = 1 + Math.floor(rand() * (count - 1));
    [order[0], order[swapWith]] = [order[swapWith], order[0]];
  }
  return order;
}
