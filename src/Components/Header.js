const Header=()=> {
return(
<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
  <div class="container-fluid" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sub Menus
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Menu 1</a></li>
            <li><a class="dropdown-item" href="#">Menu 2</a></li>
            <li><a class="dropdown-item" href="#">Menu 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

);
}

export default Header;