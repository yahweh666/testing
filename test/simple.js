const {add,mul} =require('../src/math');
const assert =require('assert');//断言
const chai =require('chai');

// assert.equal(add(1,2,3),6); //还有一个参数message，输出的内容

// chai.should();
// add(2,5).should.equal(5);

var expect =chai.expect;
expect(add(2,3)).to.equal(5);

//mocha可能会检测simple.js，它无法是expect().to.be()这个语法
//改package.json中script中"test":"mocha test/mocha"
//这里没有检测