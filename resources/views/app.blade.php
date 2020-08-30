<!DOCTYPE html>
<html class="h-full">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>AJ Marino's Portfolio</title>

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:400,700" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>

<body class="h-full min-h-full bg-gray-200 text-gray-700 font-lato">
    @inertia
</body>

</html>
