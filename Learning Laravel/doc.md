## Laravel Documentation

Laravel is a free and open-source PHP-based web framework for building web applications.It was created by Taylor Otwell and intended for the development of web applications.
Laravel Initial release date: June 2011.
The latest version of Laravel is Laravel 11.

Before working with Laravel, you need two things: first, Composer; second, PHP.


## Composer 

Composer is an application-level dependency manager for the PHP programming language that provides a standard format for managing dependencies of PHP software and required libraries.
Manually Install on Website link:
```
https://getcomposer.org/download/
```

The command prompt should be used to globally install Laravel using Composer, but first, the versions of Composer and PHP should be the latest.

```
composer global require laravel/installer
```

How to Check Laravel Version & Install:
```
laravel -v 
```

Create Laravel Project any Directory:
```
laravel new aliyan_laravel
cd aliyan_laravel
```

Laravel Project Run:
```
php artisan serve
```

laravel file Extension Example:
.blade.php


## What is MVC?

MVC stands for Model-View-Controller, a software design pattern that separates an application into three parts: the model, view, and controller.<br/> 
<b>Model:</b> write business login, database communication.<br/> 
<b>View:</b> User Interface (Code we write to display on UI).<br/> 
<b>Controller:</b> Handle user interaction  and select to view to render, communicate Model and View.