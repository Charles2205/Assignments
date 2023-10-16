import { Link } from "react-router-dom"

const Articles =()=>{
return (
    <>
    
    <div className="articles-section" id="blog">
      <h2 className="title">Last Articles</h2>
      <div className="articles-store">
        <div className="article-box">
          <img alt="money img" src="../public/images/image-currency.jpg" />
          <div className="text">
            <p className="auther">By Claire Robinson</p>
            <h3 className="title">
              <Link to="">Receive money in any currency with on fees</Link>
            </h3>
            <p className="articles-description">
              The world is getting smaller and we are becoming more mobile. So
              why should you be forced to only receuve money in a single....{" "}
            </p>
          </div>
        </div>
        <div className="article-box">
          <img alt="restaurtant img" src="../public/images/image-restaurant.jpg" />
          <div className="text">
            <p className="auther">By Wilson Hutton</p>
            <h3 className="title">
              <Link to="">Treat yourself without worrying about money</Link>
            </h3>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you ....
            </p>
          </div>
        </div>
        <div className="article-box">
          <img alt="plane img " src="../public/images/image-plane.jpg" />
          <div className="text">
            <p className="auther">By Wilson Hutton</p>
            <h3 className="title">
              <Link to="">Take your Easybank card wherever you go </Link>
            </h3>
            <p>
              We want you to enjoy your travels.This is why we do not charge any
              fees on purchases while you are abroad . We will even show you
              ....
            </p>
          </div>
        </div>
        <div className="article-box">
          <img alt="" src="../public/images/image-confetti.jpg" />
          <div className="text">
            <p className="auther"> By Claire Robinson</p>
            <h3 className="title">
              <Link to="">Our inivite-only Beta accounts are now live!</Link>
            </h3>
            <p>
              After a lot of hard work by the whole team , we are excited to
              launch our closed beta . it is easy to request an invite through
              the site ....
            </p>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
)
}

export default Articles