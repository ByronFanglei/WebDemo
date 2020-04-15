// Buffer(缓冲区)
//   Buffer的结构和数组很像，操作方法也与数组类似，数组中不能存放二进制文件，而Buffer专门来存储二进制数据
//   在Buffer中存储的都是二进制数据，但是在显示时都是16进制的形式显示 00-ff
var str = 'hello 房磊';
//将一个字符串保存到buffer中
var buf = Buffer.from(str);
console.log(str);
console.log(buf);
console.log(str.length);
console.log(buf.length);
console.log(buf.toString());

// 创建一个指定字节的Buffer,长度确定后不能修改
const buf1 = Buffer.alloc(20);
buf1[0] = 65;
buf1[1] = 255;
buf1[2] = 0xaa;
buf1[10] = 15;
console.log(buf1);
const buf2 = Buffer.allocUnsafe(20);
console.log(buf2);
