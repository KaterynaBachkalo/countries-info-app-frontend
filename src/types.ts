export interface IAvailableCountries {
  countryCode: string;
  name: string;
}

export interface IPopulationCounts {
  year: string;
  value: string;
}

export interface IBorderCountryMain {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: IBorderCountry[] | null;
}

export interface IBorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}

export interface IState {
  availableCountries: IAvailableCountries[];
  borders: IBorderCountryMain | null;
  population: IPopulationCounts[];
  flagUrl: string | null;

  isLoading: boolean;
  error: unknown | null;
}

export type AvailableCountriesPayload = IAvailableCountries[];

export interface InfoPayload {
  borders: IBorderCountryMain | null;
  population: IPopulationCounts[];
  flagUrl: string;
}

export interface ICountryChartProps {
  population: IPopulationCounts[];
}

export interface IBordersProps {
  borders: IBorderCountry[] | null;
}

export interface IInfoProps {
  flagUrl: string | null;
  title?: string;
  countryCode: string;
}

export interface IThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
