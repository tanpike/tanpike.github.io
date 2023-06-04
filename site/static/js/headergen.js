myHeader = `
      <div class="navbar navbar-expand-lg fixed-top bg-primary" data-bs-theme="dark">
        <div class="container">
          <a href="../" class="navbar-brand">
            <img class="d-inline-block mx-2" src="site/static/img/logo.jpg" alt="" width="30" height="28">
            Tan's Page
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
              <li class="nav-item dropdown" data-bs-theme="light">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="themes">Themes</a>
                <div class="dropdown-menu" aria-labelledby="themes">
                  <a class="dropdown-item" href="../default/">Default</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="../cerulean/">Cerulean</a>
                  <a class="dropdown-item" href="../cosmo/">Cosmo</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
`

navtainer.innerHTML = myHeader;