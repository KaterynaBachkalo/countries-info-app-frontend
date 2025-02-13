import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAvailableCountries, selectIsLoading } from "../redux/selectors";
import Loader from "../components/Loader";
import ErrorText from "../components/ErrorText";

const CountryPage = () => {
  const countries = useSelector(selectAvailableCountries);
  const isLoading = useSelector(selectIsLoading);

  return (
    <section className="container">
      <h1 className="main-title">List of available countries</h1>
      {isLoading && <Loader />}
      {!isLoading && (
        <ul className="country-list">
          {countries.length !== 0 ? (
            countries?.map((country) => (
              <Link
                to={`/country-info-page/${country.countryCode}`}
                key={country.countryCode}
                className="country-link"
              >
                <li>{country.name}</li>
              </Link>
            ))
          ) : (
            <ErrorText errorText="country list" />
          )}
        </ul>
      )}
    </section>
  );
};

export default CountryPage;
