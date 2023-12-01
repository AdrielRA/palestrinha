export type AddPrefixToType<T, P extends string = "$"> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K];
};
