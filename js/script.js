const detectDeviceType = () => (/Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop');
document.documentElement.classList.add(detectDeviceType());
const network = document.querySelector('.network');
(window.addEventListener('offline', () => {
  network.classList.add('offline');
}),
  window.addEventListener('online', () => {
    network.classList.remove('offline');
  }));
const HTML = document.documentElement,
  runColorMode = (e) => {
    if (!window.matchMedia) return;
    let t = window.matchMedia('(prefers-color-scheme: dark)');
    e(t.matches);
  };
runColorMode((e) => {
  e ? HTML.setAttribute('data-theme', 'dark') : HTML.setAttribute('data-theme', 'light');
});
const TOGGLE = document.querySelector('.theme-toggle'),
  SWITCH = () => {
    let e = !TOGGLE.matches('[aria-pressed=true]');
    (TOGGLE.setAttribute('aria-pressed', e), (HTML.dataset.theme = e ? 'light' : 'dark'));
  },
  TOGGLE_THEME = () => {
    (document.startViewTransition || SWITCH(), document.startViewTransition(SWITCH));
  };
async function fetchData() {
  let e = await fetch('https://recreatorus.github.io/countryinfo/data/countries.json', { priority: 'high' }),
    t = await e.json(),
    r = t.map(
      ({
        country: e,
        pop2026: t,
        area: r,
        density: n,
        gdp2024: a,
        gdppc2024: o,
        gdpppppc2024: l,
        growthgdp2024: c,
      }) => ({
        country: e,
        pop2026: t,
        area: r,
        density: n,
        gdp2024: a,
        gdppc2024: o,
        gdpppppc2024: l,
        growthgdp2024: c,
      }),
    );
  return r;
}
(TOGGLE.addEventListener('click', TOGGLE_THEME),
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    HTML.dataset.theme = e.matches ? 'dark' : 'light';
  }),
  fetchData().then((e) => addTableRows(e)));
const tableBody = document.querySelector('tbody');
function numberFormatter(e) {
  return new Intl.NumberFormat('ru-RU').format(e);
}
const round = (e, t = 0) => Number(`${Math.round(`${e}e${t}`)}e-${t}`);
function addTableRows(e) {
  e.forEach((e) => {
    let t = document.createElement('tr');
    ((t.innerHTML = `
      <td>${e.country}</td>
      <td>${numberFormatter(e.pop2026)}</td>
      <td>${numberFormatter(e.area)}</td>
      <td>${numberFormatter(round(e.density, 1))}</td>
      <td>${numberFormatter(round(e.gdp2024, 1))}</td>
      <td>${numberFormatter(round(e.gdppc2024, 0))}</td>
      <td>${numberFormatter(round(e.gdpppppc2024, 0))}</td>
      <td>${numberFormatter(e.growthgdp2024).replace(',', '.')}</td>
    `),
      tableBody.append(t));
  });
  let t = document.querySelectorAll('tbody td:nth-child(8)');
  (t.forEach((e) =>
    e.innerHTML < 0
      ? (e.style.color = 'red')
      : 0 === Number(e.innerHTML)
        ? (e.style.color = 'currentColor')
        : (e.style.color = 'green'),
  ),
    sortTable());
}
function sortTable() {
  let e = document.getElementById('sortMe'),
    t = e.querySelectorAll('th'),
    r = e.querySelector('tbody'),
    n = r.querySelectorAll('tr'),
    a = Array.from(t).map(function (e) {
      return '';
    }),
    o = function (e, r) {
      let n = t[e].getAttribute('data-type');
      return 'number' === n ? parseFloat(r) : r;
    },
    l = function (e) {
      let t = a[e] || 'asc',
        l = 'asc' === t ? 1 : -1,
        c = Array.from(n);
      (c.sort(function (t, r) {
        let n = t.querySelectorAll('td')[e].innerHTML.replace(/\&nbsp;/g, ''),
          a = r.querySelectorAll('td')[e].innerHTML.replace(/\&nbsp;/g, ''),
          c = o(e, n),
          i = o(e, a);
        switch (!0) {
          case c > i:
            return 1 * l;
          case c < i:
            return -1 * l;
          case c === i:
            return 0;
        }
      }),
        [].forEach.call(n, function (e) {
          r.removeChild(e);
        }),
        (a[e] = 'asc' === t ? 'desc' : 'asc'),
        c.forEach(function (e) {
          r.appendChild(e);
        }));
    };
  [].forEach.call(t, function (e, t) {
    e.addEventListener('click', function () {
      l(t);
    });
  });
}
var els = document.querySelectorAll('#sortMe th');
function checkAlphabets(e) {
  for (let t of e) if (!(t >= 'a' && t <= 'z') && !(t >= 'A' && t <= 'Z')) return !1;
  return !0;
}
[].forEach.call(els, function (e) {
  e.addEventListener('click', function () {
    ([].forEach.call(els, function (e) {
      e.classList.remove('active');
    }),
      e.classList.add('active'));
  });
});
const LightTableFilter = (function (e) {
  let t;
  function r(r) {
    checkAlphabets((t = r.target).value)
      ? document.querySelector('.input-wrapper').classList.remove('user-invalid')
      : document.querySelector('.input-wrapper').classList.add('user-invalid');
    let a = document.getElementsByClassName(t.getAttribute('data-table'));
    e.forEach.call(a, function (t) {
      e.forEach.call(t.tBodies, function (t) {
        e.forEach.call(t.rows, n);
      });
    });
  }
  function n(e) {
    let r = e.textContent.toLowerCase(),
      n = t.value.toLowerCase();
    e.style.display = -1 === r.indexOf(n) ? 'none' : 'table-row';
  }
  return {
    init: function () {
      let t = document.getElementsByClassName('light-table-filter');
      e.forEach.call(t, function (e) {
        e.oninput = r;
      });
    },
  };
})(Array.prototype);
(document.addEventListener('readystatechange', function () {
  'complete' === document.readyState && LightTableFilter.init();
}),
  (document.getElementById('year').innerHTML = new Date().getFullYear()));
