@extends('admin.authentication.master')

@section('title')
    login
    {{ $title }}
@endsection

@push('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/sweetalert2.css') }}">

    <style>
        .btn-full-width {
            width: 100%;
        }

        .input-group {
            display: flex;
            align-items: center;
        }

        .input-group .show-hide {
            margin-left: 10px;
            cursor: pointer;
        }
    </style>
@endpush

@section('content')
    <section>
        <div class="container-fluid p-0">
            <img class="bg-img-cover bg-center" src="{{ asset('assets/images/login/sign-up.png') }}" />
            <div class="row">
                <div class="col-12">
                    <div class="login-card">
                        <form class="theme-form login-form needs-validation" method="POST" action="{{ route('login') }}"
                            style="border-radius:20px">
                            @csrf
                            <h4 style="text-align: center">Login</h4>
                            <h6 style="text-align: center">Welcome back! Log in to your account.</h6>
                            <div class="form-group">
                                <label>Email Address</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="icon-email"></i></span>
                                    <input class="form-control" type="email" name="email" required=""
                                        placeholder="Test@gmail.com" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="icon-lock"></i></span>
                                    <input class="form-control" id="password" type="password" name="password" required=""
                                        placeholder="*********" />
                                    <div class="show-hide"><span onclick="togglePassword()"></span></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="checkbox">
                                    <input id="checkbox1" type="checkbox" />
                                    <label class="text-muted" for="checkbox1">Remember Username</label>
                                </div>
                                <a class="link" href="{{ route('forget.password') }}">Forgot password?</a>
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
                                        <a href="https://www.linkedin.com/login" target="_blank"><i
                                                data-feather="linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/login" target="_blank"><i
                                                data-feather="twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/login" target="_blank"><i
                                                data-feather="facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/login" target="_blank"><i
                                                data-feather="instagram"> </i></a>
                                    </li>
                                </ul>
                            </div>
                            <p>Don't have account?<a class="ms-2" href="{{ route('sign-up') }}">Create Account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


    @push('scripts')
        <script>
            if (window.history && window.history.pushState) {
                window.history.pushState(null, null, window.location.href);
                window.onpopstate = function() {
                    window.history.pushState(null, null, window.location.href);
                };
            }

            function togglePassword() {
                console.log('Toggle Password function called'); // Debugging line
                var passwordInput = document.getElementById('password');
                var showHideSpan = document.querySelector('.show-hide span');

                if (passwordInput && showHideSpan) {
                    if (passwordInput.type === 'password') {
                        passwordInput.type = 'text';
                        showHideSpan.textContent = 'Hide';
                    } else {
                        passwordInput.type = 'password';
                        showHideSpan.textContent = '';
                    }
                } else {
                    console.error('Element not found');
                }
            }
        </script>
    @endpush
@endsection
