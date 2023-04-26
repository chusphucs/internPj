import "../assets/home.scss";
function Homepage() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="/public/logo.png" alt="logo" />
        </div>
        <div className="about">
          <p className="title">Lorem ipsum dolor sit asmet?</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
        <div className="blogs">
          <div className="blog-item">
            <div className="blog-title">Lorem ipsum dolor sit amet</div>
            <div className="blog-body">
              <img
                src="/public/css.png"
                alt="image"
                width="128"
                height="128"
              />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscingconsectetur
                adipiscing elit. Sed non dui sodales, faucibus libero ut,
                posuere felis. Donec imperdiet suscipit accumsan. Aenean
                consequat condimentum velit ut tempor. Nam porta massa in metus
                bibendum elit. Sed non dui sodales, faucibus libero ut, posuere
                felis. Donec imperdiet suscipit accumsan. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices liquam egestas nunc at{" "}
              </span>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-title">Lorem ipsum dolor sit amet</div>
            <div className="blog-body">
              <img
                src="/public/html.png"
                alt="image"
                width="128"
                height="128"
              />
              <span>
                Lorem ipsum dolor sit ametconsectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum, consectetur adipiscing elit.
                Sed non dui sodales, faucibus libero ut, posuere felis. Donec
                imperdiet suscipit accumsan. Aenean consequat condimentum velit
                ut tempor. Nam porta massa in metus bibendum congue.
                Pellentesque ultrices liquam egestas nunc at{" "}
              </span>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-title">Lorem ipsum dolor sit amet</div>
            <div className="blog-body">
              <img
                src="/public/url.png"
                alt="image"
                width="128"
                height="128"
              />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dconsectetur adipiscing elit. Sed non dui sodales, faucibus
                libero ut, posuere felis. Donec imperdiet suscipit accumsan.
                Aenean consequat condimentum velit ut tempor. Nam porta massa in
                metus bibendumui sodales, faucibus libero ut, posuere felis.
                Donec imperdiet suscipit accumsan. Aenean consequat condimentum
                velit ut tempor. Nam porta massa in metus bibendum congue.
                Pellentesque ultrices liquam egestas nunc at{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>Copyright © 2021</span>
        </div>
      </div>
    </>
  );
}

export default Homepage;
