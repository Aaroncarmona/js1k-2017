k=x=>(x+360)%360;l=(x,y,z)=>x<y&&y<z;r=(x,y)=>l(0,y/6%51,1)?70:y%6&&(x+(y/6|0)%2*6)%12&&(r(x+1,y)?80:60);P=x=>x/60|0;t=[M=Math];for(p=i=120;m=I=s=p--;)t[p]=p*28%64<39-p/4;n=17;$=2;o=-20;S=[];onkeydown=onkeyup=e=>{S[R=e.which-37]=e.type[5];$=R%2?$:R};setInterval(e=>{n=k(n-!!S[0]*4+!!S[2]*4);p>-(S[1]&&i&&i--?3:10)&&p--;m+=p;o+=(y=m-o)>110?y-110:y<5?y-5:0;if(s=m>1228)m=S[2]=1230,p=0;if(p<0&t[P(m)*6+P(k(98+n))]&l(p,m%60-31,0)&l(0,(n+38)%60,52))m+=30-m%60,p=14;p=m>0?p:14;for(x=120;x--;){a=M.acos(x/60%2-1);xp=(1-a/M.PI)*180|0;for(y=160;y--;)w=l(m,y+o,m+24)&l(82,xp,98)&&(e=k($?xp-83:99-xp),f=y+o-m,f<0|47-e<f*2|f<20-e*3&f>e*5-4|e*2>37-f&e+4>f?0:e+7-f?e*2>30-f&e+4>f?99:9:30)||(o<-y?9+y+o:o+y>1230?s?M.atan2(120-y,x-60)*8+n/9*M.PI&1&&40:10:M.sin(a)*40-60+(l(18,f=y+o,20)&l(130,e=k(xp+n),133)?20:f&&f<42&l(126,e,150)?40:t[P(f)*6+P(e)]&&(l(24,f%60,30)&l(0,e%60,36)?90:l(30,f%60,54)&l(6,e%60,30))||r(e,f))),d=M.min(1,M.max(0,2-M.hypot(60-x,m-y-o+12)/12))*i,c.fillStyle=`hsl(${240+d|0},20%,${w+d/6|0}%`,c.fillRect(x*4,640-y*4,4,4)}},42)