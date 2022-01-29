function RegexWhitelists() {
  return null;
}

export default RegexWhitelists;

const WL_REX = `[a-z]\.thumbs\.redditmedia\.com
(\.|^)redd\.it$
(\.|^)reddit\.com$
^whatsapp-cdn-shv-[0-9]{2}-[a-z]{3}[0-9]\.fbcdn\.net$
^((www|(w[0-9]\.)?web|media((-[a-z]{3}|\.[a-z]{4})[0-9]{1,2}-[0-9](\.|-)(cdn|fna))?)\.)?whatsapp\.(com|net)$
(\.|^)twimg\.com$`;

export async function getServerSideProps({ res }) {
  const contents = WL_REX;
  if (res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(contents);
    res.end();
  }

  return { props: {} };
}
