- ms guide
  https://code.visualstudio.com/docs/languages/markdown

* makrdown All in One :
  https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one

* markdownlint :
* https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md010  

* table generator 
  https://www.tablesgenerator.com/markdown_tables
### git push source code:
    • 1) github push :
    • server$git status   $git add --all (incl subdir) 
    • $ git add . (file in only current current ro792,3701ot dir)
    • $ git commit -m “dkakdk”
    •  server$ git remote add origin 
      https://github.com/blockchain99/FullstackWebNodeJSReactExpressMongo.git
    • $git push -u origin master  → error →$ git push  -f origin master 
http://localhost:3000/surveys/new
- keyboard shortcut
  - Table

| Key              | Command                      |
| ---------------- | ---------------------------- |
| Ctrl + B         | Toggle bold                  |
| Ctrl + I         | Toggle italic                |
| Alt + S          | Toggle strikethrough         |
| Ctrl + Shift + ] | Toggle heading (uplevel)     |
| Ctrl + Shift + [ | Toggle heading (downlevel)   |
| Ctrl + M         | Toggle math environment      |
| Alt + C          | Check/Uncheck task list item |
| Ctrl + Shift + V | Toggle preview               |
| Ctrl + K V       | Toggle preview to side       |



- table formatter -> block , then, alt + shift + i
  
| Left | Center | right |
| :--- | :----: | ----: |
| 1    |   2    |     3 |
| 45   |   67   |    89 |

| Tables   |      Are      |  Cool |
| -------- | :-----------: | ----: |
| col 1 is | left-aligned  | $1600 |
| col 2 is |   centered    |   $12 |
| col 3 is | right-aligned |    $1 |


| Column 1   | Column 2   | Column 3                     |
| ---------- | ---------- | ---------------------------- |
| **Things** | _Don't_    | [Need](http://makeuseof.com) |
| To         | *__Look__* | `Pretty`                     |


# markdown cheet sheet
## Basic Elements 
- H1 to H6 Headings	
# Heading Text
## Heading Text
### Heading Text
#### Heading Text
##### Heading Text
###### Heading Text

* Italics	*This text is italicized*
  
* Bold	**This text is bold**
  
* Blockquote	
> Blockquote paragraphs must have
> a right-arrow bracket at the start
> 
> of every single line.
>
> Use a blank line for multiple paragraphs.

* Unordered List
- Bullet list item
- Bullet list item
- Bullet list item
  - Use a two-space indent for nested lists
* Ordered List	
1. Bullet list item
2. Bullet list item
3. Bullet list item
   1. Ordered lists can also be nested
   2. Ordered lists nested two.
   
* Mixed List	
1. Can you mix list types?
  - Yes, you can!
  
* Horizontal Line	
---
***

___

Note: Either three hyphens, asterisks, or underscores.

* Hyperlink	
  
This is an [example link](//www.makeuseof.com)

* Image	

![Alt Text](http://example.com/image/path.png)

* Ignore Markdown	

Prefix Markdown characters with \*backslashes\* to ignore formatting.
 	
## Extended Elements

* Code (Inline)	
  
`This is inline code`

* Code (Block)	

```
This is a block of code
It supports multiple lines
```

* Strikethrough	

 ~~This text is crossed out~~

* Hard Line Break	

This is some text\
This text is a new line, not a new paragraph

* Table	
  
| First Header     | Second Header    |
| ---------------- | ---------------- |
| Content cell 1   | Content cell 2   |
| Content column 1 | Content column 2 |

Note: Preceding blank line is necessary.

* Task Lists	

- [x] Completed task item
- [ ] Unfinished task item
- [ ] \(Optional) Mark parentheses to be ignored

* Mention	
  
You can mention @users and @teams on GitHub. Mainly useful when submitting or commenting on bugs and issues.

* Emoji	
  
:smile:

Note: Emoji codes can be found in the emoji cheat sheet.

Note: Nearly all flavors of Markdown support the basic elements, but the extended elements are only supported by more advanced forms of Markdown, including CommonMark and GitHub Flavored Markdown.

  
  
