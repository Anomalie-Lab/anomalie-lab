export interface ContextPreferencesT {
  lang: string;
  toggleLang: (value: string) => void;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
