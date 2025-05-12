# Tencent Hunyuan

## Introduction

Hunyuan is Tencent's advanced AI image generation model that produces high-quality images from text prompts.

## Features

- Advanced text-to-image generation
- Multiple model versions
- Custom style training
- Batch processing support

## Usage

```python
from tencent_hunyuan import HunyuanClient

client = HunyuanClient(api_key="your_api_key")
response = client.generate_image(
    prompt="A futuristic cityscape at night",
    model_version="v2.0"
)
```

## API Reference

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| prompt | string | Text description of the image |
| model_version | string | Model version to use |
| style | string | Image style |

### Error Response

| Error Code | Description | Solution |
|------------|-------------|----------|
| 400 | Invalid request parameters | Check if parameters meet requirements |
| 401 | Authentication failed | Check if API Key is correct |
| 403 | Insufficient permissions | Confirm account has calling permissions |
| 429 | Request rate limit exceeded | Reduce request frequency or contact support for quota increase |
| 500 | Internal server error | Retry later or contact technical support |

### Success Response

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

| Field | Type | Description |
|-------|------|-------------|
| created | integer | Creation timestamp |
| data | array | Generated images array |
| data[].url | string | Image access URL | 