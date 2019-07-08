# Pyscript

Pyscript is the attempt to execute python code from javascript. 

# Execute python code within Javascript
step1: Go to my website https://hayatonagasaki.github.io/pyscript/Pyscript_Test.html <br>
step2: Open "Inspect" on your browser, and go to Console <br>
step3: Put following command <br>
```
var script = document.createElement('script');
script.type = 'text/pyscript';
script.innerHTML = 'print("here will be"); print("your python space")'
document.head.appendChild(script);
```


# References
http://luizricardo.org/2014/02/running-python-or-any-language-in-your-browser/

http://utluiz.github.io/pyscript/
