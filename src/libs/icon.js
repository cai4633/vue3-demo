!(function (e) {
  var t,
    n,
    o,
    c,
    i,
    d,
    l =
      '<svg><symbol id="icon-back-top" viewBox="0 0 1024 1024"><path d="M536.797267 281.753035c-4.232394-6.344498-10.273994-11.05887-17.347087-13.536294-3.714602-1.481747-7.735172-2.266623-12.144598-2.266623l-0.183172 0-1.147126-0.12075c-0.575098 0-1.026376 0.090051-1.601474 0.150426-4.229325 0-8.18645 0.7552-11.69332 2.145873-7.312546 2.508123-13.385868 7.312546-17.223267 13.355169l-254.17698 254.752078c-5.952572 5.921873-9.18622 13.990642-9.18622 22.691815 0 9.66922 4.110621 19.24839 11.17962 26.318412 7.010671 6.980995 16.075117 10.850116 25.501814 10.850116 8.702196 0 16.861016-3.325745 23.024389-9.457396 0.242524-0.302899 0.544399-0.544399 0.847298-0.847298 0.63445-0.544399 1.388627-1.24127 1.721201-1.783623l195.588607-195.256032 0.393973 469.799876c-0.151449 1.026376-0.151449 1.962701-0.091074 2.870374l0.060375 1.088798c0 17.675568 15.47239 31.513738 35.233456 31.513738 19.942191 0 36.07666-14.140045 36.07666-31.513738l0.364297-473.759047 195.34506 194.98281c0.632403 0.787946 1.328251 1.452071 2.084475 2.087545l0.846274 0.816598c6.104021 6.131651 14.262842 9.457396 22.961968 9.457396 9.428743 0 18.49319-3.868097 25.504884-10.850116 14.07967-14.048971 14.987343-36.016285 1.991354-49.010227L536.797267 281.753035zM887.66338 129.97933 124.346541 129.97933c-17.706267 0-32.073486 14.382569-32.073486 32.028461 0 17.675568 14.367219 32.05916 32.073486 32.05916l763.317862 0c17.677615 0 32.060183-14.383592 32.060183-32.05916C919.723563 144.361899 905.342018 129.97933 887.66338 129.97933"  ></path></symbol></svg>',
    a = (a = document.getElementsByTagName("script"))[a.length - 1].getAttribute("data-injectcss")
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function s() {
    i || ((i = !0), o())
  }
  ;(t = function () {
    var e, t, n, o
    ;((o = document.createElement("div")).innerHTML = l),
      (l = null),
      (n = o.getElementsByTagName("svg")[0]) &&
        (n.setAttribute("aria-hidden", "true"),
        (n.style.position = "absolute"),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = "hidden"),
        (e = n),
        (t = document.body).firstChild ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n)) : t.appendChild(e))
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t()
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (c = e.document),
        (i = !1),
        (d = function () {
          try {
            c.documentElement.doScroll("left")
          } catch (e) {
            return void setTimeout(d, 50)
          }
          s()
        })(),
        (c.onreadystatechange = function () {
          "complete" == c.readyState && ((c.onreadystatechange = null), s())
        }))
})(window)
