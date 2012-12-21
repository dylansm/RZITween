// Generated by CoffeeScript 1.4.0
(function() {
  var Tween, module;

  module = function(name) {
    return window[name] = window[name] || {};
  };

  module("RZI");

  RZI.Tween = Tween = (function() {

    function Tween() {}

    Tween.add = function() {
      return console.log("yup");
    };

    Tween.easingFunctions = {
      easeNone: function(t, b, c, d) {
        return c * t / d + b;
      },
      easeInQuad: function(t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      },
      easeInCubic: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      },
      easeOutInCubic: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutCubic(t * 2, b, c / 2, d);
        }
        return RZI.Tween.easingFunctions.easeInCubic((t * 2) - d, b + c / 2, c / 2, d);
      },
      easeInQuart: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      },
      easeOutInQuart: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutQuart(t * 2, b, c / 2, d);
        }
        return RZI.Tween.easingFunctions.easeInQuart((t * 2) - d, b + c / 2, c / 2, d);
      },
      easeInQuint: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      },
      easeOutInQuint: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutQuint(t * 2, b, c / 2, d);
        }
        return RZI.Tween.easingFunctions.easeInQuint((t * 2) - d, b + c / 2, c / 2, d);
      },
      easeInSine: function(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOutSine: function(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },
      easeOutInSine: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutSine(t * 2, b, c / 2, d);
        }
        return RZI.Tween.easingFunctions.easeInSine((t * 2) - d, b + c / 2, c / 2, d);
      },
      easeInExpo: function(t, b, c, d) {
        if (t === 0) {
          return b;
        } else {
          return c * Math.pow(2, 10 * (t / d - 1)) + b - c * 0.001;
        }
      },
      easeOutExpo: function(t, b, c, d) {
        if (t === d) {
          return b + c;
        } else {
          return c * 1.001 * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
      },
      easeInOutExpo: function(t, b, c, d) {
        if (t === 0) {
          return b;
        }
        if (t === d) {
          return b + c;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b - c * 0.0005;
        }
        return c / 2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + b;
      },
      easeOutInExpo: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutExpo(t * 2, b, c / 2, d);
        }
        return RZI.Tween.easingFunctions.easeInExpo((t * 2) - d, b + c / 2, c / 2, d);
      },
      easeInCirc: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      },
      easeOutInCirc: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutCirc(t * 2, b, c / 2, d);
        }
        return RZI.Tween.easingFunctions.easeInCirc((t * 2) - d, b + c / 2, c / 2, d);
      },
      easeInElastic: function(t, b, c, d, a, p) {
        var s;
        if (t === 0) {
          return b;
        }
        if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * .3;
        }
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOutElastic: function(t, b, c, d, a, p) {
        var s;
        if (t === 0) {
          return b;
        }
        if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * .3;
        }
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOutElastic: function(t, b, c, d, a, p) {
        var s;
        if (t === 0) {
          return b;
        }
        if ((t /= d / 2) === 2) {
          return b + c;
        }
        if (!p) {
          p = d * (.3 * 1.5);
        }
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
          return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
      },
      easeOutInElastic: function(t, b, c, d, a, p) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutElastic(t * 2, b, c / 2, d, a, p);
        }
        return RZI.Tween.easingFunctions.easeInElastic((t * 2) - d, b + c / 2, c / 2, d, a, p);
      },
      easeInBack: function(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      },
      easeOutInBack: function(t, b, c, d, s) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutBack(t * 2, b, c / 2, d, s);
        }
        return RZI.Tween.easingFunctions.easeInBack((t * 2) - d, b + c / 2, c / 2, d, s);
      },
      easeInBounce: function(t, b, c, d) {
        return c - RZI.Tween.easingFunctions.easeOutBounce(d - t, 0, c, d) + b;
      },
      easeOutBounce: function(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
      },
      easeInOutBounce: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeInBounce(t * 2, 0, c, d) * .5 + b;
        } else {
          return RZI.Tween.easingFunctions.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
      },
      easeOutInBounce: function(t, b, c, d) {
        if (t < d / 2) {
          return RZI.Tween.easingFunctions.easeOutBounce(t * 2, b, c / 2, d);
        }
        return RZI.Tween.easingFunctions.easeInBounce((t * 2) - d, b + c / 2, c / 2, d);
      }
    };

    return Tween;

  })();

}).call(this);
