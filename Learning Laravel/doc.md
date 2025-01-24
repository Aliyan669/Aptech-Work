## Laravel Documentation

Laravel is a free and open-source PHP-based web framework for building web applications.It was created by Taylor Otwell and intended for the development of web applications.
Laravel Initial release date: June 2011.
The latest version of Laravel is Laravel 11.

Before working with Laravel, you need two things: first, Composer; second, PHP.

## What is Composer?

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
<b>Controller:</b> Handle user interaction and select to view to render, communicate Model and View.

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

## Subview in laravel?

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

## Components in Laravel?

Components is piece of code that can reused in our project.

Components Create:

```
php artisan make:component AlertMsg
```

Two files will be created: one in the views folder and another in the app folder, and inside that, a views folder will be created with a file inside it.

Then we will use these components in the file where they are needed.

```
<x-alert-msg />
```

It also creates the same dynamic components:

```
<x-alert-msg msg="This is ok!" />
```

Get in <b>Directory: </b>resources/views/components/alert-msg.blade.php

```
<h1>{{$msg}}</h1>
```

write a code in <b>Directory: </b> app/View/Components AlertMsg.php
public $msg;<br/>
__construct function me pararmeter me ye ayega: ($msg) <br/>
then function ke andar ye: $this->msg = $msg;

## Form Handling in Laravel:

<b>File:</b> user-form.blade.php:

```
<div>
    <form action="adduser" method="post">
  @csrf
    <div class="input-wrapper">
        <input type="text" placeholder="Enter User name" name="username">
    </div>
    <div class="input-wrapper">
        <input type="email" placeholder="Enter Email" name="email">
    </div>
    <div class="input-wrapper">
       <button>Add User</button>
    </div>
    </form>
</div>
```

```
php artisan make:controller UserController
```

<b>File: </b>UserController.php:

```
public function addUser(Request $request){
     echo 'Add User';
     echo "Username is: $request->username";
     echo "Email is: $request->email";
}
```

<b>Directory: </b>routes/web.php:

```
Route::view('/user-form','user-form');
Route::post('adduser',[UserController::class, 'addUser']);
```

## Form Validation in Laravel:

<b>File:</b>UserController.php:

```
public function addUser(Request $request){
     // Form Validation ke liya ye use hota he
        $request->validate([
          'username' => 'required | min:3 | max:6' ,
          'email' => 'required | email',
        ],[

        // Custom Validation Messsage
          'username.required'=>'username cannot be empty',
          'email.email'=> 'email is not valid',
        ]);
}
```

<b>File: </b>user-form.blade.php:

```
<div>
    <form action="adduser" method="post">
  @csrf
    <div class="input-wrapper">
        <input type="text" placeholder="Enter User name" name="username">
        <span style="color:red"> @error('username'){{$message}}@enderror</span>
    </div>
    <div class="input-wrapper">
        <input type="text" placeholder="Enter Email" name="email">
        <span style="color:red">  @error('email'){{$message}}@enderror</span>
    </div>
    <div class="input-wrapper">
       <button>Add User</button>
    </div>
    </form>
</div>
```

## Url Generation in Laravel?

URL generation is a feature in Laravel that simplifies the process of creating routing links and URLs.

```
<h3>{{url()->current()}}</h3>    // Current
<h3>{{url()->full()}}</h3>       // Full
<h3>{{url()->previous()}}</h3>   // Previous
```

## What is Named Routes in laravel?

In Laravel, a "Named Route" is a way to assign a unique name to a route, allowing you to easily generate URLs or redirects to that specific route within your application by referencing.

Named Routes:

```
Route::view('/home/grand/view','home')->name('hm');
<a href="{{route('hm')}}">Home Page</a>
```

## What is Routing group with Prefix?

A routing group with prefix in Laravel is a way to group routes that share common features, such as a prefix, and organize code.

Old Method:

```
Route::view('/Dashboard/home','home');
Route::get('/Dashboard/homepage',[MyController::class, "DashHome"]);
Route::get('/Dashboard/about',[MyController::class, "DashAbout"]);
```

New Method: (Routing group with Prefix)

```
Route::prefix('Dashboard')->group(function(){
     Route::view('/home','home');
     Route::get('/homepage',[MyController::class, "DashHome"]);
     Route::get('/about',[MyController::class, "DashAbout"]);
});
```

## What is Route Group with Controller? (Available in upto laravel version:9)

A route group with controller in Laravel is a way to define a common controller for a group of routes. This method reduces repetition and makes code cleaner.

Old Method:

```
Route::get('/student/list',[StudentController::class, "List"]);
Route::get('/student/add',[StudentController::class, "Add"]);
Route::get('/student/delete',[StudentController::class, "Delete"]);
```

New Method: (Route Group with Controller)

```
Route::controller(StudentController::class)->group(function(){
     Route::get('/student/list', "List");
     Route::get('/student/add',"Add");
     Route::get('/student/delete', "Delete");
});
```

## What is middleware in laravel?

Middleware in Laravel is a way to filter and inspect HTTP requests that enter an application.

<b>Type of Middleware:</b>

1. Global Middleware.
2. Route Middleware.
3. Group Middleware.

Middleware Create:

```
php artisan make:middleware AgeCheck
```

<b>Middlware Directory:</b> app/Http/Middleware/AgeCheck.php

<b>Second Middleware directory:</b> bootstrap/app.php

Inside Directory: bootstrap/app.php

```
use App\Http\Middleware\AgeCheck;      (Top of the Page)

->withMiddleware(function (Middleware $middleware) {
        $middleware->append(AgeCheck::class);
});
```

Inside Directory: app/Http/Middleware/AgeCheck.php<br/>

Put inside the handle function:

```
print_r($request->age);
     if($request->age<18){
         die("You can not visit this site");
}
```

## What is Middleware Group in Laravel?

In Laravel, a middleware group is a collection of middleware that are assigned to a group of routes.

<b>Single Route Middleware Grouping:</b><br/>
Inside Directory: bootstrap/app.php

```
use App\Http\Middleware\AgeCheck;     (Top of the Page)
->withMiddleware(function (Middleware $middleware) {
        $middleware->appendToGroup('check',[
        AgeCheck::class
]);
})
```

<b>Directory:</b> routes/web.php

```
Route::view('/home','home')->middleware('check');
```

<b>Group Route Middleware Grouping:</b><br/>
<b>Directory:</b> routes/web.php

```
Route::middleware('check')->group(function(){
    Route::view('/home','home');
    Route::view('/about','about');
})
```

<b>Assigning Middleware to Routes:</b>
<b>Directory:</b> routes/web.php

```
use App\Http\Middleware\AgeCheck;     (Top of the Page)
```

<b>Single Middleware Assign:</b>

```
Route::view('/home','home')->middleware(AgeCheck::class);
```

<b>Multiple Middleware Assign:</b>

```
Route::view('/home','home')->middleware([AgeCheck::class, CountryCheck::class]);
```


