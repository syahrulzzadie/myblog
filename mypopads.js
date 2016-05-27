var _pop = _pop || [];
  _pop.push([&#39;siteId&#39;, 1300684]);
  _pop.push([&#39;minBid&#39;, 0.000000]);
  _pop.push([&#39;popundersPerIP&#39;, 0]);
  _pop.push([&#39;delayBetween&#39;, 0]);
  _pop.push([&#39;default&#39;, false]);
  _pop.push([&#39;defaultPerDay&#39;, 0]);
  _pop.push([&#39;topmostLayer&#39;, false]);
  (function() {
    var pa = document.createElement(&#39;script&#39;); pa.type = &#39;text/javascript&#39;; pa.async = true;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; 
    pa.src = &#39;//c1.popads.net/pop.js&#39;;
    pa.onerror = function() {
      var sa = document.createElement(&#39;script&#39;); sa.type = &#39;text/javascript&#39;; sa.async = true;
      sa.src = &#39;//c2.popads.net/pop.js&#39;;
      s.parentNode.insertBefore(sa, s);
    };
    s.parentNode.insertBefore(pa, s);
  })();
