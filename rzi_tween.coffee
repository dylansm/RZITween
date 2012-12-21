module = (name) ->
  window[name] = window[name] or {}

module "RZI"

RZI.Tween = class Tween

  @add: ->
    console.log "yup"

  @easingFunctions:
    easeNone: (t, b, c, d) ->
      c*t/d + b
    easeInQuad: (t, b, c, d) ->
      c*(t/=d)*t + b
    easeOutQuad: (t, b, c, d) ->
      -c *(t/=d)*(t-2) + b
    easeInOutQuad: (t, b, c, d) ->
      if((t/=d/2) < 1)
        return c/2*t*t + b
      -c/2 *((--t)*(t-2) - 1) + b
    easeInCubic: (t, b, c, d) ->
      c*(t/=d)*t*t + b
    easeOutCubic: (t, b, c, d) ->
      c*((t=t/d-1)*t*t + 1) + b
    easeInOutCubic: (t, b, c, d) ->
      if ((t/=d/2) < 1)
        return c/2*t*t*t + b
      c/2*((t-=2)*t*t + 2) + b
    easeOutInCubic: (t, b, c, d) ->
      if (t < d/2)
        return RZI.Tween.easingFunctions.easeOutCubic(t*2, b, c/2, d)
      RZI.Tween.easingFunctions.easeInCubic((t*2)-d, b+c/2, c/2, d)
    easeInQuart: (t, b, c, d) ->
      c*(t/=d)*t*t*t + b
    easeOutQuart: (t, b, c, d) ->
      -c *((t=t/d-1)*t*t*t - 1) + b
    easeInOutQuart: (t, b, c, d) ->
      if ((t/=d/2) < 1)
        return c/2*t*t*t*t + b
      -c/2 *((t-=2)*t*t*t - 2) + b
    easeOutInQuart: (t, b, c, d) ->
      if (t < d/2)
        return RZI.Tween.easingFunctions.easeOutQuart(t*2, b, c/2, d)
      RZI.Tween.easingFunctions.easeInQuart((t*2)-d, b+c/2, c/2, d)
    easeInQuint: (t, b, c, d) ->
      c*(t/=d)*t*t*t*t + b
    easeOutQuint: (t, b, c, d) ->
      c*((t=t/d-1)*t*t*t*t + 1) + b
    easeInOutQuint: (t, b, c, d) ->
      if ((t/=d/2) < 1)
        return c/2*t*t*t*t*t + b
      c/2*((t-=2)*t*t*t*t + 2) + b
    easeOutInQuint: (t, b, c, d) ->
      if(t < d/2)
        return RZI.Tween.easingFunctions.easeOutQuint(t*2, b, c/2, d)
      RZI.Tween.easingFunctions.easeInQuint((t*2)-d, b+c/2, c/2, d)
    easeInSine: (t, b, c, d) ->
      -c * Math.cos(t/d *(Math.PI/2)) + c + b
    easeOutSine: (t, b, c, d) ->
      c * Math.sin(t/d *(Math.PI/2)) + b
    easeInOutSine: (t, b, c, d) ->
      -c/2 *(Math.cos(Math.PI*t/d) - 1) + b
    easeOutInSine: (t, b, c, d) ->
      if (t < d/2)
        return RZI.Tween.easingFunctions.easeOutSine(t*2, b, c/2, d)
      RZI.Tween.easingFunctions.easeInSine((t*2)-d, b+c/2, c/2, d)
    easeInExpo: (t, b, c, d) ->
      # return(t==0) ? b : c * Math.pow(2, 10 *(t/d - 1)) + b - c * 0.001
      if (t==0) 
        b
      else
        c * Math.pow(2, 10 *(t/d - 1)) + b - c * 0.001
    easeOutExpo: (t, b, c, d) ->
      # return(t==d) ? b+c : c * 1.001 *(-Math.pow(2, -10 * t/d) + 1) + b
      if (t==d) 
        b+c
      else
        c * 1.001 *(-Math.pow(2, -10 * t/d) + 1) + b
    easeInOutExpo: (t, b, c, d) ->
      if (t==0)
        return b
      if (t==d)
        return b+c
      if ((t/=d/2) < 1)
        return c/2 * Math.pow(2, 10 *(t - 1)) + b - c * 0.0005
      c/2 * 1.0005 *(-Math.pow(2, -10 * --t) + 2) + b
    easeOutInExpo: (t, b, c, d) ->
      if (t < d/2)
        return RZI.Tween.easingFunctions.easeOutExpo(t*2, b, c/2, d)
      RZI.Tween.easingFunctions.easeInExpo((t*2)-d, b+c/2, c/2, d)
    easeInCirc: (t, b, c, d) ->
      -c *(Math.sqrt(1 -(t/=d)*t) - 1) + b
    easeOutCirc: (t, b, c, d) ->
      c * Math.sqrt(1 -(t=t/d-1)*t) + b
    easeInOutCirc: (t, b, c, d) ->
      if ((t/=d/2) < 1)
        return -c/2 *(Math.sqrt(1 - t*t) - 1) + b
      c/2 *(Math.sqrt(1 -(t-=2)*t) + 1) + b
    easeOutInCirc: (t, b, c, d) ->
      if (t < d/2)
        return RZI.Tween.easingFunctions.easeOutCirc(t*2, b, c/2, d)
      RZI.Tween.easingFunctions.easeInCirc((t*2)-d, b+c/2, c/2, d)
    easeInElastic: (t, b, c, d, a, p) ->
      if (t==0)
        return b
      if ((t/=d)==1)
        return b+c
      if (!p)
        p=d*.3
      if (!a || a < Math.abs(c)) 
        a=c
        s=p/4
      else
        s = p/(2*Math.PI) * Math.asin(c/a)
      -(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )) + b
    easeOutElastic: (t, b, c, d, a, p) ->
      if (t==0)
        return b
      if ((t/=d)==1)
        return b+c
      if (!p)
        p=d*.3
      if (!a || a < Math.abs(c)) 
        a=c
        s=p/4
      else
        s = p/(2*Math.PI) * Math.asin(c/a)
      (a*Math.pow(2,-10*t) * Math.sin((t*d-s)*(2*Math.PI)/p ) + c + b)
    easeInOutElastic: (t, b, c, d, a, p) ->
      if (t==0)
        return b
      if((t/=d/2)==2)
        return b+c
      if(!p)
        p=d*(.3*1.5)
      if(!a || a < Math.abs(c))
        a=c
        s=p/4
      else
        s = p/(2*Math.PI) * Math.asin(c/a)
      if(t < 1)
        return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )) + b
      a*Math.pow(2,-10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )*.5 + c + b
    easeOutInElastic: (t, b, c, d, a, p) ->
      if (t < d/2)
        return RZI.Tween.easingFunctions.easeOutElastic(t*2, b, c/2, d, a, p)
      RZI.Tween.easingFunctions.easeInElastic((t*2)-d, b+c/2, c/2, d, a, p)
    easeInBack: (t, b, c, d, s) ->
      if (s == undefined)
        s = 1.70158
      c*(t/=d)*t*((s+1)*t - s) + b
    easeOutBack: (t, b, c, d, s) ->
      if (s == undefined)
        s = 1.70158
      c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b
    easeInOutBack: (t, b, c, d, s) ->
      if (s == undefined)
        s = 1.70158
      if ((t/=d/2) < 1)
        return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b
      c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b
    easeOutInBack: (t, b, c, d, s) ->
      if (t < d/2)
        return RZI.Tween.easingFunctions.easeOutBack(t*2, b, c/2, d, s)
      RZI.Tween.easingFunctions.easeInBack((t*2)-d, b+c/2, c/2, d, s)
    easeInBounce: (t, b, c, d) ->
      c - RZI.Tween.easingFunctions.easeOutBounce(d-t, 0, c, d) + b
    easeOutBounce: (t, b, c, d) ->
      if ((t/=d) <(1/2.75))
        return c*(7.5625*t*t) + b
      else if (t <(2/2.75))
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b
      else if (t <(2.5/2.75))
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b
      else
        c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b
     easeInOutBounce: (t, b, c, d) ->
       if (t < d/2)
         return RZI.Tween.easingFunctions.easeInBounce(t*2, 0, c, d) * .5 + b
       else
         RZI.Tween.easingFunctions.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b
     easeOutInBounce: (t, b, c, d) ->
       if (t < d/2)
         return RZI.Tween.easingFunctions.easeOutBounce(t*2, b, c/2, d)
       RZI.Tween.easingFunctions.easeInBounce((t*2)-d, b+c/2, c/2, d)
