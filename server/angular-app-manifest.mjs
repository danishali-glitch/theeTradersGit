
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/service"
  },
  {
    "renderMode": 2,
    "route": "/team"
  },
  {
    "renderMode": 2,
    "route": "/contactus"
  },
  {
    "renderMode": 2,
    "route": "/gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24432, hash: '26c2506199fa0ed2b5bc74109b8c66139e9efaeb5bb7392d6845c0f3a13cd907', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17934, hash: 'd5348e0f8a0f503647ea5a9da941d3c8ee6844fed5fa138ee514241ab2923fa1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 65036, hash: '67128e877bb6fd76ef8723d9f90a71d6134a2227898e5b22ed03e7fd99f170ca', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 65036, hash: '09509a18a3ae90e4e2065b01cb2bd956c2959ff3a1b5824de3841ca824fb358b', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 65036, hash: '201989ecf1f0d296f8c76f8f643034fbb55a370594f04f789a160342697783ee', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 65036, hash: '67128e877bb6fd76ef8723d9f90a71d6134a2227898e5b22ed03e7fd99f170ca', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 65036, hash: '0f8f1111513f7bc3c1b38f94344751294013038fae8eba5ccfb69aa2cb838db3', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 65036, hash: '67128e877bb6fd76ef8723d9f90a71d6134a2227898e5b22ed03e7fd99f170ca', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'styles-OVDZRUIN.css': {size: 10919, hash: '6SajrvhpR1s', text: () => import('./assets-chunks/styles-OVDZRUIN_css.mjs').then(m => m.default)}
  },
};
