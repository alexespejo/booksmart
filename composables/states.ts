export const useCounter = () => useState<number>("counter", () => 0);

export const useMessage = () => useState<string>("message", () => "");
