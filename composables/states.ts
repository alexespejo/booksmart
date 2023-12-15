export const usePasscode = () => useState<number>("counter", () => 42069);

export const useCounter = () => useState<number>("counter", () => 0);

export const useCartCounter = () => useState<number>("cartCounter", () => 0);
export const useCartTotal = () => useState<number>("cartTotal", () => 0);
export const useCart = () => useState<String[]>("cart", () => []);

export const useSearchBarInput = () => useState<string>("message", () => "");
export const useQueryType = () =>
 useState<string>("queryType", () => {
  return "hello";
 });

export const useGuestDemo = () => useState<boolean>("user", () => false);
