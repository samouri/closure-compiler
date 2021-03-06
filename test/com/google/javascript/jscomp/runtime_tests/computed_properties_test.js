/*
 * Copyright 2016 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * Tests transpilation of computed properties.
 *
 * @author moz@google.com (Michael Zhou)
 */
goog.require('goog.testing.jsunit');

function testBasic() {
  var obj = { ['f' + 1]: 1 };
  assertEquals(1, obj['f1']);
}

function testWithMethod() {
  var obj = {
    ['f' + 1]: 1,
    m() { return 2; }
  };
  assertEquals(3, obj['f1'] + obj.m());
}

function testWithGenerator() {
  var obj = {
    *["foo" + "bar"]() { yield 1; }
  };
  var gen = obj["foobar"]();
  assertEquals(1, gen.next().value);
}
