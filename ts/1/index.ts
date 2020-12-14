// ts的基本类型
// let name = 'qiuzhi99'
// name = 'hello'
// console.log(name)
// const username = 'qiuzhi99'
// username = 'aaa'
// let age = 19;
// // 还是不行  它会自动推导出来类型
// age = 'hello'
// export {}


// 数组和对象
// let languages = ['dart','ruby','js','python']
// console.log(languages[0])
// languages.push(1)
// let staffs = ['ruby',1,false]
// staffs.push(1)
// staffs.push(true)


// 对象
let o = {
  name:'ruby',
  age:10,
  color:'yellow'
}

// o = {
//   name:'ruby',
//   age:10,
//   color:'yellow',
//   // other:'12'
// }
// 缺少属性也不行
// o = {
//   name:'value'
// }
o.age = 90


// sudo yum install build-essential libc6 libpcre3 libpcre3-dev libpcrecpp0 libssl0.9.8 libssl-dev zlib1g zlib1g-dev lsb-base openssl libssl-dev  libgeoip1 libgeoip-dev  google-perftools libgoogle-perftools-dev libperl-dev  libgd2-xpm-dev libatomic-ops-dev libxml2-dev libxslt1-dev python-dev
// ./configure  --prefix=/etc/nginx        --sbin-path=/usr/sbin/nginx  --conf-path=/etc/nginx/nginx.conf     --pid-path=/var/run/nginx.pid          --lock-path=/var/run/nginx.lock        --error-log-path=/var/log/nginx/error.log  --http-log-path=/var/log/nginx/access.log  --with-http_gzip_static_module --with-http_stub_status_module         --with-http_ssl_module                --with-pcre                          --with-file-aio  --with-http_realip_module    --without-http_scgi_module     --without-http_uwsgi_module --with-http_fastcgi_module         
let nums:number[] = [1,2]
let nums1:Array<number> = [1,2]
// 联合类型
// 任何对象类型都可
let o1:Object;
o1 = {
  name:'ruby',
  age:18
}
o1 = {
  name:'java',
  tags:[1,2,3]
}

// 元祖 tuple
let my_tuple:[string,number] ;
my_tuple = ['12',12] 
console.log(my_tuple[0])

// 函数
export {}
