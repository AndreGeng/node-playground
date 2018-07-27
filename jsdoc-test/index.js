/**
 * TestModule Desc
 * @namespace
 */
const TestModule = function() {

}
/**
 * static methods
 */
TestModule.hello = () => {
  console.log('hello');
}

/**
 * instance methods
 * @param str 参数1哦
 */
TestModule.prototype.world = function(str) {
  console.log(str);
}

module.exports = TestModule;
