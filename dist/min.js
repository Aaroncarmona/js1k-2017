k=x=>(x+360)%360;l=(x,y,z)=>x<y&&y<z;t=(x,y)=>l(0,y/6%51,1)?70:y%6&&(x+(y/6|0)%2*6)%12&&(t(x+1,y)?80:60);R=x=>x/60|0;v=[M=Math];for(p=h=120;I=u=p--;)v[p]=p*28%64<39-p/4;for(s=[e=360];e--;)for(s[e]=[f=r=1230];f--;)s[e][f]=f&&f<42&l(126,e,150)?40-e%3:v[R(f)*6+R(e)]&&(l(24,f%60,30)&l(0,e%60,36)?90:l(30,f%60,54)&l(6,e%60,30))||t(e,f);i=M.min;o=-20;$=[];onkeydown=onkeyup=e=>{$[S=e.which-37]=e.type[5]};setInterval(e=>{P=!$[0]-!$[2];n=k(n+P*4);p=-i($[1]&&h&&h--?5:10,1-p);I+=p;o+=(y=I-o)>110?y-110:y<5?y-5:0;if(u=I>1228)I=$[2]=r,p=0;if(p<0&v[R(I)*6+R(k(98+n))]&l(p,I%60-30,1)&l(0,(n+38)%60,52))I+=30-I%60,p=14;p=I>0?p:14;(x=>{for(;x--;)for(e=k(~P?x-53:69-x),y=160;y--;)f=y+o-I,w=l(I,y+o,I+24)&l(52,x,68)&!(f<0|47-e<f*2|f<20-e*3&f>e*5-4|e*2>37-f&e+4>f)?e+7-f?e*2>30-f&e+4>f?99:9:30:o<-y?9+y+o:o+y>r?u?M.atan2(120-y,x-60)*8+n/9*M.PI&1&&40:10:M.sin(a=M.acos(x/60%2-1))*40-60+s[k((1-a/M.PI)*180+n|0)][y+o],d=i(1,-i(0,M.hypot(60-x,I-y-o+12)/12-2))*h,c.fillStyle=`hsl(${240+d},25%,${w+d/6}%)`,c.fillRect(x*4,640-y*4,4,4)})(120)},n=42)