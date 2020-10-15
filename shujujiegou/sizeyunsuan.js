// 使用数组dataStore保存栈内元素,构造函数将其初始化一个空数组
// https://www.cnblogs.com/tylerdonet/p/5816464.html
// 变量top定义栈顶的位置，构造时初始化为0，表示栈的起始位置为0
class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  // 入栈 注意++操作符的位置，它放在this.top的后面，这样新入栈的元素就放在top的当前位置，同时top自加
  push(element) {
    this.dataStore[this.top++] = element;
  }
  // 出栈 返回栈顶元素，同时top的位置-1
  pop() {
    return this.dataStore[--this.top];
  }
  // 返回栈顶元素
  peek() {
    return this.dataStore[this.top - 1];
  }
  // 清空栈
  clear() {
    this.top = 0;
  }
  // 返回栈的长度 top值即为长度
  length() {
    return this.top;
  }
  // 输出栈内元素
  printStack() {
    while (this.top > 0) {
      document.write(this.pop() + "&nbsp;&nbsp;");
    }
  }
}
document.write("<br><br>");
// 栈将中缀表达式转为后缀表达式
function suffixExpression(str) {
  let stack = new Stack();
  let outStack = new Array();
  for (let i = 0; i < str.length; i++) {
    if (")" == str[i]) {
      while (true) {
        // 如果是有括号 取左括号之前的所有符号
        // 取栈中第一个元素
        var top = stack.peek();
        // 然后删除第一个元素
        stack.pop();
        if ("(" != top) {
          // 如果不等于左括号都放在outStack中
          outStack[outStack.length] = top;
        } else {
          // 如果遇到了左括号  直接跳出循环
          break;
        }
      }
      // 如果是低级的符号 + -  如果栈顶是* / 高级符号 那将栈顶以后的所有高于等于当前低级的符号进入栈中 知道遇到小于当前等级的结束
    } else if (["+", "-"].indexOf(str[i]) > -1) {
      if (["*", "/"].indexOf(stack.peek()) > -1) {
        if (["+"].indexOf(str[i]) > -1) {
          while (["*", "/", "+"].indexOf(stack.peek()) > -1) {
            outStack[outStack.length] = stack.peek();
            stack.pop();
          }
          outStack[outStack.length] = str[i];
        } else if (["-"].indexOf(str[i]) > -1) {
          while (["*", "/", "-"].indexOf(stack.peek()) > -1) {
            outStack[outStack.length] = stack.peek();
            stack.pop();
          }
          outStack[outStack.length] = str[i];
        }
      } else {
        // 如果不是* / 直接入栈
        stack.push(str[i]);
      }
    } else if (["(", "*", "/"].indexOf(str[i]) > -1) {
      stack.push(str[i]);
    } else {
      // 如果是数字直接出栈
      outStack[outStack.length] = str[i];
    }
  }

  for (let j = 0; j < outStack.length; j++) {
    document.write(outStack[i]);
  }
}

document.write("<br><br>");
// 用栈结构求后缀表达式

function countSuggixExpression(str) {
  var stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    // 如果是符号 将左边两位计算
    if (isNaN(str[i])) {
      stack.push(eval(stack.pop() + str[i] + stack.pop()));
    } else {
      stack.push(str[i]);
    }
  }

  document.write(stack.pop());
}
