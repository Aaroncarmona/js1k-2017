S=30;b=60;n=x=>(x+$)%$;k=(x,y,z)=>x<y&&y<z;v=(x,y)=>k(0,y/6%51,1)?70:y%6&&(x+(y/6|0)%2*6)%12&&(v(x+1,y)?80:b);R=x=>x/b|0;T=[M=Math];for(s=I=120;o=C=s--;)T[s]=s*28%64<39-s/4;for(u=[e=$=360];e--;)for(u[e]=[f=t=1231];f--;)u[e][f]=f&&f<42&k(126,e,150)?40-e%3:T[R(f)*6+R(e)]&&(k(24,f%b,S)&k(0,e%b,36)?90:k(S,f%b,54)&k(6,e%b,S))||v(e,f);l=M.min;r=-20;i=[];onkeydown=onkeyup=e=>{i[h=e.which-37]=e.type[5]};setInterval(e=>{P=!i[0]-!i[2];p=n(p+P*4);s=-l(i[1]&&I&&I--?5:10,1-s);o+=s;r+=(y=o-r)>110?y-110:y<5?y-5:0;if(C=o>1228)o=i[2]=t,s=0;if(s<0&T[R(o)*6+R(n(98+p))]&k(s,o%b-S,1)&k(0,(p+38)%b,52))o+=S-o%b,s=14;s=o>0?s:14;(x=>{for(;x--;)for(e=n(~P?x-53:69-x),y=160;y--;c.fillRect(x*4,640-y*4,4,4))z=r+y,w=k(0,f=z-o+M.sin(x/2)*(14-M.abs(s))/8|0,24)&k(52,x,68)&!(f<0|47-e<f*2|f<20-e*3&f>e*5-4|e*2>37-f&e+4>f)?e+7-f?e*2>S-f&e+4>f?99:9:S:z<0?9+z:z>t?C?M.atan2(120-y,x-b)*8+p/9*M.PI&1&&40:10:M.sin(a=M.acos(x/b%2-1))*40-b+u[n((1-a/M.PI)*180+p|0)][z],d=l(1,-l(0,M.hypot(b-x,12-z+o)/12-2))*I,c.fillStyle=`hsl(${240+d},25%,${w+d/6}%)`})(120)},p=42)