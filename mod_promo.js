__gjsload_maps2__('promo', 'GAddMessages({});\'use strict\';function FHa(a,b,c,d,e,f,g){this.id=a;this.F=g;this.Sv=b;this.o=c;this.j=d;this.C=e;this.BB=f} function GHa(a,b,c,d,e,f){this.Z=b;this.Na=sa(this);this.J=c;b=e&&Di(zi);switch(d){case "left":this.zc=b?1:0;break;case "right":this.zc=b?0:1;break;case "bottom_left":this.zc=2;break;case "top":this.zc=3}this.o=a;this.C=[];this.H="";this.F=f||HHa()} var HHa=function(){return new FHa("promo",-27,-24,4,new G(11,17),!1,IHa)},JHa=["bubble-point-white-right", "bubble-point-white-left","bubble-point-white","bubble-point-white-down"];m=GHa.prototype; m.show=function(a){if(!this.j&&this.Z){var b=this.F.id;this.j=$r(b,this.F.F);a.appendChild(this.j);this.I=this.o.Ab(this.j);var c=new Pq;c.Fa("id",b+"-"+this.Na);c.Fa("useDivShadows",1==I.type);c.Fa("arrowClass",JHa[this.zc]);Qq(c,this.j);c=T(b+"-"+this.Na+"-arrow-img");b=T(b+"-"+this.Na+"-promo-wrapper");Ft(b);b.appendChild(this.J);var b=this.j,d=this.Z,e=this.zc,f=this.F,g=lm(d,a),k=g.copy(),l=!0,n=!0;switch(e){case 0:g.x=a.offsetWidth-g.x-f.j;g.y+=f.Sv;break;case 1:g.x+=d.offsetWidth;g.y+=f.Sv; l=!1;break;case 2:g.x=a.offsetWidth-g.x-d.offsetWidth/2+f.o;g.y=g.y+d.offsetHeight-f.j;n=!1;break;case 3:g.y=g.y-b.offsetHeight,n=l=!1}$k(b,g,l);f.BB&&n&&(hl(c,(b.offsetHeight-f.C.height)/2),hl(b,k.y-b.offsetHeight/2+d.offsetHeight/2))}}; m.hide=function(){this.j&&(this.o.Lq(this.I),Gt(T(this.F.id+"-"+this.Na+"-promo-wrapper",void 0)),Qk(this.j),this.j=null)}; m.getElement=h("j");m.Yx=function(a){this.H=!0;var b=N(document.body,"click",this,this.aI);this.C.push(b);b=H(a.U(),"zoominbyuser",this,this.cancel);this.C.push(b);b=H(a.U(),"zoomoutbyuser",this,this.cancel);this.C.push(b);a=H(a.U(),"streetviewopen",this,this.cancel);this.C.push(a);L(document.getElementById("spsizer"),"scroll",v(this.cancel,this))}; m.aI=function(a){Rk(T(this.H),fm(a))||this.cancel()}; m.cancel=function(){for(var a=0;a<this.C.length;++a)K(this.C[a]);this.C=[];this.hide()};function IHa(){Js();return\'<div id="promo" jsattrs="id: id" class="promo-dialog" jsnamespace="promo"><div class="promo-inner kd-bubble"><img src="//maps.gstatic.com/mapfiles/transparent.png" alt=""jsattrs="id: id + \\\'-arrow-img\\\';class: arrowClass"jsaction="mouseover: mouseOver;mouseout: mouseOut" /><div class="promo-wrapper" jsattrs="id: id + \\\'-promo-wrapper\\\'"jsaction="mouseover: mouseOver;mouseout: mouseOut"><img src="//maps.gstatic.com/mapfiles/transparent.png" alt=""class="promo-wrapper-img" /></div></div></div>\'} ;W("promo",1,GHa);W("promo",3,HHa);W("promo",2,FHa);W("promo");', '.promo-dialog{position:absolute;z-index:1001}.promo-inner{margin:11px}.promo-wrapper-img{position:absolute;width:100%;height:100%;left:0;top:0;z-index:-1}.promo-wrapper{padding:15px;position:relative}', []);