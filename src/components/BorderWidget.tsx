import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBorderCountry, IBordersProps } from '../types';

const BorderWidget: FC<IBordersProps> = ({ borders }) => {
  return (
    <>
      <div>
        <h3 className="countryChart-title">Border countries</h3>
        <ul className="country-list info">
          {borders?.length !== 0 &&
            borders?.map((b: IBorderCountry) => (
              <Link
                to={`/country-info-page/${b.countryCode}`}
                key={b.countryCode}
                className="country-link info"
              >
                <li>{b.commonName}</li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BorderWidget;
