export const useCounter = () => useState<number>("counter", () => 0);
export const useCartCounter = () => useState<number>("cartCounter", () => 0);

export const useSearchBarInput = () => useState<string>("message", () => "");
export const useQueryType = () =>
 useState<string>("queryType", () => {
  return "hello";
 });
