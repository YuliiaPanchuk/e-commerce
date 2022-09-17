import './LogInForm.css';

export function LogInForm() {
  return (
    <div className="logInWrapper">
      <div className="LogInContainer">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className="logInHeader">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"/>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"/>
              </a>
            </div>
            <small>or use your email for registration</small>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="logInFormBtn">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="logInHeader">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"/>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"/>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"/>
              </a>
            </div>
            <small>or use your account</small>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgotPassword">Forgot your password?</a>
            <button className="logInFormBtn">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="logInHeader">Hello!</h1>
              <p className="logInUnderHeader">Enter your personal details and start journey with us</p>
              <button className="ghost logInFormBtn" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
