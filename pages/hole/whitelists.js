import got from 'got';

function Whitelists() {
  return null;
}

export default Whitelists;

const WHITELIST_URLS = [
  'https://raw.githubusercontent.com/anudeepND/whitelist/master/domains/whitelist.txt',
  'https://raw.githubusercontent.com/mmotti/pihole-regex/master/whitelist.list',
];

export async function getServerSideProps({ res }) {
  const lists = await Promise.all(WHITELIST_URLS.map((url) => got(url).text()));
  const contents = lists
    .map((list) =>
      list
        .trim()
        .split('\n')
        .filter((line) => line.trim().length && !line.startsWith('#'))
        .join('\n')
    )
    .join('\n');
  if (res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(contents);
    res.end();
  }

  return { props: {} };
}
