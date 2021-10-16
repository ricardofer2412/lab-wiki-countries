import React from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';
export default function CountriesList() {
  console.log(countries);
  return (
    <div>
      <table class="table">
        <tbody>
          {countries.map((country, i) => (
            <tr>
              <td>
                <Link className="country-link" to={`/details/${country.cca3}`}>
                  {country.flag} -{country.name.common}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
