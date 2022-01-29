import got from 'got';
import papaparse from 'papaparse';

function Adlists() {
  return null;
}

export default Adlists;

const CSV_ADLIST = 'https://v.firebog.net/hosts/csv.txt';

const getParsedCsv = async (url) => {
  const csv = await got(url).text();
  const header = `"type","tick","host","name","url"\n`;
  return new Promise((resolve, reject) =>
    papaparse.parse(header + csv, {
      header: true,
      dynamicTyping: true,
      complete: resolve,
      error: reject,
    })
  );
};

// const AGGR_ADLISTS_URL = 'https://v.firebog.net/hosts/lists.php?type=tick';
// 'https://www.github.developerdan.com/hosts/lists/ads-and-tracking-extended.txt',

const INDIVIDUAL_ADLISTS_URLS = ['https://dbl.oisd.nl/basic/'];

export async function getServerSideProps({ res }) {
  const rawAdlist = await getParsedCsv(CSV_ADLIST);
  const list = rawAdlist.data
    .filter((row) => row.tick === 'tick' && ['advertising', 'malicious'].includes(row.type))
    .map((row) => row.url);
  const contents = [...list, ...INDIVIDUAL_ADLISTS_URLS].join('\n');

  if (res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(contents);
    res.end();
  }

  return { props: {} };
}
