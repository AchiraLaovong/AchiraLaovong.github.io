# Custom Font Setup Guide

## 📁 Where to Put Custom Fonts

I've created a `public/fonts/` directory for your custom font files. Here's the recommended structure:

```
public/
  fonts/
    YourFontName/
      YourFontName-Regular.woff2
      YourFontName-Bold.woff2
      YourFontName-Light.woff2
      YourFontName-Medium.woff2
```

## 🎯 Font File Formats (Recommended Order)

1. **WOFF2** (Web Open Font Format 2) - Best compression, modern browsers
2. **WOFF** (Web Open Font Format) - Good compression, wider browser support
3. **TTF/OTF** - Fallback for older browsers

## 🔧 How to Add Your Custom Font

### Step 1: Add Font Files
Place your font files in `public/fonts/YourFontName/`

### Step 2: Update CSS (in globals.css)
Replace the example @font-face declarations with your actual font:

```css
@font-face {
  font-family: 'YourFontName';
  src: url('/fonts/YourFontName/YourFontName-Regular.woff2') format('woff2'),
       url('/fonts/YourFontName/YourFontName-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Step 3: Update Tailwind Config
Change 'CustomFont' to your actual font name in tailwind.config.js:

```javascript
fontFamily: {
  'zzz': ['YourFontName', 'Arial', 'sans-serif'],
  'zzz-custom': ['YourFontName', 'sans-serif'],
}
```

## 🎨 How to Use Custom Fonts in Components

### Option 1: Using Tailwind Classes
```jsx
<h1 className="font-zzz-custom text-4xl">Your Custom Font Text</h1>
```

### Option 2: Direct CSS
```css
.custom-heading {
  font-family: 'YourFontName', sans-serif;
}
```

## 🌐 Alternative: Google Fonts

### Method 1: Add to public/index.html
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Method 2: CSS Import (in globals.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

## 📝 Font Loading Best Practices

1. **Use font-display: swap** - Prevents invisible text during font load
2. **Preload critical fonts** - Add to HTML head:
   ```html
   <link rel="preload" href="/fonts/YourFont-Regular.woff2" as="font" type="font/woff2" crossorigin>
   ```
3. **Optimize file sizes** - Use WOFF2 format when possible
4. **Provide fallbacks** - Always include system fonts as fallbacks

## 🔍 Testing Your Fonts

After adding your fonts:
1. Clear browser cache
2. Check browser DevTools → Network tab to see if fonts load
3. Test on different devices and browsers
4. Verify fallback fonts work if custom font fails to load
