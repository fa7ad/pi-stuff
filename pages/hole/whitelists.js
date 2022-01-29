import got from 'got';
import getCombinedList from 'lib/combineLists';

function Whitelists() {
  return null;
}

export default Whitelists;

const MY_WL = `clients4.google.com
clients2.google.com
s.youtube.com
video-stats.l.google.com
www.googleapis.com
youtubei.googleapis.com
oauthaccountmanager.googleapis.com
android.clients.google.com
reminders-pa.googleapis.com
firestore.googleapis.com
gstaticadssl.l.google.com
googleapis.l.google.com
dl.google.com
redirector.gvt1.com
www.msftncsi.com
outlook.office365.com
products.office.com
c.s-microsoft.com
i.s-microsoft.com
login.live.com
login.microsoftonline.com
g.live.com
dl.delivery.mp.microsoft.com
geo-prod.do.dsp.mp.microsoft.com
displaycatalog.mp.microsoft.com
sls.update.microsoft.com.akadns.net
fe3.delivery.dsp.mp.microsoft.com.nsatc.net
tlu.dl.delivery.mp.microsoft.com
msedge.api.cdp.microsoft.com
clientconfig.passport.net
v10.events.data.microsoft.com
v20.events.data.microsoft.com
client-s.gateway.messenger.live.com
arc.msn.com
activity.windows.com
xbox.ipv6.microsoft.com
device.auth.xboxlive.com
www.msftncsi.com
title.mgt.xboxlive.com
xsts.auth.xboxlive.com
title.auth.xboxlive.com
ctldl.windowsupdate.com
attestation.xboxlive.com
xboxexperiencesprod.experimentation.xboxlive.com
xflight.xboxlive.com
cert.mgt.xboxlive.com
xkms.xboxlive.com
def-vef.xboxlive.com
notify.xboxlive.com
help.ui.xboxlive.com
licensing.xboxlive.com
eds.xboxlive.com
www.xboxlive.com
v10.vortex-win.data.microsoft.com
settings-win.data.microsoft.com
s.gateway.messenger.live.com
client-s.gateway.messenger.live.com
ui.skype.com
pricelist.skype.com
apps.skype.com
m.hotmail.com
sa.symcb.com
s1.symcb.com
s2.symcb.com
s3.symcb.com
s4.symcb.com
s5.symcb.com
officeclient.microsoft.com
dev.virtualearth.net
ecn.dev.virtualearth.net
t0.ssl.ak.dynamic.tiles.virtualearth.net
t0.ssl.ak.tiles.virtualearth.net
itunes.apple.com
s.mzstatic.com
appleid.apple.com
gsp-ssl.ls.apple.com
gsp-ssl.ls-apple.com.akadns.net
connectivitycheck.android.com
android.clients.google.com
clients3.google.com
connectivitycheck.gstatic.com
msftncsi.com
www.msftncsi.com
ipv6.msftncsi.com
captive.apple.com
gsp1.apple.com
www.apple.com
www.appleiphonecell.com
www.google-analytics.com
ssl.google-analytics.com
spclient.wg.spotify.com
apresolve.spotify.com
api-tv.spotify.com
weeklyad.target.com
m.weeklyad.target.com
weeklyad.target.com.edgesuite.net
upload.facebook.com
creative.ak.fbcdn.net
external-lhr0-1.xx.fbcdn.net
external-lhr1-1.xx.fbcdn.net
external-lhr10-1.xx.fbcdn.net
external-lhr2-1.xx.fbcdn.net
external-lhr3-1.xx.fbcdn.net
external-lhr4-1.xx.fbcdn.net
external-lhr5-1.xx.fbcdn.net
external-lhr6-1.xx.fbcdn.net
external-lhr7-1.xx.fbcdn.net
external-lhr8-1.xx.fbcdn.net
external-lhr9-1.xx.fbcdn.net
fbcdn-creative-a.akamaihd.net
scontent-lhr3-1.xx.fbcdn.net
scontent.xx.fbcdn.net
scontent.fgdl5-1.fna.fbcdn.net
graph.facebook.com
b-graph.facebook.com
connect.facebook.com
cdn.fbsbx.com
api.facebook.com
edge-mqtt.facebook.com
mqtt.c10r.facebook.com
portal.fb.com
star.c10r.facebook.com
star-mini.c10r.facebook.com
b-api.facebook.com
fb.me
bigzipfiles.facebook.com
l.facebook.com
www.facebook.com
scontent-atl3-1.xx.fbcdn.net
static.xx.fbcdn.net
edge-chat.messenger.com
video.xx.fbcdn.net
external-ort2-1.xx.fbcdn.net
scontent-ort2-1.xx.fbcdn.net
edge-chat.facebook.com
scontent-mia3-1.xx.fbcdn.net
web.facebook.com
rupload.facebook.com
l.messenger.com
directvnow.com
directvapplications.hb.omtrdc.net
s.zkcdn.net
js.maxmind.com
www.asadcdn.com
code.bildstatic.de
de.ioam.de
json.bild.de
script.ioam.de
tags.tiqcdn.com
tagger.opecloud.com
plex.tv
tvdb2.plex.tv
pubsub.plex.bz
proxy.plex.bz
proxy02.pop.ord.plex.bz
cpms.spop10.ams.plex.bz
meta-db-worker02.pop.ric.plex.bz
meta.plex.bz
tvthemes.plexapp.com.cdn.cloudflare.net
tvthemes.plexapp.com
106c06cd218b007d-b1e8a1331f68446599e96a4b46a050f5.ams.plex.services
meta.plex.tv
cpms35.spop10.ams.plex.bz
proxy.plex.tv
metrics.plex.tv
pubsub.plex.tv
status.plex.tv
www.plex.tv
node.plexapp.com
nine.plugins.plexapp.com
staging.plex.tv
app.plex.tv
o1.email.plex.tv
o2.sg0.plex.tv
dashboard.plex.tv
gravatar.com
thetvdb.com
themoviedb.com
chtbl.com
services.sonarr.tv
skyhook.sonarr.tv
download.sonarr.tv
apt.sonarr.tv
forums.sonarr.tv
placehold.it
placeholdit.imgix.net
dl.dropboxusercontent.com
ns1.dropbox.com
ns2.dropbox.com
widget-cdn.rpxnow.com
s.marketwatch.com
imagesak.secureserver.net
fpdownload.adobe.com
entitlement.auth.adobe.com
livepassdl.conviva.com
gfwsl.geforce.com
delivery.vidible.tv
img.vidible.tv
videos.vidible.tv
edge.api.brightcove.com
cdn.vidible.tv
v.w-x.co
appspot-preview.l.google.com
prod.telemetry.ros.rockstargames.com
chevrolet.com
tracking.epicgames.com
cloudsync-prod.s3.amazonaws.com
79423.analytics.edgekey.net
assets.adobedtm.com
nexus.ensighten.com
tracking-protection.cdn.mozilla.net
telemetry-console.api.playstation.com
gdlp01.c-wss.com
styles.redditmedia.com
www.redditstatic.com
reddit.map.fastly.net
www.redditmedia.com
reddit-uploaded-media.s3-accelerate.amazonaws.com
tracking.dpd.de
wa.me
www.wa.me
ud-chat.signal.org
chat.signal.org
storage.signal.org
signal.org
www.signal.org
updates2.signal.org
textsecure-service-whispersystems.org
giphy-proxy-production.whispersystems.org
cdn.signal.org
whispersystems-textsecure-attachments.s3-accelerate.amazonaws.com
d83eunklitikj.cloudfront.net
souqcdn.com
cms.souqcdn.com
api.directory.signal.org
contentproxy.signal.org
turn1.whispersystems.org
twitter.com
upload.twitter.com
api.twitter.com
mobile.twitter.com
h-sdk.online-metrix.net
p11.techlab-cdn.com
logs.juspay.in
appboy-images.com
rest.iad-03.braze.com
mobileandroidapi.punchh.com
cds.s5x3j6q5.hwcdn.net`;

const WHITELIST_URLS = [
  'https://raw.githubusercontent.com/anudeepND/whitelist/master/domains/whitelist.txt',
  'https://raw.githubusercontent.com/mmotti/pihole-regex/master/whitelist.list',
];

export async function getServerSideProps({ res }) {
  const lists = await Promise.all(WHITELIST_URLS.map((url) => got(url).text()));

  const contents = getCombinedList(MY_WL, lists);

  if (res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(contents);
    res.end();
  }

  return { props: {} };
}
