s=(x,y)=>y<0|47-x<y*2|y<20-x*3&y>x*5-4|x*2>37-y&x+4>y?0:x+7-y?x*2>30-y&x+4>y?99:9:30;h=x=>(x+360)%360;l=(x,y,z)=>x<y&&y<z;p=(x,y)=>l(18,y,20)&l(130,x,133)?20:y<36&l(126,x,150)?40:r[(y/60|0)*6+x/60|0]&&(l(24,y%60,30)&l(0,x%60,36)?90:l(30,y%60,54)&l(6,x%60,30))||y%6&&(x+(y/6|0)%2*6)%12&&80;M=Math;r=[];for(i=f=120;i--;)r[i]=(i*11+i*17)%64<39-i/4;m=17;S=2;n=-20;I=o=k=$=0;R=[];onkeydown=onkeyup=e=>{R[P=e.which-37]=e.type[5];S=P%2?S:P};setInterval(e=>{if(!$){m=h(m-!!R[0]*4+!!R[2]*4);o>-(R[1]&&f&&f--?3:12)&&o--;I+=o;if(I-n>120&o>0)n+=o;if(o<0&r[(I/60|0)*6+h(98+m)/60|0]&l(o,I%60-31,0)&l(0,52-(m+38)%60,52))I+=30-I%30,o=12;o=I>0?o:12;$|=n-I>30;for(x=120;x--;){a=M.acos(x/60%2-1);xp=(1-a/M.PI)*180|0;for(y=160;y--;)w=l(I,y+n,I+24)&l(82,xp,98)&&s(h(S?xp-83:99-xp),y+n-I)||(n<-y||n+y>1230?10:M.sin(a)*40-60+p(h(xp+m),y+n)),d=M.min(1,M.max(0,2-M.hypot(60-x,I-y-n+12)/12))*f,c.fillStyle=`hsl(${240+d|0},20%,${w+d/6|0}%`,c.fillRect(x*4,640-y*4,4,4)}}},42)