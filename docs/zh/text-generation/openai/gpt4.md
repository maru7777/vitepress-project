# OpenAI GPT-4

## 简介

GPT-4 是 OpenAI 最先进的语言模型，能够理解和生成类人文本，适用于各种任务。

## 特点

- 先进的自然语言理解
- 复杂的推理能力
- 多模态输入支持
- 广泛的知识库

## 使用方法

```python
from openai import OpenAI

client = OpenAI(api_key="your_api_key")
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "你是一个有帮助的助手。"},
        {"role": "user", "content": "用简单的语言解释量子计算。"}
    ]
)
```

## API 参考

### 参数

| 参数 | 类型 | 描述 |
|------|------|------|
| model | string | 模型标识符 (gpt-4) |
| messages | array | 消息对象数组 |
| temperature | float | 控制随机性 (0-2) |
| max_tokens | integer | 最大生成令牌数 

### 异常响应

| 错误码 | 描述 | 解决方案 |
|--------|------|----------|
| 400 | 请求参数错误 | 检查请求参数是否符合要求 |
| 401 | 认证失败 | 检查 API Key 是否正确 |
| 403 | 权限不足 | 确认账号是否有调用权限 |
| 429 | 请求频率超限 | 降低请求频率或联系客服提升配额 |
| 500 | 服务器内部错误 | 稍后重试或联系技术支持 |

### 成功响应

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "生成的回复内容"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

| 字段 | 类型 | 描述 |
|------|------|------|
| id | string | 响应ID |
| object | string | 对象类型 |
| created | integer | 创建时间戳 |
| choices | array | 生成结果数组 |
| choices[].message | object | 生成的消息 |
| choices[].message.role | string | 消息角色 |
| choices[].message.content | string | 消息内容 |
| choices[].finish_reason | string | 结束原因 |
| usage | object | 令牌使用统计 |
| usage.prompt_tokens | integer | 提示词使用的令牌数 |
| usage.completion_tokens | integer | 回复使用的令牌数 |
| usage.total_tokens | integer | 总令牌数 | 