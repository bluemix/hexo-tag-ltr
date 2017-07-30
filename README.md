# hexo-tag-ltr

Force LTR layout direction when used in a mixed RTL and LTR texts

# About
> This is a [Hexo](http://hexo.io/) tag plugin for changing the direction of your writing (layout)

## Installation
```bash
npm install --save hexo-tag-ltr
```

## Usage

```bash
{% ltr %}
  LTR text
{% endltr %} 
```
## Example

this is a Arabic document, but wants to have and LTR direction

```
مقتطفات من بعض الحكم

{% ltr %}
“A small leak will sink a great ship.” - Benjamin Franklin
{% endltr %}

"لو أنك عشتَ في الماضي و تصرفت كأنك في الماضي ، سوف يكون صعباً على المُستقبلِ أن يراكَ." - Body of Lies
```

which results in
![screenshot.png](screenshot.png)


## Authors

[blueMix](http://bluemix.me)