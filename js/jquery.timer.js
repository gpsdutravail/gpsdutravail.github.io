!function(e){e.fn.countTo=function(t){t=e.extend({},e.fn.countTo.defaults,t||{});var n=Math.ceil(t.speed/t.refreshInterval),o=(t.to-t.from)/n;return e(this).each(function(){function l(){f+=o,a++,e(r).html(f.toFixed(t.decimals)),"function"==typeof t.onUpdate&&t.onUpdate.call(r,f),a>=n&&(clearInterval(c),f=t.to,"function"==typeof t.onComplete&&t.onComplete.call(r,f))}var r=this,a=0,f=t.from,c=setInterval(l,t.refreshInterval)})},e.fn.countTo.defaults={from:0,to:100,speed:1e3,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}}(jQuery);
