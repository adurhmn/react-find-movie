import React from "react";
import { FilterContext } from "../context/filter-state-manager";

const FilterList = function () {
  const filterData = React.useContext(FilterContext);

  const genreToggleHandler = function (e) {
    document
      .querySelector(".drop-down-checklist__list")
      .classList.toggle("visible");
  };

  return (
    <ul className="filter-list">
      <li className="filter-list-item">
        <label>Genre:</label>
        <div className="drop-down-checklist">
          <span
            className="input drop-down-checklist__toggler"
            onClick={genreToggleHandler}
            q
          >
            Select Genre &#8645;
          </span>
          <ul className="drop-down-checklist__list">
            <li>
              <input
                type="checkbox"
                name="genre"
                value="action"
                checked={filterData.genre.includes("action")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Action
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="adventure"
                checked={filterData.genre.includes("adventure")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Adventure
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="comedy"
                checked={filterData.genre.includes("comedy")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Comedy
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="crime"
                checked={filterData.genre.includes("crime")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Crime
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="drama"
                checked={filterData.genre.includes("drama")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Drama
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="family"
                checked={filterData.genre.includes("family")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Family
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="fantasy"
                checked={filterData.genre.includes("fantasy")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Fantasy
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="horror"
                checked={filterData.genre.includes("horror")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Horror
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="mystery"
                checked={filterData.genre.includes("mystery")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Mystery
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="romance"
                checked={filterData.genre.includes("romance")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Romance
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="sci_fi"
                checked={filterData.genre.includes("sci_fi")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Sci-Fi
            </li>
            <li>
              <input
                type="checkbox"
                name="genre"
                value="thriller"
                checked={filterData.genre.includes("thriller")}
                onChange={(e) => filterData.filterChangeHandler(e)}
              />
              &nbsp;Thriller
            </li>
          </ul>
        </div>
      </li>
      <li className="filter-list-item">
        <label>
          Date
          <br />
          (from):
        </label>
        <input
          className="input"
          type="date"
          name="from-date"
          value={filterData.date[0]}
          onChange={(e) => filterData.filterChangeHandler(e)}
        />
      </li>
      <li className="filter-list-item">
        <label>
          Date
          <br />
          (to):
        </label>
        <input
          className="input"
          type="date"
          name="to-date"
          value={filterData.date[1]}
          onChange={(e) => filterData.filterChangeHandler(e)}
        />
      </li>
      <li className="filter-list-item">
        <label>Lang:</label>
        <select
          className="input"
          name="language"
          value={filterData.language}
          onChange={(e) => filterData.filterChangeHandler(e)}
        >
          <option value="any">--all--</option>
          <option value="ab">Abkhazian</option>
          <option value="aa">Afar</option>
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="ar">Arabic</option>
          <option value="hy">Armenian</option>
          <option value="as">Assamese</option>
          <option value="ay">Aymara</option>
          <option value="az">Azerbaijani</option>
          <option value="ba">Bashkir</option>
          <option value="eu">Basque</option>
          <option value="bn">Bengali, Bangla</option>
          <option value="dz">Bhutani</option>
          <option value="bh">Bihari</option>
          <option value="bi">Bislama</option>
          <option value="br">Breton</option>
          <option value="bg">Bulgarian</option>
          <option value="my">Burmese</option>
          <option value="be">Byelorussian</option>
          <option value="km">Cambodian</option>
          <option value="ca">Catalan</option>
          <option value="zh">Chinese</option>
          <option value="co">Corsican</option>
          <option value="hr">Croatian</option>
          <option value="cs">Czech</option>
          <option value="da">Danish</option>
          <option value="nl">Dutch</option>
          <option value="en">English, American</option>
          <option value="eo">Esperanto</option>
          <option value="et">Estonian</option>
          <option value="fo">Faeroese</option>
          <option value="fj">Fiji</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="fy">Frisian</option>
          <option value="gd">Gaelic (Scots Gaelic)</option>
          <option value="gl">Galician</option>
          <option value="ka">Georgian</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="kl">Greenlandic</option>
          <option value="gn">Guarani</option>
          <option value="gu">Gujarati</option>
          <option value="ha">Hausa</option>
          <option value="iw">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hu">Hungarian</option>
          <option value="is">Icelandic</option>
          <option value="in">Indonesian</option>
          <option value="ia">Interlingua</option>
          <option value="ie">Interlingue</option>
          <option value="ik">Inupiak</option>
          <option value="ga">Irish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="jw">Javanese</option>
          <option value="kn">Kannada</option>
          <option value="ks">Kashmiri</option>
          <option value="kk">Kazakh</option>
          <option value="rw">Kinyarwanda</option>
          <option value="ky">Kirghiz</option>
          <option value="rn">Kirundi</option>
          <option value="ko">Korean</option>
          <option value="ku">Kurdish</option>
          <option value="lo">Laothian</option>
          <option value="la">Latin</option>
          <option value="lv">Latvian, Lettish</option>
          <option value="ln">Lingala</option>
          <option value="lt">Lithuanian</option>
          <option value="mk">Macedonian</option>
          <option value="mg">Malagasy</option>
          <option value="ms">Malay</option>
          <option value="ml">Malayalam</option>
          <option value="mt">Maltese</option>
          <option value="mi">Maori</option>
          <option value="mr">Marathi</option>
          <option value="mo">Moldavian</option>
          <option value="mn">Mongolian</option>
          <option value="na">Nauru</option>
          <option value="ne">Nepali</option>
          <option value="no">Norwegian</option>
          <option value="oc">Occitan</option>
          <option value="or">Oriya</option>
          <option value="om">Oromo, Afan</option>
          <option value="ps">Pashto, Pushto</option>
          <option value="fa">Persian</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese</option>
          <option value="pa">Punjabi</option>
          <option value="qu">Quechua</option>
          <option value="rm">Rhaeto-Romance</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sm">Samoan</option>
          <option value="sg">Sangro</option>
          <option value="sa">Sanskrit</option>
          <option value="sr">Serbian</option>
          <option value="sh">Serbo-Croatian</option>
          <option value="st">Sesotho</option>
          <option value="tn">Setswana</option>
          <option value="sn">Shona</option>
          <option value="sd">Sindhi</option>
          <option value="si">Singhalese</option>
          <option value="ss">Siswati</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="so">Somali</option>
          <option value="es">Spanish</option>
          <option value="su">Sudanese</option>
          <option value="sw">Swahili</option>
          <option value="sv">Swedish</option>
          <option value="tl">Tagalog</option>
          <option value="tg">Tajik</option>
          <option value="ta">Tamil</option>
          <option value="tt">Tatar</option>
          <option value="te">Tegulu</option>
          <option value="th">Thai</option>
          <option value="bo">Tibetan</option>
          <option value="ti">Tigrinya</option>
          <option value="to">Tonga</option>
          <option value="ts">Tsonga</option>
          <option value="tr">Turkish</option>
          <option value="tk">Turkmen</option>
          <option value="tw">Twi</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="uz">Uzbek</option>
          <option value="vi">Vietnamese</option>
          <option value="vo">Volapuk</option>
          <option value="cy">Welsh</option>
          <option value="wo">Wolof</option>
          <option value="xh">Xhosa</option>
          <option value="ji">Yiddish</option>
          <option value="yo">Yoruba</option>
          <option value="zu">Zulu</option>
        </select>
      </li>
      <li className="filter-list-item">
        <label>
          Max
          <br />
          Results:
        </label>
        <input
          className="input"
          type="number"
          min="1"
          value={filterData.count}
          name="count"
          onChange={(e) => filterData.filterChangeHandler(e)}
        />
      </li>
      <span
        className="filter-reset-btn"
        onClick={filterData.filterResetHandler}
      >
        Reset All
      </span>
    </ul>
  );
};

export default FilterList;
