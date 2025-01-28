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
use App\Http\Middleware\AgeCheck;      (Top of the Page)

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

## Connect to MySQL Database on Laravel:

Create a Database in MySQL.

update .env file:

```
DB_CONNECTION=sqlite  (Old)
DB_CONNECTION=mysql   (Update)
```

Set Database Name and create a same name on mysql database and uncomment Code.

## Schema Length Issue ke Liya:

<b>Directory:</b> app/Providers/AppServiceProvider.php

```
use Illuminate\Database\Schema\Builder;     (Top of the Page)

public function boot(): void
{
        Builder::defaultStringLength(191);
}
```

## What is Migrate & Migration in Laravel?

Migrations are like version control for your database, allowing a team to easily modify and share the application's database schema.

Migrate:

```
php artisan migrate
```

Updating Miggration:

```
php artisan migrate:refresh
```

Create UserController.php file

```
use Illuminate\Support\Facades\DB;        (Top of the Page)

public function Users(){
        return DB::select('select * from users ');      (Data Get on MySQL)
}
```

## Display Datbase Data on UI:

<b>Create a View File:</b> users.blade.php <br/>
<b>Create a Controller:</b> UserController.php

<b>File:</b> UserController.php:

```
public function Users(){
        $user= DB::select('select * from users ');
        return view('users',['users'=> $user]);
}
```

<b>File:</b> users.blade.php:

```
<div>
    <h1>User List</h1>
    <table border="1">
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
        </tr>

        @foreach ($users as $users)
            <tr>
                <td>{{$users->name}}</td>
                <td>{{$users->email}}</td>
                <td>{{$users->password}}</td>
            </tr>
        @endforeach

    </table>
</div>
```

## What is Eloquent Model in Laravel?

Eloquent is an object relational mapper (ORM) that is included by default within the Laravel framework.

## What is Model in Laravel?

Models in Laravel serve as the link between your application and your database, making data handling much more straightforward, On the other hand, Views in Laravel manage the user-facing side of the application.

First Create a table in database & Controller then Modal Create.
Modal Create:

```
php artisan make:model student
```

<b>Directory:</b> app/model/student/php:
Put this Line in Function for the Table Connectivity.

```
protected $table = 'students';
```

<b>File:</b> StudentController.php:

```
function getStudent(){
        $student = \App\Models\Student::all();
        return view('student',['data'=>$student]);
}
```

<b>File:</b> student.blade.php:

```
<div>
    <h1>Student List</h1>
    <table border="1">
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
        </tr>

        @foreach ($data as $student)
            <tr>
                <td>{{$student->name}}</td>
                <td>{{$student->email}}</td>
                <td>{{$student->password}}</td>
            </tr>
        @endforeach

    </table>
</div>
```

## What is Inspecting Model?

Showing Detail On Database.

```
php artisan model:show student
```

## What is Http Client?

An "HTTP Client" is a software application that uses the Hypertext Transfer Protocol (HTTP) to send requests to a web server and receive responses.<br/>
<b>Api:</b> Application Prgramming Interface.<br/>
Api Store Json format Data.

First Controller Create:

```
public function getUser(){
        $response= Http::get('https://jsonplaceholder.typicode.com/users/1');
        return $response;
}
```

Route Create:

```
Route::get('/userapi',[UserApi::class, 'getUser']);
```

## Database: Query Builder:

## What is Query Builder in Laravel?

Laravel's database query builder provides a convenient, fluent interface to creating and running database queries.

Crate a Controller:

```
use Illuminate\Support\Facades\DB;         (Top of the Page)

public function query(){

        $result = DB::table('user')-> get();
        $result = DB::table('user')-> where('phone', '1234')->get();
        $result = DB::table('user')-> first();
        $result = [$result];

        $result = DB::table('user')->insert([
         'name' => 'tony',
         'email' => 'tony@gmail.com',
         'phone' =>'1111'

        ]);

        if($result){
          return "Data Inserted";
         } else{
          return "Data not Inserted";
         }


        return DB::select('select * from users ');      (Data Get on MySQL)
}
```

## What is Eloquent model: Query Builder?

Eloquent model as a powerful query builder allowing you to fluently query the database table associated with the model.

First create a Model, second controller create then view create:

<b>File:</b> QueryUserController.php

```
public function queryUser(){
        $response= QueryUser::all();
        $response = QueryUser::get();
        $response= QueryUser::find(1);
        $response= QueryUser:: where('phone', '1234')->get();
        $response= QueryUser:: where('phone', '1234')->first();

        /// Insert Query
         $response = QueryUser::insert([
             'name' => 'tony',
             'email' => 'tony@gmail.com',
             'password' => '1111'

        ]);
        if ($response) {
             return "Data Inserted";
        } else {
             return "Data not Inserted";
        }


        // Update Query
         $response = QueryUser::where('name',"aliyan")->update([
             'name' => 'tony',
        ]);
        if ($response) {
            return "Data Updated";
        } else {
             return "Data not Updated";
        }


         // Delete Query
        $response = QueryUser::where('name',"aliyan")->delete();
        if ($response) {
            return "Data Deleted";
        } else {
            return "Data not Deleted";
        }

        return view('queryuser', ['data' => $response]);
}
```

<b>Directory:</b> Modal/queryUSer.php: <br/>
Put this File:

```
protected $table = 'users';
```

<b>File:</b> queryUser.blade.php:

```
<div>
    <h1>User List</h1>
    <table border="1">
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
        </tr>

        @foreach ($data as $users)
            <tr>
                <td>{{$users->name}}</td>
                <td>{{$users->email}}</td>
                <td>{{$users->password}}</td>
            </tr>
        @endforeach

    </table>
</div>
```

## What is Route Any and Match function in Laravel:

<b>Any Function:</b>
Allow All request method call single route:

```
Route::any('user',[UserController::class, 'User']);
```

<b>Match Function:</b>

```
Route::match(['post','get'],'user',[UserController::class, 'Group1']);
Route::match(['put','patch'],'user',[UserController::class, 'Group2']);
```

## What is HTTP Request class in Laravel? All Function

Laravel's Illuminate\Http\Request class provides an object-oriented way to interact with the current HTTP request being handled by your application as well as retrieve the input, cookies, and files that were submitted with the request.

<b>File:</b> HttpController.php:

```
function httpRequets(Request $request){
    echo "Request Method is " .$request->method();
    echo "Request Path is " .$request->path();
    echo "Request URl is " .$request->url();
    echo "Request URl is " .$request->input('name');
    echo "Request IP is " .$request->ip();
}
```

## What is Session in laravel?

Sessions in Laravel provide a way to store user-specific data on the server and associate it with a unique session identifier stored on the server-side as a cookie.

<b>File:</b> SessionController.php:

```

function Login(Request $request){
   $request->session()->put('user',$request->input('user'));

   return redirect('profile');
}

function Logout(){
   session()->pull('user');
}
```

<b>File:</b> profile.blade.php

```
<div>
<h1>{{session('user')}}</h1>
</div>
```

## What is Flash Session in laravel?

In Laravel, the best way to pass different types of flash messages in the session.

```
$request->session()->flash('message','User has been Added Succesully');
```
