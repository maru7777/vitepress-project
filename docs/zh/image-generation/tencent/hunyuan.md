# 腾讯 Hunyuan

## 简介

Hunyuan 是腾讯的先进 AI 图像生成模型，可以根据文本提示生成高质量图像。

## 特点

- 先进的文本到图像生成
- 多个模型版本
- 自定义风格训练
- 批量处理支持

## 使用方法

```python
from tencent_hunyuan import HunyuanClient

client = HunyuanClient(api_key="your_api_key")
response = client.generate_image(
    prompt="未来主义城市夜景",
    model_version="v2.0"
)
```

## API 参考

### 参数

| 参数 | 类型 | 描述 |
|------|------|------|
| prompt | string | 图像文本描述 |
| model_version | string | 使用的模型版本 |
| style | string | 图像风格 | 

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
  "created": 0,
  "data": [
    {
      "url": "https://example.com/image1.jpg"
    }
  ]
}
```

| 字段 | 类型 | 描述 |
|------|------|------|
| created | integer | 创建时间戳 |
| data | array | 生成的图片数组 |
| data[].url | string | 图片访问地址 | 