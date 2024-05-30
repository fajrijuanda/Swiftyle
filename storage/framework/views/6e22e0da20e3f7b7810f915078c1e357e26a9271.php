<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
        content="viho admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities." />
    <meta name="keywords"
        content="admin template, viho admin template, dashboard template, flat admin template, responsive admin template, web app" />
    <meta name="author" content="pixelstrap" />
    <link rel="icon" href="<?php echo e(asset('assets/images/favicon.png')); ?>" type="image/x-icon" />
    <link rel="shortcut icon" href="<?php echo e(asset('assets/images/favicon.png')); ?>" type="image/x-icon" />
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <!-- Google font-->
    <?php if ($__env->exists('admin.authentication.partials.css')) echo $__env->make('admin.authentication.partials.css', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <style>
        /* Styles for the loading screen */
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.8) url('<?php echo e(asset('assets/images/loading/loading.gif')); ?>') center center no-repeat;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
    </style>
</head>

<body>
    <!-- Loading screen -->
    <div id="loading-screen"></div>
    <!-- Loader starts-->
    <div class="loader-wrapper">
        <div class="theme-loader">
            <div class="loader-p"></div>
        </div>
    </div>
    <!-- Loader ends-->
    <!-- error page start //-->
    <?php echo $__env->yieldContent('content'); ?>
    <!-- error page end //-->
    <!-- latest jquery-->
    <?php if ($__env->exists('admin.authentication.partials.js')) echo $__env->make('admin.authentication.partials.js', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <script>
        // Hide loading screen when the page is fully loaded
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
            }, 2000); // 2000 milliseconds = 2 seconds
        });

        // Show loading screen before page unloads
        window.addEventListener('beforeunload', function() {
            document.getElementById('loading-screen').style.display = 'flex';
        });
    </script>
    <!-- latest jquery-->
</body>

</html>
<?php /**PATH C:\laragon\www\Final Project Kelompok 7\resources\views/admin/authentication/master.blade.php ENDPATH**/ ?>