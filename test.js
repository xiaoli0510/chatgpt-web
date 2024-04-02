import MarkdownIt from "markdown-it";
import "highlight.js/styles/atom-one-dark-reasonable.css"; // 选择你喜欢的highlight.js样式
import hljs from "highlight.js";

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<div class="hl-code"><div class="hl-code-header"><span>${lang}</span></div><div class="hljs">${
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
        }</div></div>`;
      } catch (__) {}
    }

    return `<div class="hljs">${hljs.highlightAuto(str).value}</div>`;
  },
});
//步骤 2: 处理`EventStream`当从`ChatGPT`的API接收到`EventStream`时，需要解析这些数据并转换为Markdown格式。这通常涉及到监听事件流，并逐步构建Markdown字符串。
eventReader = eventStream.getReader();
let markdownContent = "";
function readEvent() {
  eventReader.read().then(({ done, value }) => {
    if (done) {
      // 流结束
      renderMarkdown(markdownContent);
      return;
    }
    // 假设value是一个包含文本的聊天消息对象
    const messageText = value.text;
    // 将消息转换为Markdown格式并追加到内容字符串
    markdownContent += `>${messageText}\n\n`;

    // 继续读取下一个事件
    readEvent();
  });
}

readEvent();

function renderMarkdown(content) {
  const html = md.render(content);
  // 将HTML插入到页面的指定元素中
  document.getElementById("chat-container").innerHTML = html;
}

function updateContent(newContent) {
  markdownContent += newContent;
  const html = md.render(markdownContent);
  document.getElementById("chat-container").innerHTML = html;
}

const decoder = new TextDecoder(); // 用于解码Uint8Array
let buffer = ""; // 用于累积数据的字符串

function processUint8Array(value) {
  // 将Uint8Array转换为字符串并追加到buffer
  const chunk = decoder.decode(value);
  buffer += chunk;

  // 查找JSON对象的结束符，这里假设每个JSON对象都以'\n'结尾
  let index = buffer.indexOf("\n");
  while (index !== -1) {
    // 提取完整的JSON字符串
    const jsonStr = buffer.substring(0, index);
    // 尝试解析JSON
    try {
      const data = JSON.parse(jsonStr);
      // 处理解析后的数据
      handleData(data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    // 移除已处理的JSON字符串部分
    buffer = buffer.substring(index + 1);
    // 再次查找新的JSON对象结束符
    index = buffer.indexOf("\n");
  }
}

function handleData(data) {
  // 处理接收到的数据
  console.log("Received data:", data);
}

// 假设你通过某种方式（例如fetch API）接收到了Uint8Array数据
const eventReader = eventStream.getReader();
readFromStream(eventReader);

function readFromStream(reader) {
  reader.read().then(({ done, value }) => {
    if (done) {
      // 流已结束
      return;
    }
    // 处理接收到的数据块
    processUint8Array(value);
    // 继续读取下一批数据
    return readFromStream(reader);
  });
}


const decoder = new TextDecoder(); // 用于解码Uint8Array
let buffer = ''; // 用于累积数据的字符串

function processUint8Array(value) {
  // 将Uint8Array转换为字符串并追加到buffer
  const chunk = decoder.decode(value);
  buffer += chunk;

  // 查找JSON对象的结束符，这里假设每个JSON对象都以'\n'结尾
  let index = buffer.indexOf('\n');
  while (index !== -1) {
    // 提取完整的JSON字符串
    const jsonStr = buffer.substring(0, index);
    // 尝试解析JSON
    try {
      const data = JSON.parse(jsonStr);
      // 处理解析后的数据
      handleData(data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
    // 移除已处理的JSON字符串部分
    buffer = buffer.substring(index + 1);
    // 再次查找新的JSON对象结束符
    index = buffer.indexOf('\n');
  }
}

function handleData(data) {
  // 处理接收到的数据
  console.log('Received data:', data);
}

// 假设你通过某种方式（例如fetch API）接收到了Uint8Array数据
const eventReader = eventStream.getReader();
readFromStream(eventReader);

function readFromStream(reader) {
  reader.read().then(({ done, value }) => {
    if (done) {
      // 流已结束
      return;
    }
    // 处理接收到的数据块
    processUint8Array(value);
    // 继续读取下一批数据
    return readFromStream(reader);
  });
}