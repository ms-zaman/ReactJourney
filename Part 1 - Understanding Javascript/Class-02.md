![JavaScript Logo](./../assests/js-banner.png)
# ফাংশান
> জাভাস্ক্রিপ্টে Function হলো First-class অবজেক্ট। এর মানে কি? এর মানে হলো, জাভাস্ক্রিপ্টের ফাংশন অন্য full-featured অবজেক্টের মতই আচরন করে, যেমন — এটাকে কোন একটা ভ্যারিয়েবলে এসাইন করা যায়, অন্য আরেকটা ফাংশনে প্যারামিটার হিসেবে পাঠানো যায়, অন্য ফাংশন থেকে ভ্যালু হিসেবে রিটার্ন করা যায়, এমনকি একটা ফাংশনের প্রপার্টি হিসেবে আরেকটা ফাংশন বা মেথড ও ডিক্লেয়ার করা যায়।

ফাংশন বলতে সাধারণত আমরা এমন একটি মেশিনের সাথে তাকে তুলনা করতে পারি যেখানে আপনি কিছু ইনপুট দিবেন আর সেটা আপনাকে আপনার মন করে আউটপুট প্রদান করবে। 

জাভস্ক্রিপ্টে ফাংশন সাধরণত নিচের মতন করে লিখে।
```js
function greet() {
  console.log('Hello, ' + name + '!');
}
```
এইটারে কল করে এইভাবে।
```js
greet('নসু');
```