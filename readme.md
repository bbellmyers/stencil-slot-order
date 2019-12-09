## demo slot order bug


Given
ComponentA
```html
return <div><slot /></div>
```
ComponentB
```html
return <component-a><slot /></component-a>
```

Then code the following:
```html
<component-b>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</component-b>
```

Which turns into:
```html
<component-b>
  <component-a>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </component-a>
</component-b>
```
… and that turns into (note slotted items ORDER):
```html
<component-b>
  <component-a>
    <div>
      <span>2</span>
      <span>3</span>
      <span>1</span>
    </div>
  </component-a>
</component-b>
```
