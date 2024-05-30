<?php $__env->startSection('title'); ?>login
 <?php echo e($title); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('css'); ?>
<style>
    .btn-full-width {
        width: 100%;
    }
</style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
    <section>
    <div class="container-fluid p-0">
        <img class="bg-img-cover bg-center" src="<?php echo e(asset('assets/images/login/sign-up.png')); ?>" />
        <div class="row">
            <div class="col-12">
                <div class="login-card">
                    <form class="theme-form login-form" method="POST" action="<?php echo e(route('login')); ?>" style="border-radius:20px">
                        <?php echo csrf_field(); ?>
                        <h4 style="text-align: center">Login</h4>
                        <h6 style="text-align: center">Welcome back! Log in to your account.</h6>
                        <div class="form-group">
                            <label>Email Address</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="icon-email"></i></span>
                                <input class="form-control" type="email" name="email" required="" placeholder="Test@gmail.com" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="icon-lock"></i></span>
                                <input class="form-control" type="password" name="password" required="" placeholder="*********" />
                                <div class="show-hide"><span class="show"> </span></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="checkbox">
                                <input id="checkbox1" type="checkbox" />
                                <label for="checkbox1">Remember password</label>
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-full-width" type="submit">Sign in</button>
                        </div>
                        <div class="login-social-title">
                            <h5>Sign in with</h5>
                        </div>
                        <div class="form-group">
                            <ul class="login-social">
                                <li>
                                    <a href="https://www.linkedin.com/login" target="_blank"><i data-feather="linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/login" target="_blank"><i data-feather="twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/login" target="_blank"><i data-feather="facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/login" target="_blank"><i data-feather="instagram"> </i></a>
                                </li>
                            </ul>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

	
    <?php $__env->startPush('scripts'); ?>
    <?php $__env->stopPush(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.authentication.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\Final Project Kelompok 7\resources\views/admin/authentication/login.blade.php ENDPATH**/ ?>