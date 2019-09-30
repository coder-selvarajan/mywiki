---
id: setup
title: Python Setup
---

_Notes from 'Programming with Mosh' & 'Code Dojo' youtube channel_

- Install **Python 3.7** from https://www.python.org/ 
- **VS-Code** Setup
  - Install Python extention from Microsoft
  - Install PyLint extention for Syntax highlighting
  - Install Formatter - Pep8Style to format python code according to PEP8 standards
  - Install 'Code Runner' extension

> With VS Code we can setup to format the page while we save the file, with preference menu.

### Django Setup

  - **pip3** - package manager for python. Its already available with python installation. <br/>
     - **Pipenv** is used to create virtual environment. Install pipenv via **pip3** <br/>
        `pip3 install pipenv`
  - Create a folder 'test_django' and run this command under the folder <br>
        `pipenv install django==2.1`
  - Pipfile and Pipfile.lock files will be created in that folder
  - Run  -  `pipenv shell`
  - Run this command to create the django project - `django-admin startproject django-project1 .`
  - Run `python manage.py runserver` to start the development server at  http://127.0.0.1:8000/
    You may see the common page in the url. 
  - Run this command to create **hello** app - `python manage.py startapp hello`
  - Open 'test_django' folder in VS Code and edit `settings.py` file - add "hello" entry under "INSTALLED_APPS" array.
  - Add the below code to create a view in **hello** app and configure the url. Then access http://127.0.0.1:8000/sayHello and view the app.

**/hello/views.py**
```python
from django.http import HttpResponse
def myView(request):
      return HttpResponse('Hello, World!')
```

**/django_project1/urls.py**
```python
from hello.views import myView

urlpatterns = [
      path('admin/', admin.site.urls),
      path('sayHello/', myView),
]
```

**Online courses**  

https://www.learnpython.org/  
https://www.udemy.com/python-for-data-science-and-machine-learning-bootcamp/  
https://www.udemy.com/machinelearning/  
https://courses.learncodeonline.in/learn/Machine-Learning-Bootcamp  

