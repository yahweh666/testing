const {add,mul,cover} =require('../src/math');
const {expect,should,assert} =require('chai');

//它要通过npm test 运行，不用加run，因为test是内置的命令，不是我们自己写的
//mocha是nodejs中内置的包
describe("#math",()=>{
  describe("add",()=>{
    it('should return 5 when 2+3',()=>{
      expect(add(2,3),5);
    });
    //加it.only只检测这个
    // it.only('should return 6 when 3+3',()=>{
    //   expect(add(3,3),6);
    // });
    //跳过这个不检测 it.skip
    it('should return 7 when 4+3',()=>{
      expect(add(4,3),7);
    });
  });
  describe('mul',()=>{
    it('should return 6 when 2*3',()=>{
      expect(mul(2,3),6);
    })
  }),
  describe('cover',()=>{
    it("should return 0 when 2=2",()=>{
      expect(cover(2,2),0);
    })
  })
})

//mocha可能会检测simple.js，它无法是expect().to.be()这个语法
//改package.json中script中"test":"mocha test/mocha"
//这里没有检测