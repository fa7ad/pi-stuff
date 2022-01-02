import got from 'got';

function RegexBlacklists() {
  return null;
}

export default RegexBlacklists;

const REGEX_BL_URLS = [
  'https://raw.githubusercontent.com/mmotti/pihole-regex/master/regex.list'
];

export async function getServerSideProps({ res }) {
  const lists = await Promise.all(REGEX_BL_URLS.map((url) => got(url).text()));
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
