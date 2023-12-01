export interface IUseHome {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export interface IHomeContainerStyle extends Pick<IUseHome, "theme"> {}
