# Alibaba Wanx

## Introduction

Wanx is Alibaba's AI image generation model that can create high-quality images from text descriptions.

## Features

- Text-to-image generation
- Image-to-image generation
- High resolution output
- Multiple style options
- Fast generation speed

## Model Introduction

| Model Name | Sub-model | Description |
|------------|-----------|-------------|
| Tongyi Wanxiang 2.1 | wanx2.1-t2i-turbo | Faster generation speed, general-purpose model |
| Tongyi Wanxiang 2.1 | wanx2.1-t2i-plus | Richer image details, slightly slower, general-purpose model |
| Tongyi Wanxiang 2.0 | wanx2.0-t2i-turbo | Good at portrait and creative design, medium speed, cost-effective |

![Tongyi Wanxiang](/images/通义万相-文生图.jpg)

## Usage

```python
from alibaba_wanx import WanxClient

client = WanxClient(api_key="your_api_key")
response = client.generate_image(
    prompt="A beautiful sunset over mountains",
    style="realistic"
)
```

## API Reference

### Request Parameters

| Parameter | Type | Description | Required | Example |
|-----------|------|-------------|----------|---------|
| model | string | Image text description | Yes | wanx2.1-t2i-turbo  wanx2.1-t2i-plus  wanx2.0-t2i-turbo |
| prompt | string | Model name | Yes |
| style | string | Image style (realistic, anime, etc.) | Yes |
| size | string | Output image size | Yes |
| negative_prompt | string | Negative prompt to describe content not wanted in the image. Supports Chinese and English, max 500 characters. | No | low resolution, error, worst quality, low quality, incomplete, extra fingers, bad proportions |
| size | string | Output image resolution. Default is 1024*1024. Image width/height range: [512, 1440] pixels. Can be combined for different resolutions, up to 2 million pixels. | No | 1024*1024 |
| n | integer | Number of images to generate. Range: 1-4. | No | 1 |
| seed | integer | Random seed for controlling generation randomness. Range: [0, 2147483647]. If not provided, algorithm generates random seed. For n>1, seeds will be seed, seed+1, seed+2, etc. Use same seed for stable results. | No | 123456 |
| prompt_extend | bool | Enable smart prompt rewriting. Uses large model to enhance input prompt, only for positive prompts. Improves results for short prompts but adds 3-4s delay. Default: true. | No | true |
| watermark | bool | Add watermark in bottom right corner with text "AI Generated". Default: false. | No | false |

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