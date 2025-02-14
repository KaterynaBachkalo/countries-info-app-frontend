import { useDispatch, useSelector } from 'react-redux';
import {
  selectAvailableCountries,
  selectBorders,
  selectFlagUrl,
  selectIsLoading,
  selectParentBordersName,
  selectPopulation,
} from '../redux/selectors';
import { useEffect } from 'react';
import { AppDispatch } from '../redux/store';
import { fetchCountryInfo } from '../redux/operations';
import { Link, useParams } from 'react-router-dom';
import CountryChart from '../components/CountryChart';
import Loader from '../components/Loader';
import BorderWidget from '../components/BorderWidget';
import BaseCountryInfo from '../components/BaseCountryInfo';
import ErrorText from '../components/ErrorText';

const InfoPage = () => {
  const countries = useSelector(selectAvailableCountries);
  const flagUrl = useSelector(selectFlagUrl);
  const borders = useSelector(selectBorders);
  const parentBorderName = useSelector(selectParentBordersName);
  const population = useSelector(selectPopulation);
  const isLoading = useSelector(selectIsLoading);

  const { countryCode } = useParams();

  const country =
    countryCode && countries?.filter((c) => c.countryCode === countryCode);

  const title =
    country && country.length !== 0 ? country[0].name : parentBorderName;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (countryCode) dispatch(fetchCountryInfo(countryCode));
  }, [dispatch, countryCode]);

  return (
    <section className="container">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <Link to="/" className="country-link info back">
            Back to the country list
          </Link>

          {country ? (
            <BaseCountryInfo
              flagUrl={flagUrl}
              title={title}
              countryCode={countryCode}
            />
          ) : (
            <ErrorText errorText="country" />
          )}

          <div className="info-main">
            {population.length !== 0 ? (
              <CountryChart population={population} />
            ) : (
              <ErrorText errorText="population" />
            )}

            {borders?.length !== 0 ? (
              <BorderWidget borders={borders ?? null} />
            ) : (
              <ErrorText errorText="border countries" />
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default InfoPage;
