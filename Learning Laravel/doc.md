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

laravel file Extension Example:<br/>
.blade.php


## What is MVC?

MVC stands for Model-View-Controller, a software design pattern that separates an application into three parts: the model, view, and controller.<br/> 
<b>Model:</b> write business login, database communication.<br/> 
<b>View:</b> User Interface (Code we write to display on UI).<br/> 
<b>Controller:</b> Handle user interaction  and select to view to render, communicate Model and View.


## View in Laravel?
Views are typically written in Blade, a templating engine provided by Laravel. Blade allows you to create dynamic and reusable HTML templates

Create File Manually:<br/>
<b>Directory: </b> resources/view

Create File in Command:<br/>
```
php artisan make:view Home
```

## Routing in Laravel?
Routing in Laravel is the process of mapping HTTP requests to the actions that an application should take.

Routing: Access Page in URL.<br/>
<b>Directory: </b>routes/web.php

New Route Create Code:
```
Route::get('/home', function () {
    return view('home');
});
```

Shorthand Code:
```
Route::view('/home','home');
```

Dynamic Data Get Route:
```
Route::get('/about/{name}', function ($name) {
    return view('about',['name' => $name]);
});
```

About file Get Dynamic Value:
```
<h1>{{$name}}</h1>
```

Redirecting in laravel:
```
route::redirect('/home','/about');
```

Routing Methods in Laravel:
```
Route::get('$uri',$callback);
Route::post('$uri',$callback);
Route::put('$uri',$callback);
Route::patch('$uri',$callback);
Route::delete('$uri',$callback);
Route::options('$uri',$callback);
Route::view('$uri',$callback);
Route::redirect('$uri',$callback);
```


## Controller in Laravel?
A Controller in Laravel is a PHP class that manages HTTP requests and the application's response. Controllers are a key part of the Model-View-Controller (MVC) architectural pattern. 

Create Controller:
```
php artisan make:controller MyController
```

Controller Code:
```
public function Home(){
     return view('home');
}
```

Controller Access in Route code:
```
use App\Http\Controllers\MyController;  (Import at the top of the file.)
Route::get('/home',[MyController::class, "Home"]);
```

Nested Folder Routing:
```
public function AdminLogin(){
     return view('admin.login');   (. used it)
}
```


For the Laravel, if else, for loop and the foreach loop will start from @.

## Subview in laravel
A subview is a view that is included within another view, allowing for modular and reusable code.
Same include in Php.
```
@include('common.header');
```

Passing Data with the help of Include:
```
@include('common.header',['name' =>"Aliyan"]);
```

Data Get in Header File:
```
<div>
    <p>Hello, {{ $name }}!</p>
</div>
```