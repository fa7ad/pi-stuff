import got from 'got';

function Adlists() {
  return null;
}

export default Adlists;

const AGGR_ADLISTS_URL = 'https://v.firebog.net/hosts/lists.php?type=tick';

const INDIVIDUAL_ADLISTS_URLS = [
  'https://www.github.developerdan.com/hosts/lists/ads-and-tracking-extended.txt',
  'https://dbl.oisd.nl/basic/',
];

export async function getServerSideProps({ res }) {
  const list = await got(AGGR_ADLISTS_URL).text();
  const contents = [list.trim(), ...INDIVIDUAL_ADLISTS_URLS].join('\n');

  if (res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(contents);
    res.end();
  }

  return { props: {} };
}
